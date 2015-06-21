from django.conf.urls import patterns, url

from news.views import index, detail, NewsDetailView

urlpatterns = patterns('',
    url(r'(?P<slug>[\w-]+|)/$', NewsDetailView.as_view(),name= "story")
                       ,                 
   
                   
   # url(r'^about/$',views.about, name="about"),
    
)