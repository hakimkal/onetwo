from django.contrib.sitemaps import Sitemap
import datetime
from django.core.urlresolvers import reverse
 
class PoloSitemap(Sitemap):
    
    
    def __init__(self,names):
        self.names = names
    
    def items(self):
        return self.names

    def changefreq(self, obj):
        return 'weekly'

    def lastmod(self, obj):
        return datetime.datetime.now()

    def location(self, obj):
        return reverse(obj)
   

from news.models import News

class NewsSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5 
    
    def items(self):
        return News.objects.filter(publish=True)

    def lastmod(self, obj):
        return obj.modified
    
    def location(self, obj):
        return reverse('news:story',kwargs={'slug':obj.slug})

from publicpages.models import PublicPage

class PublicPageSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5 
    
    def items(self):
        return PublicPage.objects.filter(publish=True)

    def lastmod(self, obj):
        return obj.modified
    
    def location(self, obj):
        return reverse('page',kwargs={'slug':obj.slug})
    
    
    