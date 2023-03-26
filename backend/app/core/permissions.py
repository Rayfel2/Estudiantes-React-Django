from rest_framework.permissions import BasePermission

from core import models


class ReadOnlyProfessor(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        if user.is_authenticated:
            return False

        professor = models.Professor.objects.filter(user=user)
        if not professor.exists():
            return False

        return request.method in ["GET", "HEAD", "OPTIONS"]


class IsProfessor(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        if not user.is_authenticated:
            return False

        professor = models.Professor.objects.filter(user=user)
        return professor.exists()


class IsStudent(BasePermission):
    def has_permission(self, request, view):
        user = request.user
        if not user.is_authenticated:
            return False

        student = models.Student.objects.filter(user=user)
        return student.exists()
