from django.db import models
from image_cropping import ImageRatioField
from django.contrib.auth import get_user_model
from datetime import datetime
# Create your models here.
class Event(models.Model):
    user = models.ForeignKey(get_user_model())
    title = models.CharField(max_length=400)
    image = models.ImageField(upload_to="events_images")
    event_thumb_small = ImageRatioField('image','800x533')
    event_thumb = ImageRatioField('image', '1600x1066')
    brief = models.TextField(null=True, blank=True)
    start_date =  models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=255,null=True)
    addresss = models.TextField(null=True,blank=True)
    details = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False,default=datetime.now)
    modified = models.DateTimeField(auto_now_add=False, auto_now=True,default=datetime.now)
    featured = models.BooleanField(choices=((True,'Yes'),(False,'No')), default=False)
    #code
