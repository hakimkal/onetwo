from django.conf.urls import patterns,  url
from events.views import EventListView, EventDetailView

urlpatterns = patterns('',
            url(r'(?P<slug>[\w-]+|)/$', EventDetailView.as_view(),name= "event"),
    
  
              url(r'^$', EventListView.as_view(), name = "events")
              
              
              
              )