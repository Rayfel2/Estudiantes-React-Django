from django.urls import path

from student import views

app_name = "student"

urlpatterns = (
    # path("", views.StudentListView.as_view(), name="list"),
    # path("<int:id>/", views.StudentDetailView.as_view(), name="detail"),
    path("login/", views.StudentLoginView.as_view(), name="login"),
    path("profile/", views.StudentProfileView.as_view(), name="profile"),
    path(
        "profile/grades/",
        views.StudentProfileGradesView.as_view(),
        name="grades",
    ),
    path(
        "profile/academic-record/",
        views.StudentProfileAcademicRecordView.as_view(),
        name="academic-record",
    ),
    path('reset-password/', views.PasswordResetView.as_view(), name='password-reset')
)
