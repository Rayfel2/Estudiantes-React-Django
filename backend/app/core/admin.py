from django.contrib import admin
from django.contrib.admin import ModelAdmin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from core import models


class UserAdmin(BaseUserAdmin):
    ordering = ("id",)
    list_display = ("username", "email")
    list_filter = ("document_type", "is_active", "is_staff", "is_superuser")
    search_fields = (
        "document_no",
        "first_name",
        "last_name",
        "username",
        "email",
    )
    readonly_fields = (
        "last_login",
        "date_joined",
    )
    fieldsets = (
        (
            "Personal Info",
            {
                "fields": (
                    "document_type",
                    "document_no",
                    "first_name",
                    "last_name",
                    "birth_date",
                ),
            },
        ),
        (
            "Account Info",
            {
                "classes": ("wide",),
                "fields": (
                    "username",
                    "email",
                    "password",
                ),
            },
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (
            "Important Dates",
            {
                "fields": (
                    "last_login",
                    "date_joined",
                ),
            },
        ),
    )
    add_fieldsets = (
        (
            "Personal Info",
            {
                "classes": ("wide",),
                "fields": (
                    "document_type",
                    "document_no",
                    "first_name",
                    "last_name",
                    "birth_date",
                ),
            },
        ),
        (
            "Account Info",
            {
                "classes": ("wide",),
                "fields": (
                    "username",
                    "email",
                    "password1",
                    "password2",
                ),
            },
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
    )


class StudentAdmin(ModelAdmin):
    ordering = ("id",)
    list_display = ("user", "career")
    list_filter = ("career__name", "income_year")
    search_fields = (
        "user__document_no",
        "user__first_name",
        "user__last_name",
        "user__username",
        "user__email",
    )
    fieldsets = (
        (
            "Student Info",
            {
                "fields": ("user",),
            },
        ),
        (
            "Academic Info",
            {"fields": ("career",)},
        ),
    )

    def get_readonly_fields(self, request, obj=...):
        return (
            self.readonly_fields
            if not obj
            else self.readonly_fields + ("user",)
        )


admin.site.register(models.AcademicCycle)
admin.site.register(models.Career)
admin.site.register(models.DocumentType)
admin.site.register(models.Professor)
admin.site.register(models.Student, StudentAdmin)
admin.site.register(models.Subject)
admin.site.register(models.SubjectCycle)
admin.site.register(models.User, UserAdmin)
