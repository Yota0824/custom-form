from django.db import models
from django.contrib.auth.models import AbstractUser

class WebFlyerPosting(models.Model): #ポスティング
    school_id = models.CharField(max_length=4)
    school_name = models.CharField(max_length=20)
    apply_year = models.IntegerField() #年月が入るがこれでいい？
    apply_month = models.IntegerField() #年月が入るがこれでいい？
    total_out = models.IntegerField()  #総枚数
    total_inquiry = models.IntegerField() #問い合わせ総数
    total_consult = models.IntegerField() #受験相談数