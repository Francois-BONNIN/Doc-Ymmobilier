---
sidebar_position: 1
---

# Laravel

Nous avons choisi de développer notre application avec le framework Laravel comme base de développement pour l'API mais aussi pour le panneau d'administration.


## Le dépôt Git
:::warning attention

Le dossier du projet contenant le panneau d'administration doit se trouver dans le dossier pointé par votre serveur Apache ou Nginx. (De notre côté, il se trouve dans le dossier `www` dans laragon).

:::
Afin de pouvoir les utiliser vous devrez clonez le [repository](https://github.com/DimitriRomano/YnovB3-Immo-API-Panel) en utilisant la commande suivante :

```
git clone https://github.com/DimitriRomano/YnovB3-Immo-API-Panel.git
```


## Les dépendances Composer et NodeJS (TailwindCSS)

Afin de générer toutes les dépendances, il sera nécessaire de lancer les commandes suivantes (la commande `composer update` sera probablement nécessaire) :

```
composer install
npm install
```

## fichier .env et migration de la base de données

Créer le fichier de configuration principale de l'application :
```
cp .env.example .env
```

Une fois les informations de connexion à la base de données remplies, il est nécessaire de faire une migration de la base de données puis générer les données de substitution :
```
php artisan migrate:fresh
php artisan db:seed
```

## Lancement de l'API

Pour mettre en route l'API, il faut lancer dans un premier temps mettre en route ngrock sur votre environnement:
```
ngrock http 800
```

Puis lancer le serveur :
```
php artisan serve
```

A présent, vous pourrez accéder à l'API depuis n'importe quel support.



