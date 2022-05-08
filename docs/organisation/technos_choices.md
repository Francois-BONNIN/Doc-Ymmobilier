---
sidebar_position: 1
---

# Choix des technologies

## Backend

Une des technologies de backend que notre équipe à l'habitude d'utiliser est Laravel 9 (la dernière version).
C'est le framework PHP le plus utilisé dans le monde et également le plus performant d'entre eux.

:::caution attention

Le projet utilise **Laravel 9**, la dernière version de Laravel.

:::

Laravel dispose de son propre ORM : Eloquent. Il protège contre les attaques par injection SQL et contre la falsification de requêtes intersites (Cross-Site Request Forgery – CSRF). 

:::note

ORM signifie Object-Relational Mapping, c'est un ensemble de classes permettant de manipuler les tables d’une base de données relationnelle comme s’il s’agissait d’objets.

:::


Il utilise un moteur de templating appelé Blade qui est utilisé pour le panel d'administration. L’avantage est qu'il est possible d'utiliser PHP dans Blade.


:::info

Tailwind CSS est également utilisé afin de faciliter la mise en forme et le développement du panneau d'administration.

:::

## Frontend

L'application mobile sera développée avec React Native. En effet React Native est un framework JavaScript de développement d'application mobile. 
C'est une collection de composants, de librairies et d'outils qui permettent de créer des singles page applications et de réaliser des applications mobiles riches et performantes.

Les principales compétences de notre équipe sont tournés vers le JavaScript, étant donné l'ampleur du projet, ce framework nous permettais de ne pas perdre trop de temps sur son apprentissage.


:::info

La version de React Native utilisée est la version 0.68.1.

:::

Afin de pouvoir développer notre application, et d'avoir un retour visuel sur celle-ci, notre équipe utilise l'outil **Expo** qui permet de compiler et d'exécuter notre application sur IOS et Android.

:::info
La version de Expo est la 45 (45.0.0).
:::


## Environnement de production

Différents outils ont été utilisés afin de faciliter la production de nos applications : 

- **Laragon** : kit de développement composé entre autre de Apache, MySQL et PHP. Laragon permet de déployer notre application sur un serveur local.

:::caution attention

Les versions utilisées sont les suivantes : **PHP 8.1**, **Apache 2.4** et **MySQL 5.7**

:::

- **VsCode** ou **IDE Jetbrains (WebStorm, PhpStorm)** : Ce sont des IDE (ou Integrated Development Environment) qui regroupe un ensemble d’outils spécifiques. Ils permettent d'optimiser le temps de travail et d'améliorer la productivité.

- **Insomnia** : Logiciel qui permet de tester notre API et de récupérer les données de celles-ci.

- **GitHub** : Un outil pour la gestion de notre code et le versioning de nos applications.

:::info

Le versionning consiste à travailler directement sur le code source du projet, en gardant toutes les versions précédentes

:::