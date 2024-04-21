from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("ernesto", views.ernesto, name="ernesto"),
    path("<str:name>", views.greet, name="greet")
]