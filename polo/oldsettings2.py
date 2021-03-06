"""
Django settings for polo project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
gettext = lambda s: s
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

PROJECT_PATH = os.path.split(os.path.abspath(os.path.dirname(__file__)))[0]

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'wu8)a4=4sl)i+6!!(nwgcbv*lp#szt-9-i2adi%ogome-%qu1n'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'publicpages',
    'events',
    'south',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'polo.urls'

WSGI_APPLICATION = 'polo.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        #'ENGINE': 'django.db.backends.sqlite3',
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        #'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        'NAME': 'polo',
       
        'USER': 'postgres',                      # Not used with sqlite3.
        'PASSWORD': 'hotoro',                  # Not used with sqlite3.
        'HOST': 'localhost',                      # Set to empty string for localhost. Not used with sqlite3.
        #'PORT': '5332',                      # Set to empty string for default. Not used wit
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_ROOT = os.path.join(PROJECT_PATH, "static")
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(PROJECT_PATH, "media")
MEDIA_URL = "/media/"


#print "Project Path:" + PROJECT_PATH
#print "Base Dir:"+ BASE_DIR
#print "STATIC ROOT  Path:"+ STATIC_ROOT
#print "STATIC URL:" +STATIC_URL
#print "MEDIA Root:" + MEDIA_ROOT
#print "Media URL:" + MEDIA_URL
#print  (os.path.dirname(__file__))
STATICFILES_DIRS = (os.path.join(os.path.dirname(__file__),"static"),)
#for st in STATICFILES_DIRS:
    #print str(STATICFILES_DIRS)
TEMPLATE_DIRS = (
    os.path.join(PROJECT_PATH, "templates"),
)
