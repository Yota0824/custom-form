from django.db import models
from django.contrib.auth.models import AbstractUser


class Account(AbstractUser):
    username = models.CharField(max_length=50, unique=True)

class TestPost(models.Model):
    message = models.CharField(max_length=100)


class SumResult(models.Model):
    result = models.IntegerField()
    