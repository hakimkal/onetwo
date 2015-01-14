from django.contrib import admin
from image_cropping import ImageCroppingMixin
from mdias.models import Photos
 



class MultimediaPhotoAdmin(ImageCroppingMixin,admin.ModelAdmin):
    save_on_top = True
    list_display= ('id','caption','brief','photo','created', 'modified', 'tag')
    exclude = ('user',)
    
    
    def save_model(self, request, obj, form, change):
        if not change:
            obj.user = request.user
        obj.save()
    
        
admin.site.register(Photos, MultimediaPhotoAdmin)
