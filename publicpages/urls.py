from django.conf.urls import patterns, url

from publicpages import views


urlpatterns = patterns('',
   
    url(r'^about/$',views.about, name="about"),
    url(r'^$', views.current_datetime, name="home"),
    url(r'^about/$',views.about, name="about"),
    url(r'^(?P<slug>\w+|)',views.StaticPage.as_view(), name = "page")
)