from django.contrib.auth import get_user_model

from rest_framework import serializers


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
