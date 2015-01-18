from django.shortcuts import render,redirect
from django.db.models import Q
from sliders.models import Slider
from events.models import Event
from teams.models import Team
from news.models import News

from publicpages.models import PublicPage
from partners.models import PartnerAndSponsor
from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
from django.views.generic import DetailView, ListView
import datetime

def current_datetime(request):
    now = datetime.datetime.now()
    t = get_template('publicpages/home.html')
    sliders =  Slider.objects.filter(category= 'Home').order_by('position')
    featured_events = Event.objects.filter(featured=True).order_by('start_date')
    players_and_staff = Team.objects.filter(Q(group= 'Staff') | Q(group='Players'))
    news = News.objects.all().order_by('created')[0:6]
    html = t.render(Context({'current_date': now,'news': news,'s_and_p': players_and_staff,'sliders': sliders,'events': featured_events}))
    return HttpResponse(html)

def about(request):
    now = datetime.datetime.now()
    partners = PartnerAndSponsor.objects.all()
    management = Team.objects.filter(group='Management')
    #print partners
    ctx = {'current_date':now,'partners': partners,'mgt': management}
    print ctx
    return render(request,'publicpages/about.html',ctx)



class StaticPage(DetailView):
    model = PublicPage
    slug_url_field = 'slug'
    slug_url_kwarg = 'slug'
    template_name_field = 'html_template'
    
    def get_queryset(self):
        queryset = super(StaticPage, self).get_queryset()
        if self.kwargs.get('slug') != "" :
            
            return queryset.filter(slug=self.kwargs.get('slug'))
            #.order_by('-created')
        
         
        
        #return reverse('pages:page',kwargs={'slug':self.slug})
    #def get_context_data(self,**kwargs):
        #ctx = super(StaticPage,self).get_context_data(**kwargs)
        
"""

To do
"""
def get_the_nearest_event():
    pass

def get_three_upcoming_events():
    pass