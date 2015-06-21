from django.conf.urls import patterns, include, url

from django.contrib import admin
import publicpages.views
import nlsubscribers.views 
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'polo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
   # url('',publicpages.views.current_datetime,name="home"),
    
    url(r'^$', publicpages.views.current_datetime, name="home"),
    url(r'^about/$',publicpages.views.about, name="about"),
    url(r'^events/' ,include('events.urls')),
    url('^news/', include('news.urls',namespace='news')),
   
    url(r'^pages/' ,include('publicpages.urls', namespace="pages")),
    url(r'^teams/' ,include('teams.urls')),
    url(r'^sliders/' ,include('sliders.urls')),
    url(r'^multimedia/', include('mdias.urls',namespace='multimedia')),
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^manage/', include(admin.site.urls)),
    url(r'^nladd',nlsubscribers.views.nladd, name = "nladd"),
    
)
#for serving media files
from polo import settings  
urlpatterns += patterns(
    'django.views.static',
    (r'media/(?P<path>.*)',
    'serve',
    {'document_root': settings.MEDIA_ROOT}), )


#for debug toolbar

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += patterns('',
        url(r'^__debug__/', include(debug_toolbar.urls)),
    )
          