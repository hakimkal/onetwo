from django.conf.urls import patterns, include, url

from django.contrib import admin
import publicpages.views
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'polo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
   # url('',publicpages.views.current_datetime,name="home"),
   
    url(r'^$', publicpages.views.current_datetime, name="home"),
    url(r'^about/$',publicpages.views.about, name="about"),
    url(r'^events/' ,include('events.urls')),
    url(r'^teams/' ,include('teams.urls')),
    url(r'^sliders/' ,include('sliders.urls')),
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^manage/', include(admin.site.urls)),
)
#for serving media files
from polo import settings  
urlpatterns += patterns(
    'django.views.static',
    (r'media/(?P<path>.*)',
    'serve',
    {'document_root': settings.MEDIA_ROOT}), )