from django.shortcuts import render,redirect

# Create your views here.
from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
import datetime

def current_datetime(request):
    now = datetime.datetime.now()
    t = get_template('publicpages/home.html')
    html = t.render(Context({'current_date': now}))
    return HttpResponse(html)

def about(request):
    now = datetime.datetime.now()
    return render(request,'publicpages/about.html',{'current_date':now})