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


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = "__all__"
        read_only_fields = (
            "id",
            "income_year",
            "income_cycle",
            "overall_gpa",
            "last_gpa",
        )

    def create(self, validated_data):
        user = models.User.objects.create_user(
            username=validated_data["email"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        student = models.Student.objects.create(
            user=user,
            name=validated_data["name"],
            email=validated_data["email"],
            phone=validated_data["phone"],
            address=validated_data["address"],
            city=validated_data["city"],
        )
        return student
