from __future__ import annotations

from django.conf import settings
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from datetime import date


class UserManager(BaseUserManager):
    """Custom user manager."""

    def create(
        self,
        document_type: DocumentType,
        document_no: str,
        first_name: str,
        last_name: str,
        username: str,
        email: str,
        password: str,
        birth_date: date,
    ) -> User:
        """Create a new user with the given details."""

        user = self.model(
            document_type=document_type,
            document_no=document_no,
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password,
            birth_date=birth_date,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(
        self,
        document_type: DocumentType,
        document_no: str,
        first_name: str,
        last_name: str,
        username: str,
        email: str,
        password: str,
        birth_date: date,
    ) -> User:
        """Create a new superuser with the given details."""

        user = self.create(
            document_type=document_type,
            document_no=document_no,
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=password,
            birth_date=birth_date,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

    def normalize_email(self, email: str) -> str:
        """Normalize the email address by lowercasing the given address."""

        return email.lower()


class DocumentType(models.Model):
    """Document type model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    name = models.CharField(verbose_name=_("name"), max_length=50)

    def __str__(self) -> str:
        return self.name


class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    document_type = models.ForeignKey(
        DocumentType,
        verbose_name=_("document type"),
        on_delete=models.PROTECT,
        related_name="users",
    )
    document_no = models.CharField(
        verbose_name=_("document number"),
        max_length=20,
        unique=True,
    )
    first_name = models.CharField(verbose_name=_("first name"), max_length=50)
    last_name = models.CharField(verbose_name=_("last name"), max_length=50)
    email = models.EmailField(
        verbose_name=_("email"), max_length=255, unique=True
    )
    birth_date = models.DateField(verbose_name=_("birth date"))
    is_admin = models.BooleanField(verbose_name=_("is admin"), default=False)

    objects = UserManager()
    REQUIRED_FIELDS = [
        "document_type",
        "document_no",
        "first_name",
        "last_name",
        "email",
    ]

    def __str__(self) -> str:
        return self.email

    def has_perm(self, perm, obj) -> bool:
        return self.is_admin

    def has_module_perms(self, app_label) -> bool:
        return self.is_admin


class Career(models.Model):
    """Career model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    name = models.CharField(verbose_name=_("name"), max_length=50)
    code = models.CharField(verbose_name=_("code"), max_length=10)

    def __str__(self) -> str:
        return self.name


class Student(models.Model):
    """Student model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        verbose_name=_("user"),
        on_delete=models.CASCADE,
        related_name="student",
    )
    registration_number = models.CharField(
        verbose_name=_("registration number"),
        max_length=20,
        unique=True,
    )
    career = models.ForeignKey(
        Career,
        verbose_name=_("career"),
        on_delete=models.PROTECT,
        related_name="students",
    )
    email = models.EmailField(
        verbose_name=_("email"), max_length=255, unique=True
    )
    income_year = models.PositiveSmallIntegerField(
        verbose_name=_("income year"),
        validators=[MinValueValidator(1900)],
    )
    income_cycle = models.PositiveSmallIntegerField(
        verbose_name=_("income cycle"),
        validators=[MinValueValidator(1)],
    )
    overall_gpa = models.DecimalField(
        verbose_name=_("overall GPA"),
        max_digits=3,
        decimal_places=2,
        validators=[MinValueValidator(0.0), MaxValueValidator(4.0)],
    )
    last_gpa = models.DecimalField(
        verbose_name=_("last GPA"),
        max_digits=3,
        decimal_places=2,
        validators=[MinValueValidator(0.0), MaxValueValidator(4.0)],
    )

    def __str__(self) -> str:
        return self.user.username


class Professor(models.Model):
    """Professor model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        verbose_name=_("user"),
        on_delete=models.CASCADE,
        related_name="professor",
    )
    username = models.CharField(
        verbose_name=_("username"), max_length=50, unique=True
    )
    email = models.EmailField(
        verbose_name=_("email"), max_length=255, unique=True
    )
    income_year = models.PositiveSmallIntegerField(
        verbose_name=_("income year"),
        validators=[MinValueValidator(1900)],
    )

    def __str__(self) -> str:
        return self.user.username


class Subject(models.Model):
    """Subject model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    name = models.CharField(verbose_name=_("name"), max_length=50)
    code = models.CharField(verbose_name=_("code"), max_length=10)
    is_lab = models.BooleanField(verbose_name=_("is lab"), default=False)
    credits = models.PositiveSmallIntegerField(
        verbose_name=_("credits"),
        validators=[MinValueValidator(0), MaxValueValidator(10)],
    )

    def __str__(self) -> str:
        return self.name


class AcademicCycle(models.Model):
    """Academic cycle model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    year = models.PositiveSmallIntegerField(
        verbose_name=_("year"),
        validators=[MinValueValidator(1900)],
    )
    cycle = models.PositiveSmallIntegerField(
        verbose_name=_("cycle"),
        validators=[MinValueValidator(1)],
    )
    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name=_("student"),
        on_delete=models.CASCADE,
        related_name="academic_cycles",
    )
    taken_credits = models.PositiveSmallIntegerField(
        verbose_name=_("taken credits"),
        validators=[MinValueValidator(0), MaxValueValidator(50)],
    )

    def __str__(self) -> str:
        return f"{self.student.user.username} - {self.year} - {self.cycle}"


class SubjectStudentCycle(models.Model):
    """Subject student cycle model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    cycle = models.ForeignKey(
        AcademicCycle,
        verbose_name=_("academic cycle"),
        on_delete=models.CASCADE,
        related_name="subject_student_cycles",
    )
    subject = models.ForeignKey(
        Subject,
        verbose_name=_("subject"),
        on_delete=models.CASCADE,
        related_name="subject_student_cycles",
    )
    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name=_("student"),
        on_delete=models.CASCADE,
        related_name="subject_student_cycles",
    )
    midterm_grade = models.DecimalField(
        verbose_name=_("mid-term grade"),
        max_digits=4,
        decimal_places=2,
        validators=[MinValueValidator(0.0), MaxValueValidator(70.0)],
    )
    final_grade = models.DecimalField(
        verbose_name=_("final grade"),
        max_digits=5,
        decimal_places=2,
        validators=[MinValueValidator(0.0), MaxValueValidator(100.0)],
    )
    final_grade_letter = models.CharField(
        verbose_name=_("final grade letter"),
        max_length=2,
        choices=("A", "B+", "B", "C+", "C", "D", "F"),
    )

    def __str__(self) -> str:
        return f"{self.subject.name} - {self.student.registration_number} - {self.cycle.year} - {self.cycle.cycle}"


class Message(models.Model):
    """Message model."""

    id = models.BigAutoField(
        verbose_name=_("id"), primary_key=True, unique=True, editable=False
    )
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name=_("sender"),
        on_delete=models.CASCADE,
        related_name="sent_messages",
    )
    receiver = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name=_("receiver"),
        on_delete=models.CASCADE,
        related_name="received_messages",
    )
    body = models.TextField(verbose_name=_("body"))
    sent_at = models.DateTimeField(
        verbose_name=_("sent at"), auto_now_add=True
    )

    def __str__(self) -> str:
        return f"{self.sender.email} - {self.receiver.email}"
