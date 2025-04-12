from django.db import models

class School(models.Model): #校舎リスト
    school_id = models.CharField(max_length=4,primary_key=True,unique=True)
    visible_name = models.CharField(max_length=100)

