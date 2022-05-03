from django.shortcuts import render
from django.http import HttpResponse
import json
import subprocess

# Create your views here.
def getplot(req):
    # print(req.body)
    dat = json.loads(req.body)
    out = subprocess.run(['python', 'api/script.py', str(dat['mean']), str(dat['std'])], capture_output=True)
    return(HttpResponse(out.stdout))