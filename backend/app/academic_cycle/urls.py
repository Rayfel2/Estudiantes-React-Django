from django.urls import path
from academic_cycle import views

app_name = "cycle"

urlpatterns = (
    # path("", views.CycleListView.as_view(), name="list"),
    # path("<int:id>/", views.CycleDetailView.as_view(), name="detail"),
    path(
        "<int:id>/subjects/",
        views.CycleSubjectsView.as_view(),
        name="subjects",
    ),
)
