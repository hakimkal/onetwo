from django.shortcuts import *
from django.template  import RequestContext
from django.core.paginator import Paginator,EmptyPage,PageNotAnInteger
from events.models import Event
from news.models import News
from django.views.generic import ListView, DetailView
from nlsubscribers.forms import NlsubscriberForm
import datetime



class NewListView(ListView):
    model = News
    context_object_name  = 'news'
    paginate_by = 5
    
    template_name = 'news/index.html'

def index(request):
    
    now = datetime.datetime.now()
    theyear = datetime.datetime.today().year
    thenews = News.objects.order_by('-created')[:4]
    #events = Event.objects.order_by('-start_date')[:3]
    cssClass = 'page-sub-page page-blog-listing page-microsite'
    
    news_list = News.objects.all().order_by("-created")
    paginator = Paginator(news_list,6)
    
    nlsubscriber_form = NlsubscriberForm()
    myDict = {'current_date':now
              ,
              'theyear': theyear,
              'thenews': thenews,
              
              'cssClass':cssClass,
              'nlform': nlsubscriber_form
              }
    
    page = request.GET.get('page')
    try:
        news = paginator.page(page)
    except PageNotAnInteger:
        news = paginator.page(1)
    except EmptyPage:
        news = paginator.page(paginator.num_pages)
    myDict['news']= news
    return render(request, "news/index.html", myDict)



class NewsDetailView(DetailView):
    
    model = News
    slug_url_field = 'slug'
    context_object_name = 'thenews'
    slug_url_kwarg = 'slug'
    template_name = 'news/single-news.html'
    
    def get_context_data(self, **kwargs):
        ctx = super(NewsDetailView,self).get_context_data(**kwargs)
        nlsubscriber_form = NlsubscriberForm()
        now = datetime.datetime.now()
        theyear = datetime.datetime.today().year
        news = News.objects.order_by("-created").all()[:4]
    
        
        
        nlsubscriber_form = NlsubscriberForm()
        ctx['current_date'] = now
        
        ctx['theyear']= theyear,
              
        ctx['news'] = news
        
        ctx['nlform'] = nlsubscriber_form   
        
        return ctx
        
        
    
def detail(request, slug):
    
    cssClass = "page-sub-page page-blog-detail page-microsite"    
    now = datetime.datetime.now()
    theyear = datetime.datetime.today().year
    news = News.objects.order_by("-created").all()[:4]
    
    thenews = News.objects.get(slug=slug)
    #print thenews.user.first_name
    nlsubscriber_form = NlsubscriberForm()
    myDict = {'current_date':now
              ,
              'theyear': theyear,
              
              'news': news,
              'cssClass':cssClass,
              'nlform': nlsubscriber_form
              }
    
    
    myDict['thenews']= thenews    
    return render(request, "news/single-news.html", myDict)