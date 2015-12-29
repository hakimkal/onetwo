from django.db import models
from image_cropping import ImageRatioField
from datetime import datetime
from django.db.models import Max

from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill, ResizeToFit
from polo.settings import PROJECT_PATH, BASE_DIR
class Slider(models.Model):
    CAT_OPTS = (
        ('Home', 'Home Page'),
         ('About', 'About Page'),
          ('FAQ', 'FAQs Page'),
        
    )
    list_range = []
    
    
    
    for i in range(1, 55):
        l  =  (i,i)
        list_range.append(l)
    pos_range = tuple(list_range)
    """    
    banner = models.ImageField(upload_to='sliders')
    thumb = ImageRatioField('banner', '3840x2574')
    thumb_small = ImageRatioField('banner', '1920x1272')
    """
    banner = ProcessedImageField(upload_to='sliders',
                                           processors=[ResizeToFit(1384, 917)],
                                           format='JPEG',
                                           options={'quality': 60})
    thumb = ProcessedImageField(upload_to='sliders',null=True, blank=True,
                                           processors=[ResizeToFit(1384, 917)],
                                           format='PNG',
                                           options={'quality': 60})
    smallthumb = ProcessedImageField(upload_to='sliders',null=True, blank=True,
                                           processors=[ResizeToFit(200, 200)],
                                           format='PNG',
                                           options={'quality': 60})
    title = models.CharField(max_length=255, blank=True, null=True)
    url= models.URLField(blank=True, null=True)
    description = models.TextField(blank=True,null=True)
    category = models.CharField(max_length=50, default='Home',choices=CAT_OPTS)
    created = models.DateTimeField(auto_now=False, auto_now_add=True,default=datetime.now())
    modified = models.DateTimeField(auto_now=True, auto_now_add=False, default=datetime.now())
    position = models.IntegerField(choices=  pos_range , default=0)
    
    def __unicode__(self):
        if self.title is not None:
           string =  self.title
        else:
            string =  str(self.modified)
        return string