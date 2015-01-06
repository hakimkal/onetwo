# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Slider'
        db.create_table(u'sliders_slider', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('banner', self.gf('django.db.models.fields.files.ImageField')(max_length=100)),
            ('thumb', self.gf(u'django.db.models.fields.CharField')(max_length=255, blank=True)),
            ('thumb_small', self.gf(u'django.db.models.fields.CharField')(max_length=255, blank=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=255, null=True, blank=True)),
            ('url', self.gf('django.db.models.fields.URLField')(max_length=200, null=True, blank=True)),
            ('description', self.gf('django.db.models.fields.TextField')(null=True, blank=True)),
            ('category', self.gf('django.db.models.fields.CharField')(default='Home', max_length=50)),
            ('created', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime(2015, 1, 6, 0, 0), auto_now_add=True, blank=True)),
            ('modified', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime(2015, 1, 6, 0, 0), auto_now=True, blank=True)),
        ))
        db.send_create_signal(u'sliders', ['Slider'])


    def backwards(self, orm):
        # Deleting model 'Slider'
        db.delete_table(u'sliders_slider')


    models = {
        u'sliders.slider': {
            'Meta': {'object_name': 'Slider'},
            'banner': ('django.db.models.fields.files.ImageField', [], {'max_length': '100'}),
            'category': ('django.db.models.fields.CharField', [], {'default': "'Home'", 'max_length': '50'}),
            'created': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2015, 1, 6, 0, 0)', 'auto_now_add': 'True', 'blank': 'True'}),
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2015, 1, 6, 0, 0)', 'auto_now': 'True', 'blank': 'True'}),
            'thumb': (u'django.db.models.fields.CharField', [], {'max_length': '255', 'blank': 'True'}),
            'thumb_small': (u'django.db.models.fields.CharField', [], {'max_length': '255', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'url': ('django.db.models.fields.URLField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['sliders']