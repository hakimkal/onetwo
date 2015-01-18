from django.conf.urls import patterns, url

from publicpages.views import about, current_datetime, StaticPage, ContactUs 


urlpatterns = patterns('',
   
    url(r'^about/$',about, name="about"),
    url(r'^$', current_datetime, name="home"),
    #url(r'^about/$',views.about, name="about"),
    url(r'^(?P<slug>\w+|)/$',StaticPage.as_view(), name = "page"),
    url(r'^contact',ContactUs.as_view(), name= "contact")
                        
)