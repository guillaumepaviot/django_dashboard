from django.urls import path
from app import views

urlpatterns = [
    # The home page
    path('', views.index, name='home'),
]