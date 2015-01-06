from django.db import models
from django.contrib.auth import get_user_model
from image_cropping import ImageRatioField
from datetime import datetime
class PartnerAndSponsor(models.Model):
    GROUP = (
    
    ('Partner','Partner'),
    ('Sponsor','Sponsor'),
   )
    logo = models.ImageField(upload_to = 'logo_images/',default = 'logo_images/None/no-img.jpg')
    name = models.CharField(max_length=255)
    created = models.DateTimeField(default=datetime.now(),auto_now=False, auto_now_add=True)
    modified = models.DateTimeField(default=datetime.now(),auto_now=True, auto_now_add=False)
    url = models.URLField(blank= True)
    category = models.CharField(choices = GROUP, max_length=40)
    thumb_small = ImageRatioField('logo', '187x95')
    thumb_big = ImageRatioField('logo', '174x190')
    user = models.ForeignKey(get_user_model())
    
    
    def __unicode__(self):
        return self.name