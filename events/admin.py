from django.contrib import admin
from image_cropping import ImageCroppingMixin
from events.models import Event


class EventAdmin(ImageCroppingMixin,admin.ModelAdmin):
    #fields=['start_date','title']
    list_display = ['start_date','title']
    exclude = ('user','event_thumb')
    
    
    def save_model(self, request, obj, form, change):
        if not change:
            obj.user = request.user
        obj.save()
    
admin.site.register(Event,EventAdmin)