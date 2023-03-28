from django.contrib.auth import get_user_model

from rest_framework import exceptions, serializers

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from core import models


class StudentTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        try:
            data = super().validate(attrs)
            user = self.user

            models.Student.objects.get(user=user)
            return data
        except models.Student.DoesNotExist:
            raise exceptions.AuthenticationFailed(
                self.error_messages["no_active_account"],
                "no_active_account",
            )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "document_type",
            "document_no",
            "first_name",
            "last_name",
            "username",
            "email",
            "password",
            "birth_date",
        )
        extra_kwargs = {
            "password": {
                "write_only": True,
                "min_length": 8,
            },
        }
        read_only_fields = (
            "id",
            "is_active",
            "is_staff",
            "is_superuser",
            "last_login",
            "date_joined",
        )

    def to_representation(self, instance):
        respresentation = super().to_representation(instance)
        document_type_id = respresentation["document_type"]
        document_type = models.DocumentType.objects.get(id=document_type_id)
        respresentation["document_type"] = document_type.name
        return respresentation


class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = models.Student
        fields = "__all__"
        read_only_fields = (
            "id",
            "income_year",
            "overall_gpa",
            "last_gpa",
        )


class AcademicCycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AcademicCycle
        fields = "__all__"
        read_only_fields = ("id",)
        extra_kwargs = {
            "student": {"write_only": True},
        }


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subject
        fields = "__all__"
        read_only_fields = ("id",)


class StudentGradesSerializer(serializers.ModelSerializer):
    cycle = AcademicCycleSerializer()
    subject = SubjectSerializer()

    class Meta:
        model = models.SubjectCycle
        fields = "__all__"
        read_only_fields = ("id",)


class StudentAcademicRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AcademicCycle
        exclude = ("student",)
        read_only_fields = ("id",)


class StudentProfileSubjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SubjectCycle
        fields = ("id", "cycle", "subject")
        read_only_fields = ("id",)


class CycleSubjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SubjectCycle
        fields = ("id", "cycle", "subject")
        extra_kwargs = {
            "cycle": {"required": False},
        }
        read_only_fields = ("id", "cycle")

    def create(self, validated_data):
        cycle = validated_data["cycle"]
        subject = validated_data["subject"]

        cycle.taken_credits += subject.credits
        cycle.save()

        return super().create(validated_data)

    def delete(self, instance):
        cycle = instance.cycle
        cycle.taken_credits -= instance.subject.credits
        cycle.save()

        instance.delete()
