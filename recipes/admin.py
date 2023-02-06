from django.contrib import admin

# Register your models here.
from .models import Recipe, CategoryModel


class RecipeInline(admin.TabularInline):
    model = Recipe


class BookAdmin(admin.ModelAdmin):
    inlines = [
        RecipeInline,
    ]


list_display = (
    "title",
    "content",
    "author",
)

admin.site.register(Recipe) 
admin.site.register(CategoryModel)
