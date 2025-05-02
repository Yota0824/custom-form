from rest_framework.views import APIView
from api.mock import MOCK_SCHOOL_LIST
from rest_framework.response import Response
from api.models.School import School

class UpdateSchoolView(APIView):
    # 月次で校舎をtakeda.tvより取得しDBを更新する
    def put(self,request):
        data = MOCK_SCHOOL_LIST # fecth　APIとってくる場所

        for row in data:
            print(row)
            school_id = row.get("school_id")
            visible_name = row.get("visible_name")

            # やること　年月の分離とエクセルの中身をDBに突っ込む

            if school_id and visible_name:
                School.objects.update_or_create(
                    school_id = school_id,
                    defaults = {"visible_name":visible_name},
                )

        return Response(201)