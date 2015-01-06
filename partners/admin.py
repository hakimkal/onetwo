from django.contrib import admin

from partners.models import PartnerAndSponsor

class PartnerAndSponsorAdmin(admin.ModelAdmin):
    
    exclude = ('thumb_small','thumb_big')
    
admin.site.register(PartnerAndSponsor,PartnerAndSponsorAdmin)
