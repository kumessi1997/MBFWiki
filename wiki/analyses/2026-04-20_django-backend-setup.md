---
title: Hướng dẫn Setup Django Backend (CMS cho MBF Wiki)
type: analysis
tags: [django, backend, setup, cms, postgresql]
created: 2026-04-20
updated: 2026-04-20
---

## Mục tiêu

Xây dựng Django CMS để quản lý nội dung wiki MBF (sources, products, organizations, clients, concepts) thay cho việc edit file markdown trực tiếp trong Obsidian. Sau setup, bạn có thể:

- Dùng Django Admin để thêm/sửa/xóa sources và products qua giao diện web
- Expose REST API nếu sau này cần tích hợp với frontend (Next.js/mobile)
- Import dữ liệu từ file markdown hiện có trong `wiki/` vào database
- Export ngược lại ra markdown để giữ tương thích với Obsidian

Stack đã chọn: **Django 5.x + PostgreSQL + Django REST Framework + Django Admin**.

---

## 1. Chuẩn bị môi trường

### Yêu cầu

- Python 3.11+ (`python3 --version`)
- PostgreSQL 14+ (`psql --version`)
- Git
- (Khuyến nghị) `pipx` hoặc `uv` để quản lý Python tools

### Cài PostgreSQL trên macOS

```bash
brew install postgresql@16
brew services start postgresql@16
```

### Tạo database

```bash
createdb mbf_wiki
createuser --pwprompt mbf_user   # đặt password, ví dụ: mbf_pass_2026
psql -d mbf_wiki -c "GRANT ALL PRIVILEGES ON DATABASE mbf_wiki TO mbf_user;"
psql -d mbf_wiki -c "GRANT ALL ON SCHEMA public TO mbf_user;"
```

---

## 2. Khởi tạo Django project

```bash
# Tạo thư mục backend ngang với wiki/
cd /Users/macbook/Downloads/raw
mkdir backend && cd backend

# Virtualenv
python3 -m venv .venv
source .venv/bin/activate

# Cài packages
pip install --upgrade pip
pip install django djangorestframework psycopg2-binary python-decouple django-cors-headers markdown python-frontmatter

# Freeze requirements
pip freeze > requirements.txt

# Khởi tạo Django project
django-admin startproject mbf_cms .
python manage.py startapp wiki
```

Cấu trúc sau bước này:

```
backend/
├── .venv/
├── manage.py
├── requirements.txt
├── mbf_cms/          # settings, urls, wsgi
│   ├── settings.py
│   ├── urls.py
│   └── ...
└── wiki/             # app chính
    ├── models.py
    ├── admin.py
    ├── views.py
    └── ...
```

---

## 3. Cấu hình `mbf_cms/settings.py`

Tạo file `.env` trong `backend/`:

```bash
# backend/.env
SECRET_KEY=django-insecure-CHANGE-THIS-TO-RANDOM-STRING
DEBUG=True
DB_NAME=mbf_wiki
DB_USER=mbf_user
DB_PASSWORD=mbf_pass_2026
DB_HOST=localhost
DB_PORT=5432
WIKI_ROOT=/Users/macbook/Downloads/raw
```

Thêm `.env` vào `.gitignore`. Trong `settings.py`:

```python
from pathlib import Path
from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = config("SECRET_KEY")
DEBUG = config("DEBUG", default=False, cast=bool)
ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # third-party
    "rest_framework",
    "corsheaders",
    # local
    "wiki",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": config("DB_NAME"),
        "USER": config("DB_USER"),
        "PASSWORD": config("DB_PASSWORD"),
        "HOST": config("DB_HOST"),
        "PORT": config("DB_PORT"),
    }
}

LANGUAGE_CODE = "vi"
TIME_ZONE = "Asia/Ho_Chi_Minh"
USE_I18N = True
USE_TZ = True

WIKI_ROOT = Path(config("WIKI_ROOT"))

CORS_ALLOWED_ORIGINS = ["http://localhost:3000"]  # frontend dev

REST_FRAMEWORK = {
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 20,
}
```

---

## 4. Thiết kế models — map với schema vault

File `wiki/models.py`:

```python
from django.db import models
from django.utils.text import slugify


class Tag(models.Model):
    name = models.CharField(max_length=64, unique=True)
    slug = models.SlugField(max_length=80, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class MBFCategory(models.TextChoices):
    PROCESS_TRANSFORMATION = "process-transformation", "Process Transformation"
    TECHNOLOGY_PLATFORM = "technology-platform", "Technology Platform"
    CRM_CX = "crm-cx", "CRM & CX"
    BANKING_FINANCE = "banking-finance", "Banking & Finance"
    HEALTHCARE = "healthcare", "Healthcare"
    MANUFACTURING = "manufacturing", "Manufacturing"
    EDUCATION = "education", "Education"
    GOVERNMENT = "government", "Government"
    SPEND_MANAGEMENT = "spend-management", "Spend Management"


class Organization(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    description = models.TextField(blank=True)
    is_client = models.BooleanField(default=False, help_text="Là khách hàng (vs. nội bộ FPT)")
    website = models.URLField(blank=True)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    category = models.CharField(max_length=40, choices=MBFCategory.choices)
    owner = models.ForeignKey(
        Organization, on_delete=models.SET_NULL, null=True, blank=True,
        related_name="products", limit_choices_to={"is_client": False},
    )
    summary = models.TextField(blank=True, help_text="1-2 câu mô tả ngắn")
    body = models.TextField(blank=True, help_text="Nội dung markdown đầy đủ")
    tags = models.ManyToManyField(Tag, blank=True, related_name="products")
    clients = models.ManyToManyField(
        Organization, blank=True, related_name="used_products",
        limit_choices_to={"is_client": True},
    )
    source_count = models.PositiveIntegerField(default=0)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    class Meta:
        ordering = ["category", "name"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"


class Concept(models.Model):
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    body = models.TextField(blank=True)
    tags = models.ManyToManyField(Tag, blank=True, related_name="concepts")
    related_products = models.ManyToManyField(Product, blank=True, related_name="concepts")
    source_count = models.PositiveIntegerField(default=0)
    created = models.DateField(auto_now_add=True)
    updated = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Source(models.Model):
    title = models.CharField(max_length=300)
    slug = models.SlugField(max_length=320, unique=True)
    source_date = models.DateField(help_text="Ngày tài liệu gốc (YYYY-MM-DD trong filename)")
    file_path = models.CharField(
        max_length=500, blank=True,
        help_text="Đường dẫn tương đối so với WIKI_ROOT, ví dụ: sources/2025-04-10_fpt-mbf-product-catalog.md",
    )
    summary = models.TextField(blank=True)
    key_facts = models.TextField(blank=True, help_text="Bullet list (markdown)")
    body = models.TextField(blank=True, help_text="Full source summary content")
    tags = models.ManyToManyField(Tag, blank=True, related_name="sources")
    products = models.ManyToManyField(Product, blank=True, related_name="sources")
    organizations = models.ManyToManyField(Organization, blank=True, related_name="sources")
    concepts = models.ManyToManyField(Concept, blank=True, related_name="sources")
    notes = models.TextField(blank=True, help_text="Ghi chú cá nhân — từ 'My notes' trong source page")
    ingested_at = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-source_date"]

    def __str__(self):
        return f"[{self.source_date}] {self.title}"


class LogEntry(models.Model):
    class EntryType(models.TextChoices):
        INGEST = "ingest", "Ingest"
        QUERY = "query", "Query"
        LINT = "lint", "Lint"
        EDIT = "edit", "Edit"

    entry_date = models.DateField()
    entry_type = models.CharField(max_length=16, choices=EntryType.choices)
    title = models.CharField(max_length=300)
    body = models.TextField(blank=True)
    pages_touched = models.TextField(blank=True, help_text="Danh sách pages (một dòng/trang)")
    follow_ups = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-entry_date", "-created"]

    def __str__(self):
        return f"[{self.entry_date}] {self.get_entry_type_display()} — {self.title}"
```

Chạy migration:

```bash
python manage.py makemigrations wiki
python manage.py migrate
python manage.py createsuperuser   # admin/admin123 cho dev
```

---

## 5. Đăng ký Admin panel (CMS interface)

File `wiki/admin.py`:

```python
from django.contrib import admin
from .models import Tag, Organization, Product, Concept, Source, LogEntry


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ("name", "is_client", "website", "updated")
    list_filter = ("is_client",)
    search_fields = ("name", "description")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "owner", "source_count", "updated")
    list_filter = ("category", "owner")
    search_fields = ("name", "summary", "body")
    filter_horizontal = ("tags", "clients")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Concept)
class ConceptAdmin(admin.ModelAdmin):
    list_display = ("name", "source_count", "updated")
    search_fields = ("name", "body")
    filter_horizontal = ("tags", "related_products")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Source)
class SourceAdmin(admin.ModelAdmin):
    list_display = ("title", "source_date", "file_path", "ingested_at")
    list_filter = ("source_date", "products__category")
    search_fields = ("title", "summary", "body", "file_path")
    filter_horizontal = ("tags", "products", "organizations", "concepts")
    date_hierarchy = "source_date"


@admin.register(LogEntry)
class LogEntryAdmin(admin.ModelAdmin):
    list_display = ("entry_date", "entry_type", "title")
    list_filter = ("entry_type", "entry_date")
    search_fields = ("title", "body")
    date_hierarchy = "entry_date"
```

Chạy server và truy cập admin:

```bash
python manage.py runserver
# Mở http://127.0.0.1:8000/admin/
```

---

## 6. REST API (optional — cho frontend sau này)

File `wiki/serializers.py`:

```python
from rest_framework import serializers
from .models import Source, Product, Organization, Concept, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name", "slug"]


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["id", "name", "slug", "description", "is_client", "website"]


class ProductSerializer(serializers.ModelSerializer):
    owner = OrganizationSerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    clients = OrganizationSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            "id", "name", "slug", "category", "owner",
            "summary", "body", "tags", "clients",
            "source_count", "created", "updated",
        ]


class SourceSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Source
        fields = [
            "id", "title", "slug", "source_date", "file_path",
            "summary", "body", "tags", "products",
            "ingested_at", "updated",
        ]
```

File `wiki/views.py`:

```python
from rest_framework import viewsets, filters
from .models import Source, Product, Organization, Concept
from .serializers import SourceSerializer, ProductSerializer, OrganizationSerializer


class SourceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Source.objects.prefetch_related("tags", "products").all()
    serializer_class = SourceSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["title", "summary", "body"]
    ordering_fields = ["source_date", "ingested_at"]


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.select_related("owner").prefetch_related("tags", "clients").all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["name", "summary", "body"]
```

File `wiki/urls.py`:

```python
from rest_framework.routers import DefaultRouter
from .views import SourceViewSet, ProductViewSet

router = DefaultRouter()
router.register("sources", SourceViewSet)
router.register("products", ProductViewSet)

urlpatterns = router.urls
```

Sửa `mbf_cms/urls.py`:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("wiki.urls")),
]
```

Test: `http://127.0.0.1:8000/api/sources/` và `http://127.0.0.1:8000/api/products/`.

---

## 7. Import dữ liệu từ wiki markdown hiện có

Tạo management command `wiki/management/commands/import_wiki.py`:

```bash
mkdir -p wiki/management/commands
touch wiki/management/__init__.py wiki/management/commands/__init__.py
```

```python
# wiki/management/commands/import_wiki.py
import re
from datetime import datetime
from pathlib import Path

import frontmatter
from django.conf import settings
from django.core.management.base import BaseCommand
from django.utils.text import slugify

from wiki.models import Source, Product, Organization, Concept, Tag, MBFCategory


DATE_SLUG_RE = re.compile(r"^(\d{4}-\d{2}-\d{2})_(.+)\.md$")


class Command(BaseCommand):
    help = "Import markdown files from WIKI_ROOT into database"

    def handle(self, *args, **options):
        root = settings.WIKI_ROOT
        self.import_sources(root / "wiki" / "sources")
        self.import_products(root / "wiki" / "products")
        self.import_concepts(root / "wiki" / "concepts")
        self.stdout.write(self.style.SUCCESS("Import done."))

    def import_sources(self, folder: Path):
        if not folder.exists():
            return
        for md_file in folder.glob("*.md"):
            m = DATE_SLUG_RE.match(md_file.name)
            if not m:
                self.stdout.write(f"Skip non-dated file: {md_file.name}")
                continue
            date_str, slug = m.groups()
            post = frontmatter.load(md_file)
            src, _ = Source.objects.update_or_create(
                slug=slug,
                defaults={
                    "title": post.get("title", slug),
                    "source_date": datetime.strptime(date_str, "%Y-%m-%d").date(),
                    "file_path": str(md_file.relative_to(settings.WIKI_ROOT)),
                    "body": post.content,
                },
            )
            for tag_name in post.get("tags", []) or []:
                tag, _ = Tag.objects.get_or_create(name=tag_name)
                src.tags.add(tag)
            self.stdout.write(f"  Source: {src.title}")

    def import_products(self, folder: Path):
        if not folder.exists():
            return
        category_map = {c.value: c.value for c in MBFCategory}
        for subfolder in folder.iterdir():
            if not subfolder.is_dir():
                continue
            category = category_map.get(subfolder.name)
            if not category:
                continue
            for md_file in subfolder.glob("*.md"):
                post = frontmatter.load(md_file)
                name = post.get("title", md_file.stem)
                Product.objects.update_or_create(
                    slug=slugify(name),
                    defaults={
                        "name": name,
                        "category": category,
                        "body": post.content,
                        "summary": (post.content[:200] + "...") if len(post.content) > 200 else post.content,
                    },
                )
                self.stdout.write(f"  Product: {name} ({category})")

    def import_concepts(self, folder: Path):
        if not folder.exists():
            return
        for md_file in folder.glob("*.md"):
            post = frontmatter.load(md_file)
            name = post.get("title", md_file.stem)
            Concept.objects.update_or_create(
                slug=slugify(name),
                defaults={"name": name, "body": post.content},
            )
            self.stdout.write(f"  Concept: {name}")
```

Chạy import:

```bash
python manage.py import_wiki
```

---

## 8. Checklist sau khi setup

Sau khi hoàn tất, kiểm tra các điểm sau:

1. `python manage.py runserver` khởi động không lỗi.
2. Vào `http://127.0.0.1:8000/admin/` login được và thấy các section: Sources, Products, Organizations, Concepts, Tags, Log entries.
3. `python manage.py import_wiki` chạy thành công, thấy list sources và products được tạo.
4. Admin hiển thị 15 products theo đúng 9 category MBF (process-transformation, technology-platform, crm-cx, banking-finance, healthcare, manufacturing, education, government, spend-management).
5. `GET /api/sources/` trả về JSON list sources.
6. `GET /api/products/?search=akabot` lọc được product theo tên.

---

## 9. Next steps gợi ý

Sau khi backend chạy ổn, các bước nâng cao nên cân nhắc:

- **Full-text search**: dùng PostgreSQL `SearchVector` hoặc tích hợp Meilisearch/Typesense cho tìm kiếm tiếng Việt có dấu.
- **Export ngược markdown**: management command `export_wiki` để giữ đồng bộ 2 chiều với Obsidian vault.
- **Authentication**: thêm `djangorestframework-simplejwt` nếu mở API public.
- **Docker**: viết `Dockerfile` + `docker-compose.yml` (app + postgres) cho deploy dễ.
- **Frontend**: Next.js/Nuxt đọc từ `/api/` để build public wiki browser cho AM/PO.
- **Signals**: auto tăng `source_count` trên Product/Concept khi Source m2m thay đổi.

---

## Tham chiếu

- Django docs: https://docs.djangoproject.com/en/5.0/
- DRF: https://www.django-rest-framework.org/
- psycopg2: https://www.psycopg.org/docs/
- python-frontmatter: https://python-frontmatter.readthedocs.io/
