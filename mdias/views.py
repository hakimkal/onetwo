from django.shortcuts import render
from django.views.generic import DetailView , ListView
from mdias.models import Photos

class PhotosList(ListView):
    model = Photos
    template_name = 'mdias/photos.html'
