from rest_framework.views import APIView
from api.models.School import School
from rest_framework.response import Response

class SchoolNameDtailView(APIView):
    # 校舎コードから校舎名を取得する
    def get(self,request,id):
        try:
            school = School.objects.get(school_id=id)
        except School.DoesNotExist:
            return Response({"error":"School not found"},status=404)
        return Response({
            "school_name":school.visible_name
        })