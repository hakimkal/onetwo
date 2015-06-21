from django.contrib import admin
from image_cropping import ImageCroppingMixin
from events.models import Event
from django.utils.text import slugify
import itertools

class EventAdmin(ImageCroppingMixin,admin.ModelAdmin):
	#fields=['start_date','title']
	list_display = ['start_date','title']
	exclude = ('user','event_thumb','slug')
	
	
	def save_model(self, request, obj,form , change):
	     #obj.slug =  slugify(obj.title)
	
		max_length = Event._meta.get_field('slug').max_length
		obj.slug = orig = slugify(obj.title)[:max_length]

		for x in itertools.count(1):
			if not Event.objects.filter(slug=obj.slug).exists():
				break

			# Truncate the original slug dynamically. Minus 1 for the hyphen.
			obj.slug = "%s-%d" % (orig[:max_length - len(str(x)) - 1], x)
		if not change:
			
			obj.user = request.user
		obj.save()
	
admin.site.register(Event,EventAdmin)