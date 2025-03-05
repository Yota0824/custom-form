from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers
from rest_framework.serializers import Serializer
from openpyxl import load_workbook

class UploadExcelSerializer(Serializer):
    file = serializers.FileField()
    #TODO school_idとか他の値を入れていく

class UploadExcelView(APIView):
    def post(self,request):
        data = request.data
        print(  )
        serializer = UploadExcelSerializer(data=data)
        
        if serializer.is_valid():
            file = serializer.validated_data["file"]
            wb = load_workbook(file)
            sheet = wb.active
            print(sheet)

            #TODO シート操作
            return Response({"message":"uploaded"},status=status.HTTP_200_OK)
        else:
            return Response(status=400)
