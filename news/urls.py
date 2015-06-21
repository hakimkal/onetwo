from django.conf.urls import patterns, url

from news.views import  NewsDetailView, NewListView

urlpatterns = patterns('',
    url(r'(?P<slug>[\w-]+|)/$', NewsDetailView.as_view(),name= "story"),
    
    url(r'^$',NewListView.as_view(),name='news')               ,                 
   
                   
   # url(r'^about/$',views.about, name="about"),
    
)