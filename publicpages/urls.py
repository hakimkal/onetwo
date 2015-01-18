from django.conf.urls import patterns, url

from publicpages.views import about, current_datetime, StaticPage 


urlpatterns = patterns('',
   
    
    url(r'', current_datetime, name="home"),
    url(r'^about/$',about, name="about"),
    url(r'^(?P<slug>\w+|)/$',StaticPage.as_view(), name = "page"),
                       
)