from rest_framework.response import Response
from rest_framework.views import APIView
from ..models import SumResult
# Create your views here.
class SumPost(APIView):
    def post(self,request):
        print(request.data)
        result =request.data.get("result")
        print(result)

        SumResult.objects.create(result=result)

        return Response("OK")
    
    def get(self,request):
        id = request.query_params.get("id")
        answer = SumResult.objects.get(id=id)
        return Response(answer.result)