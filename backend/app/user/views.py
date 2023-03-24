from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from user import serializers


class UserListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        try:
            users = get_user_model().objects.all()
            serializer = serializers.UserSerializer(users, many=True)
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
            serializer = serializers.UserSerializer(data=data)
            if not serializer.is_valid():
                response = serializer.errors
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            response = serializer.data
            headers = {
                "Location": reverse("user:detail", args=[response["id"]])
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


class UserDetailView(APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get(self, request, id, format=None):
        try:
            user = get_user_model().objects.get(id=id)
            serializer = serializers.UserSerializer(user)
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except get_user_model().DoesNotExist:
            response = {"error": "User does not exist"}
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
            user = get_user_model().objects.get(id=id)
            data = request.data
            serializer = serializers.UserSerializer(
                user, data=data, partial=True
            )
            if not serializer.is_valid():
                response = serializer.errors
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            response = serializer.data
            return Response(response, status=status.HTTP_200_OK)
        except get_user_model().DoesNotExist:
            response = {"error": "User does not exist"}
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

    def delete(self, request, id, format=None):
        try:
            user = get_user_model().objects.get(id=id)
            user.delete()
            response = {"message": "User deleted"}
            return Response(response, status=status.HTTP_204_NO_CONTENT)
        except get_user_model().DoesNotExist:
            response = {"error": "User does not exist"}
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


class UserProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        try:
            user = request.user
            serializer = serializers.UserSerializer(user)
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
            serializer = serializers.UserSerializer(
                user, data=data, partial=True
            )
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

    def delete(self, request, format=None):
        try:
            user = request.user
            user.delete()
            response = {"message": "User deleted"}
            return Response(response, status=status.HTTP_204_NO_CONTENT)
        except Exception:
            response = {"error": "Something went wrong"}
            return Response(
                response,
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
