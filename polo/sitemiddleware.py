from django.conf import settings
from django.core.urlresolvers import resolve
from  news.models import News
news = News.objects.all().order_by('-created')[0:3]

#service_menu = Service.objects.filter(publish=True)
"""
class getMenuItems(object):
    def process_request(self, request):
        
        
        request.DEBUG = settings.DEBUG 
        request.CURRENT_URL=request.path.split('/')[1] 
        request.SERVICE_MENU= service_menu
        
     



"""
class getNewsItems(object):
    def process_request(self, request):
        request.news = news
