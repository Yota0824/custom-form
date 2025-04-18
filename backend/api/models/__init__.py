from django.db import models
from django.contrib.auth.models import AbstractUser
from .WebFlyer import WebFlyer
from .WebFlyerComment import WebFlyerComment
from .WebFlyerFlyer import WebFlyerFlyer
from .WebFlyerNewsPaper import WebFlyerNewsPaper
from .WebFlyerPosting import WebFlyerPosting
from .WebFlyerOtherMedia import WebFlyerOtherMedia
from .WebFlyerWebMadia import WebFlyerWebMadia


class Account(AbstractUser):
    username = models.CharField(max_length=50, unique=True)

class TestPost(models.Model):
    message = models.CharField(max_length=100)


class SumResult(models.Model):
    result = models.IntegerField()
