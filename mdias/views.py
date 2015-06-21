from django.shortcuts import render
from django.views.generic import DetailView , ListView
from mdias.models import Photos
from datetime import datetime, timedelta,  date
 
class PhotosList(ListView):
    model = Photos
    template_name = 'mdias/photos.html'
    paginate_by = 20
    
    def get_context_data(self,  **kwargs):
        #print Photos.TAGS
        tag_list = []
        
        ctx = super(PhotosList,self).get_context_data(**kwargs)
        
        
        for j,v in Photos.TAGS:
            tag_list.append(j)
        tag_list = tag_list
        print(tag_list)
        ctx['tags'] =  set(tag_list)
        return ctx
    
    
    """
    def get_queryset(self):
        today = datetime.now() 
        startdate = today + timedelta(days=-14) 
       
        queryset = super(PhotosList, self).get_queryset()
        if self.kwargs.get('recent') != "" :
            return queryset.filter(created__range=[startdate, today]).order_by('-created')
        
         
        return queryset
    """