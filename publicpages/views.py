from django.shortcuts import render,redirect

from sliders.models import Slider

from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
import datetime

def current_datetime(request):
    now = datetime.datetime.now()
    t = get_template('publicpages/home.html')
    sliders =  Slider.objects.filter(category= 'Home').order_by('position')
    html = t.render(Context({'current_date': now,'sliders': sliders}))
    return HttpResponse(html)

def about(request):
    now = datetime.datetime.now()
    return render(request,'publicpages/about.html',{'current_date':now})