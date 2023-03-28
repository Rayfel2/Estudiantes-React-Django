from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from core import models, serializers, permissions


# class CycleListView(APIView):
#     serializer_class = serializers.CycleSerializer
#     permission_classes = (permissions.IsStudent,)

#     def post(self, request, format=None):
#         pass


class StudentProfileSubjectsView(APIView):
    serializer_class = serializers.StudentProfileSubjectsSerializer
    permission_classes = (permissions.IsStudent,)

    def post(self, request, format=None):
        try:
            data = request.data
            serializer = self.serializer_class(data=data)
            if not serializer.is_valid():
                response = serializer.errors
                return Response(
                    response,
                    status=status.HTTP_400_BAD_REQUEST,
                )

            serializer.save()
            response = serializer.data
            return Response(response, status=status.HTTP_201_CREATED)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class CycleSubjectsView(APIView):
    serializer_class = serializers.CycleSubjectsSerializer
    permission_classes = (permissions.IsStudent,)

    def post(self, request, id, format=None):
        try:
            data = request.data
            cycle = models.AcademicCycle.objects.get(id=id)
            serializer = self.serializer_class(data=data)
            if not serializer.is_valid():
                response = serializer.errors
                return Response(
                    response,
                    status=status.HTTP_400_BAD_REQUEST,
                )

            serializer.save(cycle=cycle)
            response = serializer.data
            return Response(response, status=status.HTTP_201_CREATED)
        except models.AcademicCycle.DoesNotExist:
            response = {"error": "Cycle does not exist"}
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
