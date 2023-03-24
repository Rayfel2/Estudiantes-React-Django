from django.urls import path
from user import views

app_name = "user"

urlpatterns = (
    path("", views.UserListView.as_view(), name="list"),
    path("<int:id>/", views.UserDetailView.as_view(), name="detail"),
)
