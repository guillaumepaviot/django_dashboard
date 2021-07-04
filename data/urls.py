from django.urls import path
from data import views

urlpatterns = [
    path('data', views.get_data)
]