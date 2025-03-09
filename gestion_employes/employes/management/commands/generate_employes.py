from django.core.management.base import BaseCommand
from faker import Faker
from employes.models import Employes

class Command(BaseCommand):
    help = 'Générer des employés fictifs'

    def handle(self, *args, **kwargs):
        fake = Faker()
        for _ in range(10):  # Le nombre d'employés à générer
            Employes.objects.create(
                nom=fake.last_name(),
                prenom=fake.first_name(),
                email=fake.email(),
                departement=fake.job(),
                date_embauche=fake.date_this_decade(),
            )
        self.stdout.write(self.style.SUCCESS('Employés générés avec succès.'))
