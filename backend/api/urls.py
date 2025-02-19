from django.urls import path
from .views.views import TestAPIView
from .views.sum import SumPost

urlpatterns =[
    path("test/",TestAPIView.as_view()),
    path("sum/",SumPost.as_view()),
    path("post-webflyer-form/",WebFlyerForm.as_view()),
]