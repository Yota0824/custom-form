from django.db import models

class School(models.Model): #ポスティング
    school_id = models.CharField(max_length=4,primary_key=True,unique=True)
    visible_name = models.CharField(max_length=100)

