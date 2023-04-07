from django.urls import path

from professor import views

app_name = "professor"

urlpatterns = (
    path("login/", views.ProfessorLoginView.as_view(), name="login"),
    path("profile/", views.ProfessorProfileView.as_view(), name="profile"),
    path("subjects/<int:id>/students/", views.ProfessorSubjectViewStudent.as_view(), name="subjects"),
    path("subjects/<int:id>/grade/", views.ProfessorSubjectGradeStudent.as_view(), name="subjects"),
    path("subjects/<int:id>/grade/review", views.ProfessorSubjectEditGradeStudent.as_view(), name="subjects")
)
