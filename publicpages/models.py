import os
from polo.settings import PROJECT_PATH, BASE_DIR
from django.db import models
from django.contrib.auth import get_user_model
from django.core.urlresolvers import reverse
from datetime import datetime

def get_html_templates():
        templates_path = os.path.join(PROJECT_PATH,'templates/publicpages/pages/')
        all_files = []
        
        try:
            if not os.path.isdir(templates_path):
                os.mkdir(templates_path)
            
            
            alldirs = os.listdir(templates_path)
           
            
            for f in alldirs:
                
                #print f
                #os.path.isfile(f) did not work
                if not os.path.isdir(f):
                    #print f
                    f_n = f.split('.')[0]
                    all_files.append((os.path.join(templates_path,f),f_n.upper()))
                    
            if len(all_files) == 0:
                all_files.append(('NO_TEMPLATE.HTML','NO_TEMPLATE'))
        except OSError as e:
            all_files.append(('NO_TEMPLATE_DIRECTORY_FOUND','NO_TEMPLATE_DIR'))
            
        return tuple(all_files)
    
file_list = get_html_templates()

class PublicPage(models.Model):
    class Meta:
        verbose_name = 'Page'
        verbose_name_plural ='Page'
    BOOL_OPTS = (
        (True, 'Yes')
        ,
        (False, 'No'),
        
    )
    
    
    
    
    ALL_FILES = tuple(file_list)
    
    title = models.CharField(max_length=255,unique=True)
    sub_heading = models.CharField(max_length=255,null = True)
    content = models.TextField(blank=True,)
    publish = models.BooleanField(choices=BOOL_OPTS, default = False)
    created = models.DateTimeField(auto_now=False, auto_now_add=True,
                                   default = datetime.now())
    modified = models.DateTimeField(auto_now=True, auto_now_add=False,
                                   default = datetime.now())
    user  = models.ForeignKey(get_user_model())
    slug = models.SlugField(max_length=50, unique=True)
    html_template = models.CharField(max_length=100,choices=ALL_FILES)
    
    
    def get_absolute_url(self):
         
        return reverse('pages:page',kwargs={'slug': self.slug})