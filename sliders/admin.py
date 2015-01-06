from django.contrib import admin
from sliders.models import Slider
from image_cropping import ImageCroppingMixin

class SliderAdmin(admin.ModelAdmin):
    exclude = ('thumb', 'thumb_small')
    list_display = ('id','title','created', 'banner','modified','position')
    class Meta:
        model = Slider

admin.site.register(Slider, SliderAdmin)