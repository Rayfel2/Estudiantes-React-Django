from django.contrib import admin

from core import models

admin.site.register(models.AcademicCycle)
admin.site.register(models.Career)
admin.site.register(models.DocumentType)
admin.site.register(models.Professor)
admin.site.register(models.Student)
admin.site.register(models.Subject)
admin.site.register(models.SubjectStudentCycle)
admin.site.register(models.User)
