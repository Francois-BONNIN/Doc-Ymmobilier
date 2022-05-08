---
sidebar_position: 3
---

# Les Routes API

L'API est composée de différentes routes.
Une route est le nom qui est utilisé pour accéder à un endpoint, utilisé dans l'URL. 

:::info

Plusieurs endpoints peuvent être accessibles à partir d'une route. Le choix du endpoint dépend de la méthode utilisée.

:::

La technologie utilisée pour la mise en place de l'application mobile (React Native) utilisera les routes suivantes pour accéder aux différentes données :

| Méthode | URI                             | Description                                                                                      |
|:--------|:--------------------------------|:-------------------------------------------------------------------------------------------------|
| POST    | `api/register         `         | Création de compte                                                                               |
| POST    | `api/login            `         | Connexion à un compte                                                                            |
| GET     | `api/user             `         | Afficher les informations de son compte                                                          |
| PUT     | `api/user/edit        `         | Editer les informations de son compte                                                            |
| GET     | `api/properties       `         | Afficher toutes les propriétés, leur type et ses images                                          |
| GET     | `api/properties/{idProperty}  ` | Afficher une propriété avec sa localisation, son type, ses images et toutes ses caractéristiques |
| PUT     | `api/favorites/{idProperty}   ` | Ajouter une propriéré en favoris                                                                 |
| GET     | `api/favorites        `         | Afficher toutes les propriétés favorites de l'utilisateur connecté                               |
| POST    | `api/reservations/{idProperty}` | Envoyer une demande de visite pour une propriété                                                 |
| GET     | `api/user/reservations`         | Affiche les informations de l'utilisateur et les demandes qu'il a envoyées                       |
| POST    | `api/logout           `         | Déconnexion du compte                                                                            |