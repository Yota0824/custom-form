from django.urls import path
from .views.views import TestAPIView
from .views.sum import SumPost
from .views.UploadExcelView import UploadExcelView
from .views.update_school_view import UpdateSchoolView
from .views.school_name_detail import SchoolNameDtailView

urlpatterns =[
    path("test/",TestAPIView.as_view()),
    path("sum/",SumPost.as_view()),
    path("upload-excel/",UploadExcelView.as_view()),
    path("update-school/",UpdateSchoolView.as_view()),
    path("school-name/<int:id>/",SchoolNameDtailView.as_view()),
]