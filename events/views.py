from django.shortcuts import render

from django.views.generic import ListView, DetailView
from events.models import Event

class EventListView(ListView):
    model = Event
    paginate_by = 9
    

class EventDetailView(DetailView):
    model = Event