from django.contrib import admin
from nlsubscribers.models import Nlsubscriber
# Register your models here.

class NlsubscriberAdmin(admin.ModelAdmin):
    
    list_display=  ('firstname','lastname','email',)
    
        
admin.site.register(Nlsubscriber, NlsubscriberAdmin)
