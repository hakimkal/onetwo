# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Deleting field 'Slider.thumb_small'
        db.delete_column(u'sliders_slider', 'thumb_small')

        # Adding field 'Slider.smallthumb'
        db.add_column(u'sliders_slider', 'smallthumb',
                      self.gf('imagekit.models.fields.ProcessedImageField')(max_length=100, null=True, blank=True),
                      keep_default=False)


        # Changing field 'Slider.banner'
        db.alter_column(u'sliders_slider', 'banner', self.gf('imagekit.models.fields.ProcessedImageField')(max_length=100))

        # Changing field 'Slider.thumb'
        db.alter_column(u'sliders_slider', 'thumb', self.gf('imagekit.models.fields.ProcessedImageField')(max_length=100, null=True))

    def backwards(self, orm):
        # Adding field 'Slider.thumb_small'
        db.add_column(u'sliders_slider', 'thumb_small',
                      self.gf(u'django.db.models.fields.CharField')(default=u'', max_length=255, blank=True),
                      keep_default=False)

        # Deleting field 'Slider.smallthumb'
        db.delete_column(u'sliders_slider', 'smallthumb')


        # Changing field 'Slider.banner'
        db.alter_column(u'sliders_slider', 'banner', self.gf('django.db.models.fields.files.ImageField')(max_length=100))

        # Changing field 'Slider.thumb'
        db.alter_column(u'sliders_slider', 'thumb', self.gf(u'django.db.models.fields.CharField')(max_length=255))

    models = {
        u'sliders.slider': {
            'Meta': {'object_name': 'Slider'},
            'banner': ('imagekit.models.fields.ProcessedImageField', [], {'max_length': '100'}),
            'category': ('django.db.models.fields.CharField', [], {'default': "'Home'", 'max_length': '50'}),
            'created': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2015, 12, 29, 0, 0)', 'auto_now_add': 'True', 'blank': 'True'}),
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2015, 12, 29, 0, 0)', 'auto_now': 'True', 'blank': 'True'}),
            'position': ('django.db.models.fields.IntegerField', [], {'default': '0'}),
            'smallthumb': ('imagekit.models.fields.ProcessedImageField', [], {'max_length': '100', 'null': 'True', 'blank': 'True'}),
            'thumb': ('imagekit.models.fields.ProcessedImageField', [], {'max_length': '100', 'null': 'True', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '255', 'null': 'True', 'blank': 'True'}),
            'url': ('django.db.models.fields.URLField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['sliders']