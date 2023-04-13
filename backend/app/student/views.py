from django.urls import reverse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model

from rest_framework_simplejwt.views import TokenObtainPairView

from core import models, permissions
from core import serializers


class StudentListView(APIView):
    serializer_class = serializers.StudentSerializer
    permission_classes = (permissions.ReadOnlyProfessor,)

    def get(self, request, format=None):
        try:
            students = models.Student.objects.all()
            serializer = self.serializer_class(students, many=True)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class StudentDetailView(APIView):
    serializer_class = serializers.StudentSerializer
    permission_classes = (permissions.ReadOnlyProfessor,)

    def get(self, request, id, format=None):
        try:
            student = models.Student.objects.get(id=id)
            serializer = self.serializer_class(student)
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


class StudentLoginView(TokenObtainPairView):
    serializer_class = serializers.StudentTokenObtainPairSerializer


class StudentProfileView(APIView):
    serializer_class = serializers.StudentSerializer
    permission_classes = (permissions.IsStudent,)

    def get(self, request, format=None):
        try:
            user = request.user
            student = models.Student.objects.get(user=user)
            serializer = self.serializer_class(student)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class StudentProfileGradesView(APIView):
    serializer_class = serializers.StudentGradesSerializer
    permission_classes = (permissions.IsStudent,)

    def get(self, request, format=None):
        try:
            student = request.user
            grades = models.SubjectCycle.objects.filter(
                cycle__student__user=student
            )
            serializer = self.serializer_class(grades, many=True)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class StudentProfileAcademicRecordView(APIView):
    serializer_class = serializers.StudentAcademicRecordSerializer
    permission_classes = (permissions.IsStudent,)

    def get(self, request, format=None):
        try:
            student = request.user
            cycles = models.AcademicCycle.objects.filter(student__user=student)
            serializer = self.serializer_class(cycles, many=True)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

User = get_user_model()

class PasswordResetView(APIView):
    serializer_class = serializers.PasswordResetSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            try:
                user = User.objects.get(email=serializer.validated_data['email'])
                serializer.update(user, serializer.validated_data)
                return Response({"detail": "Contraseña actualizada con éxito"}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"detail": "No se encontró un usuario con ese correo electrónico"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
