from django.db import models
from django.contrib.auth import get_user_model
from image_cropping import ImageRatioField, ImageCropField
from datetime import datetime


class Photos(models.Model):
    
    TAGS = (
        
        ('events','events'),
        ('polo','polo'),
        ('horses','horses'),
        ('racing','racing'),
        ('1212','1212'),
        ('people','people'),
        ('players','players'),
        ('games','games'),
        
    )
    class Meta:
        #app_label = 'Multimedia'
        verbose_name = 'Multimedia Photo'
        verbose_name_plural ='Multimedia Photos'
    photo = models.ImageField(blank=True, null=True, upload_to='multimedia_photos')  
    #photo = ImageCropField(blank=True, null=True, upload_to='multimedia_photos')
    # size is "width x height"
    photo_thumb = ImageRatioField('photo', '800x533')
    tag =  models.CharField(default = '1212', choices=TAGS,max_length=30)
    created = models.DateTimeField(auto_now=False, auto_now_add=True,default=datetime.now())
    modified = models.DateTimeField(auto_now=True, auto_now_add=False, default=datetime.now())
    user = models.ForeignKey(get_user_model())
    caption = models.CharField(blank= True, null=True,max_length=255)
    brief = models.TextField(blank=True, null=True)
