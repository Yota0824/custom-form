from django.db import models


class WebFlyerWebMadia(models.Model): #その他配布配布
    school_id = models.CharField(max_length=4)
    school_name = models.CharField(max_length=20)
    apply_year = models.IntegerField() #年月が入るがこれでいい？
    apply_month = models.IntegerField() #年月が入るがこれでいい？
    hp_url = models.CharField(max_length=100)
    lp_url = models.CharField(max_length=100)
    total_cost = models.IntegerField()
    media1 = models.CharField(max_length=100)
    vendor1 = models.CharField(max_length=100)
    cost1 = models.IntegerField()
    media2 = models.CharField(max_length=100)
    vendor2 = models.CharField(max_length=100)
    cost2 = models.IntegerField()
    media3 = models.CharField(max_length=100)
    vendor3 = models.CharField(max_length=100)
    cost3 = models.IntegerField()
    media4 = models.CharField(max_length=100)
    vendor4 = models.CharField(max_length=100)
    cost4 = models.IntegerField()
    media5 = models.CharField(max_length=100)
    vendor5 = models.CharField(max_length=100)
    cost5 = models.IntegerField()
    comment = models.CharField(max_length=500)