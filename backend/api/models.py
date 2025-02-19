from django.db import models
from django.contrib.auth.models import AbstractUser


class Account(AbstractUser):
    username = models.CharField(max_length=50, unique=True)


class TestPost(models.Model):
    message = models.CharField(max_length=100)


class SumResult(models.Model):
    result = models.IntegerField()

class WebFlyer(models.Model):
    school_id = models.CharField(max_length=4)
    school_name = models.CharField(max_length=20)
    apply_name = models.CharField(max_length=20)
    apply_month = models.CharField(max_length=20) #年月が入るがこれでいい？
    excel_file_path = models.CharField(max_length=100)

class WebFlyerFlyer(models.Model): #ビラ配布
    school_id = models.CharField(max_length=4)
    school_name = models.CharField(max_length=20)
    total_out = models.IntegerField()  #総枚数
    total_inquiry = models.IntegerField() #問い合わせ総数
    total_consult = models.IntegerField() #受験相談数
    flyer_item1 = models.CharField(max_length=100) #ビラ名
    attached_item1 = models.CharField(max_length=100) #添付物
    place1 = models.CharField(max_length=100) #配布場所
    place_detail1 = models.CharField(max_length=100) #配布場所詳細
    flyer_count1 = models.IntegerField() #配布枚数
    memo1 = models.CharField(max_length=100) #特記事項
    flyer_item2 = models.CharField(max_length=100)
    attached_item2 = models.CharField(max_length=100)
    place2 = models.CharField(max_length=100)
    place_detail2 = models.CharField(max_length=100)
    flyer_count2 = models.IntegerField()
    memo2 = models.CharField(max_length=100)
    flyer_item3 = models.CharField(max_length=100)
    attached_item3 = models.CharField(max_length=100)
    place3 = models.CharField(max_length=100)
    place_detail3 = models.CharField(max_length=100)
    flyer_count3 = models.IntegerField()
    memo3 = models.CharField(max_length=100)

class WebFlyerPosting(models.Model): #ポスティング
    school_id = models.CharField(max_length=4)
    school_name = models.CharField(max_length=20)
    total_out = models.IntegerField()  #総枚数
    total_inquiry = models.IntegerField() #問い合わせ総数
    total_consult = models.IntegerField() #受験相談数