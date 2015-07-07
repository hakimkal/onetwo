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
from django.views.generic import DetailView, ListView, FormView
from publicpages.forms import ContactForm
from django.contrib import messages
from braces.views import LoginRequiredMixin, MessageMixin
import datetime

def current_datetime(request):
	now = datetime.datetime.now()
	partners = PartnerAndSponsor.objects.all()
	sliders =  Slider.objects.filter(category= 'Home').order_by('position')
	featured_events = Event.objects.filter(featured=True).order_by('start_date')
	players_and_staff = Team.objects.filter(Q(group= 'Staff') | Q(group='Players'))
	news = News.objects.all().order_by('-created')[0:6]
	dct = {'current_date': now,'partners':partners,'news': news,'s_and_p': players_and_staff,'sliders': sliders,'events': featured_events}
    
	return render(request, 'publicpages/home.html',dct)

def about(request):
	now = datetime.datetime.now()
	partners = PartnerAndSponsor.objects.all()
	management = Team.objects.filter(group='Management')
	#print partners
	ctx = {'current_date':now,'partners': partners,'mgt': management}
	print ctx
	return render(request,'publicpages/about.html',ctx)



class StaticPage(DetailView,MessageMixin):
	model = PublicPage
	slug_url_field = 'slug'
	slug_url_kwarg = 'slug'
	template_name_field = 'html_template'
	
	def get_context_data(self,**kwargs):
		ctx = super(StaticPage,self).get_context_data(**kwargs)
		ctx['management'] = Team.objects.filter(group='Management')
		
		return ctx
	
	def get_queryset(self):
		queryset = super(StaticPage, self).get_queryset()
		if self.kwargs.get('slug') != "" :
			
			return queryset.filter(slug=self.kwargs.get('slug'))
			#.order_by('-created')
		
		 
		
		#return reverse('pages:page',kwargs={'slug':self.slug})
	#def get_context_data(self,**kwargs):
		#ctx = super(StaticPage,self).get_context_data(**kwargs)


class ContactUs(MessageMixin, FormView):
	template_name = 'publicpages/contact.html'
	form_class = ContactForm
	success_url = '/'
	def form_valid(self, form):
		
		#form.cleaned
		# This method is called when valid form data has been POSTed.
		# It should return an HttpResponse.
		if form.send_email() == True :
			self.messages.success ='Thanks for your email, we will be in touch'
				
		return super(ContactUs, self).form_valid(form)
	

		
"""

To do
"""
def get_the_nearest_event():
	pass

def get_three_upcoming_events():
	pass