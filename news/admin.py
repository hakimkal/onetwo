from django.contrib import admin
from image_cropping import ImageCroppingMixin
from news.models import News
from django.db import models
from django.utils.text import slugify
from django.contrib.admin.options import TabularInline
from django.contrib.admin.widgets import FilteredSelectMultiple
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse

class NewsAdmin(ImageCroppingMixin,admin.ModelAdmin):
    save_on_top = True
    prepopulated_fields = {"slug": ("caption",)}
   
    list_display= ('caption','story','image','created', 'modified','slug', 'tags')
    exclude = ('user',)
    
    
    def save_model(self, request, obj, form, change):
        if not change:
            obj.user = request.user
        obj.save()
    
        
admin.site.register(News, NewsAdmin)
