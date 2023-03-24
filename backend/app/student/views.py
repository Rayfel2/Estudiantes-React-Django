from django.urls import reverse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from core import models
from student import serializers


class StudentListView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        try:
            users = models.Student.objects.all()
            serializer = serializers.StudentSerializer(users, many=True)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def post(self, request, format=None):
        try:
            data = request.data
            serializer = serializers.StudentSerializer(data=data)
            if not serializer.is_valid():
                response = serializer.errors
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            response = serializer.data
            headers = {
                "Location": reverse("student:detail", args=[response["id"]])
            }
            return Response(
                response, status=status.HTTP_201_CREATED, headers=headers
            )
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class StudentDetailView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, id, format=None):
        try:
            user = models.Student.objects.get(id=id)
            serializer = serializers.StudentSerializer(user)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except models.Student.DoesNotExist:
            response = {"error": "Student does not exist"}
            return Response(
                response,
                status=status.HTTP_404_NOT_FOUND,
            )
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def patch(self, request, id, format=None):
        try:
            user = models.Student.objects.get(id=id)
            data = request.data
            serializer = serializers.StudentSerializer(user, data=data)
            if not serializer.is_valid():
                response = serializer.errors
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except models.Student.DoesNotExist:
            response = {"error": "Student does not exist"}
            return Response(
                response,
                status=status.HTTP_404_NOT_FOUND,
            )
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class StudentProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        try:
            user = request.user
            serializer = serializers.StudentSerializer(user)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def patch(self, request, format=None):
        try:
            user = request.user
            data = request.data
            serializer = serializers.StudentSerializer(user, data=data)
            if not serializer.is_valid():
                response = serializer.errors
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class StudentGradesView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        try:
            user = request.user
            serializer = serializers.StudentGradesSerializer(user)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
