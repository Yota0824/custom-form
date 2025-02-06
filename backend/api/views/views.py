from rest_framework.response import Response
from rest_framework.views import APIView
from ..models import TestPost
# Create your views here.
class TestAPIView(APIView):
    def get(self,request):
        # print("request" + request.query_params)
        abc = request.query_params.get("abc")
        print("中身" + abc)

        target_id = 1
        post = TestPost.objects.get(id=target_id)
        print("戻り値" + post.message)
        return Response(post.message)
    
    def post(self,request):
        print(request.data)
        message =request.data.get("message")
        print(message)

        TestPost.objects.create(message=message)

        return Response("OK")   