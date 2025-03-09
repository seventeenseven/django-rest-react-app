# django-rest-react-app

## Description

**django-rest-react-app** est un projet complet qui combine un backend développé avec Django Rest Framework et un frontend en React. Ce projet illustre comment sécuriser une API avec JWT à l'aide de `djangorestframework-simplejwt`, tout en fournissant des routes API pour gérer les opérations CRUD (Get, Post, Put, Delete).

### Fonctionnalités

- **Backend :**
  - Développé avec Django Rest Framework
  - Sécurisé par JWT avec `djangorestframework-simplejwt`
  - Routes API pour les opérations suivantes :
    - GET : Récupérer des données
    - POST : Créer de nouvelles données
    - PUT : Mettre à jour des données existantes
    - DELETE : Supprimer des données

- **Frontend :**
  - Développé avec React
  - Affichage basique des données
  - Boutons pour effectuer des appels API
  - Utilisation d'Axios pour les requêtes HTTP
  - Implémentation de fonctions asynchrones et de hooks  `useEffect` pour gérer les appels API

## Installation

Pour installer et exécuter le projet localement, suivez les étapes ci-dessous :

### Backend

1. Clonez le repository :
   ```bash
   git clone https://github.com/seventeenseven/django-rest-react-app.git
   cd django-rest-react-app/backend  # Assurez-vous d'accéder au dossier backend
   ```

2. Créez un environnement virtuel et activez-le :
   ```bash
   python -m venv venv
   source venv/bin/activate  # Sur Windows, utilisez `venv\Scripts\activate`
   ```

3. Installez les dépendances :
   ```bash
   pip install -r requirements.txt
   ```

4. Effectuez les migrations de base de données :
   ```bash
   python manage.py migrate
   ```

5. Lancez le serveur de développement :
   ```bash
   python manage.py runserver
   ```

### Frontend

1. Accédez au dossier du frontend :
   ```bash
   cd ../frontend  # Assurez-vous d'accéder au dossier frontend
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez l'application React :
   ```bash
   npm start
   ```

4. Accédez à l'application via `http://localhost:3000`.

## Utilisation

- Connectez-vous à l'API en utilisant les informations d'identification appropriées pour obtenir un token JWT.
- Utilisez les boutons de l'interface React pour effectuer des opérations CRUD sur les données.
- Les appels API sont gérés par le fichier `api.js`, où Axios est utilisé pour interagir avec le backend.
