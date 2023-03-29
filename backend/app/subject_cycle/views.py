from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from core import models, serializers, permissions


class CycleSubjectListView(APIView):
    permission_classes = (permissions.IsStudent,)

    def delete(self, request, id, format=None):
        try:
            user = request.user
            cycle = models.SubjectCycle.objects.get(
                id=id, cycle__student__user=user
            )
            cycle.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except models.SubjectCycle.DoesNotExist:
            response = {"error": "Subject cycle does not exist"}
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


class CycleSubjectDetailView(APIView):
    serializer_class = serializers.CycleSubjectsSerializer
    permission_classes = (permissions.IsStudent,)

    def delete(self, request, id, format=None):
        try:
            user = request.user
            cycle = models.SubjectCycle.objects.get(
                id=id, cycle__student__user=user
            )
            data = {"final_grade_letter": "R"}
            serializer = self.serializer_class(cycle, data=data, partial=True)
            if not serializer.is_valid():
                response = serializer.errors
                return Response(
                    response,
                    status=status.HTTP_400_BAD_REQUEST,
                )

            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except models.SubjectCycle.DoesNotExist:
            response = {"error": "Subject cycle does not exist"}
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
