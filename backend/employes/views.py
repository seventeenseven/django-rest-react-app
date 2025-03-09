from django.shortcuts import render
from rest_framework import viewsets, response
from .serializers import EmployeSerializer
from .models import Employes

# Create your views here.

class EmployeViewSet(viewsets.ModelViewSet):
    queryset = Employes.objects.all()
    serializer_class = EmployeSerializer
    