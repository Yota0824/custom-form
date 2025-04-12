from django.db import models


class WebFlyerComment(models.Model): #備考
    school_id = models.CharField(max_length=4)
    school_name = models.CharField(max_length=20)
    apply_year = models.IntegerField() #年月が入るがこれでいい？
    apply_month = models.IntegerField() #年月が入るがこれでいい？
    comment = models.CharField(max_length=1000)