from django.shortcuts import render
from django.http import HttpResponse

from . import getdata

def data(request):
    return HttpResponse('Bienvenue sur la partie data du dashboard')

def get_data(request):
    df = getdata.data()
    return HttpResponse(df.to_json(orient = 'columns'), content_type='application/json')