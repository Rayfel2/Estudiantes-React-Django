from django.urls import path
from subject_cycle import views

app_name = "subject_cycle"

urlpatterns = (
    path(
        "<int:id>/", views.CycleSubjectsView.as_view(), name="subjects"
    ),
)
