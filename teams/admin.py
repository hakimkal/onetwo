from django.contrib import admin
from image_cropping import ImageCroppingMixin
from teams.models import Team

class TeamAdmin(ImageCroppingMixin,admin.ModelAdmin):
    
    exclude = ('user','photo_thumb',)
    
    def save_model(self, request ,obj, form ,change):
        commit = False
        if not change:
            obj.user = request.user
        obj.save()
admin.site.register(Team,TeamAdmin)