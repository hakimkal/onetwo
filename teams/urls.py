from django.conf.urls import patterns,  url
from teams.views import TeamDetailView

urlpatterns = patterns('',
              url(r'^detail/(?P<pk>\d+)/$', TeamDetailView.as_view(), name = "team-detail")
              ,
              
              
              )