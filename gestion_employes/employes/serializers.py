from .models import Employes
from rest_framework import serializers

class EmployeSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Employes
        fields = '__all__'
