from rest_framework.permissions import BasePermission

from core import models


class IsStudent(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_authenticated:
            student = models.Student.objects.filter(user=request.user)
            return student.exists()

        return False
