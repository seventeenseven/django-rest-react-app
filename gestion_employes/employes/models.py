from django.db import models

# Create your models here.
class Employes(models.Model):
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    email = models.EmailField()
    departement = models.CharField(max_length=50)
    date_embauche = models.DateField()

    def __str__(self):
        return f'Employés {self.nom}'
    