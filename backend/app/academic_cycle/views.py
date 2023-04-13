from django.db import IntegrityError

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from core import models, serializers, permissions


class CycleSubjectsView(APIView):
    serializer_class = serializers.CycleSubjectsSerializer
    permission_classes = (permissions.IsStudent,)

    def post(self, request, id, format=None):
        try:
            data = request.data
            user = request.user
            cycle = models.AcademicCycle.objects.get(id=id, student__user=user)
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
        except IntegrityError:
            response = {"error": "Subject already selected in this cycle"}
            return Response(
                response,
                status=status.HTTP_409_CONFLICT,
            )
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


