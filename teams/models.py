from django.db import models

from image_cropping import ImageRatioField
from django.contrib.auth import get_user_model
from datetime import datetime

from django.core.urlresolvers import reverse

class Team(models.Model):
    TEAM_CATEGORIES =(('Management','Management'),('Staff','Staff'), ('Players','Players'),)
    
    user = models.ForeignKey(get_user_model())
    name = models.CharField(max_length=400)
    photo = models.ImageField(upload_to="teams_images")
    photo_thumb = ImageRatioField('photo', '500x700')
    profile = models.TextField(null=True, blank=True)
    designation = models.CharField(max_length=100, blank=True, null=True )
    
    group  = models.CharField(max_length=30,choices = TEAM_CATEGORIES)
    created = models.DateTimeField(auto_now_add=True, auto_now=False,default=datetime.now)
    modified = models.DateTimeField(auto_now_add=False, auto_now=True,default=datetime.now)
    
    def get_absolute_url(self):
         
        return reverse('team-detail',kwargs={'pk':self.id})
    def __unicode__(self):
        return self.name
