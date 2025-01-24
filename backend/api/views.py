from rest_framework.response import Response
from rest_framework.views import APIView
from .models import TestPost
# Create your views here.
class TestAPIView(APIView):
    def get(self,request):
        print(request.query_params)
        abc = request.query_params.get("abc")
        print(abc)

        target_id = 1
        post = TestPost.objects.get(id=target_id)
        print(post)

        return Response("OK")
    
    def post(self,request):
        print(request.data)
        message =request.data.get("message")
        print(message)

        TestPost.objects.create(message=message)

        return Response("OK")