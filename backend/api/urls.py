from django.urls import path
from .views.views import TestAPIView
from .views.sum import SumPost
from .views.UploadExcelView import UploadExcelView

urlpatterns =[
    path("test/",TestAPIView.as_view()),
    path("sum/",SumPost.as_view()),
    path("upload-excel/",UploadExcelView.as_view()),
]