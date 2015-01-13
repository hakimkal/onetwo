from django.conf.urls import patterns,  url
from mdias.views import PhotosList

urlpatterns = patterns('',
             url(r'photos/(?P<recent>\w+|)', PhotosList.as_view(), name = "photos")
             , 
              
              
              )