from django.contrib import admin
from publicpages.models import PublicPage

class PublicPageAdmin(admin.ModelAdmin):
    exlude =('user',)
    actions_on_top = True
    list_display= ('title','content','created',
                   'modified', 'slug','publish','html_template','sub_heading')
    exclude = ('user',)
    verbose_singular_name = 'Pages'
    verbost_plural_name  = 'Pages'
    save_on_top =  True
    
    def save_model(self, request, obj, form, change):
        obj.slug = obj.slug.lower()
        if not change:
            
            obj.user = request.user
        obj.save()
   
    
admin.site.register(PublicPage,PublicPageAdmin)
