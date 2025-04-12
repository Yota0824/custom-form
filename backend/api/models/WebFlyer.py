from django.db import models

class WebFlyer(models.Model):
    school_id = models.CharField(max_length=4)
    school_name = models.CharField(max_length=20)
    apply_name = models.CharField(max_length=20)
    apply_year = models.IntegerField() #年月が入るがこれでいい？
    apply_month = models.IntegerField() #年月が入るがこれでいい？
    excel_file_path = models.CharField(max_length=100)