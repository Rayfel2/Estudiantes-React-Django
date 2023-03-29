"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from drf_spectacular import views as drf_spectacular_views

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/v1/schema/",
        drf_spectacular_views.SpectacularAPIView.as_view(),
        name="schema",
    ),
    path(
        "api/v1/schema/swagger-ui/",
        drf_spectacular_views.SpectacularSwaggerView.as_view(
            url_name="schema"
        ),
        name="swagger-ui",
    ),
    path("api/v1/students/", include("student.urls")),
    path("api/v1/academic-cycles/", include("academic_cycle.urls")),
    path("api/v1/subject-cycles/", include("subject_cycle.urls")),
]
