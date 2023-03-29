from django.urls import path
from subject_cycle import views

app_name = "subject_cycle"

urlpatterns = (
    path("<int:id>/", views.CycleSubjectListView.as_view(), name="list"),
    path(
        "<int:id>/retire/",
        views.CycleSubjectDetailView.as_view(),
        name="detail",
    ),
)
