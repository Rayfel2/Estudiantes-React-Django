from django.urls import reverse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.views import TokenObtainPairView

from core import models, permissions
from core import serializers

class ProfessorListView(APIView):
    serializer_class = serializers.ProfessorSerializer
    permission_classes = (permissions.ReadOnlyProfessor,)

    def get(self, request, format=None):
        try:
            professors = models.Professor.objects.all()
            serializer = self.serializer_class(professors, many=True)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class ProfessorDetailView(APIView):
    serializer_class = serializers.ProfessorSerializer
    permission_classes = (permissions.ReadOnlyProfessor,)

    def get(self, request, id, format=None):
        try:
            professor = models.Professor.objects.get(id=id)
            serializer = self.serializer_class(professor)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except models.Professor.DoesNotExist:
            response = {"error": "Professor does not exist"}
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


class ProfessorLoginView(TokenObtainPairView):
    serializer_class = serializers.ProfessorTokenObtainPairSerializer


class ProfessorProfileView(APIView):
    serializer_class = serializers.ProfessorSerializer
    permission_classes = (permissions.IsProfessor,)

    def get(self, request, format=None):
        try:
            user = request.user
            professor = models.Professor.objects.get(user=user)
            serializer = self.serializer_class(professor)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
        


class ProfessorSubjectViewStudent(APIView):
    serializers_class = serializers.ProfessorViewSerializer
    permission_classes = (permissions.IsProfessor,)

    def get(self, request, id, format=None):
        try:
            user = request.user
            subjects = models.SubjectCycle.objects.filter(subject__professor__user = user, subject__id = id)
            serializers = self.serializers_class(subjects, many=True)
            response = serializers.data
            return Response(response, status=status.HTTP_200_OK)
        
        except Exception as e:
            print(e)
            return Response(
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class ProfessorSubjectGradeStudent(APIView):
    serializer_class = serializers.ProfessorGradeSerializer
    permission_classes = (permissions.IsProfessor,)

    def post(self, request, id):
        subject_cycle = models.SubjectCycle.objects.get(id=id)

        mid_term_grade = request.data.get('midterm_grade')
        final_grade = request.data.get('final_grade')

        if mid_term_grade is not None and subject_cycle.midterm_grade == 0:
            subject_cycle.midterm_grade = mid_term_grade

        if final_grade is not None and subject_cycle.final_grade == 0:
            subject_cycle.final_grade = final_grade

        subject_cycle.save()

        serializer = serializers.ProfessorGradeSerializer(subject_cycle)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    
class ProfessorSubjectEditGradeStudent(APIView):
    serializer_class = serializers.ProfessorGradeReviewSerializer
    permission_classes = (permissions.IsProfessor,)

    def put(self, request, id):
        subject_cycle = models.SubjectCycle.objects.get(id=id)

        final_grade = request.data.get('final_grade')

        if final_grade is not None:
            subject_cycle.final_grade = final_grade

        subject_cycle.save()

        serializer = serializers.ProfessorGradeSerializer(subject_cycle)
        return Response(serializer.data, status=status.HTTP_200_OK)

