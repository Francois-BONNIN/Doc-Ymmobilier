---
sidebar_position: 2
---

# React Native

Afin de procéder à l'utilisation de l'application, il est nécessaire de cloner le projet avec :

```
git clone https://github.com/DimitriRomano/YnovB3-Immo-Mobile
```

## Dépendances

Effectuer l'installation de React Native et des autres dépendances avec :

```
npm install
```

:::info
Notre équipe utilisais `Ngrok` pour créer un tunnel vers le backend.
:::

Il est donc de nécessaire de configurer l'hôte de l'application de la manière suivante :
1. Rendez-vous dans le fichier `API/YmobilierApi.js`
2. Modifier la première ligne de code en changeant la variable ipHome par la valeur de votre tunnel fourni par ngrok.

## Expo

Démarrer expo avec la commande `npm start`

Utiliser l'application [Expo Go](https://expo.dev/client) pour flasher le QrCode et ainsi posséder un accès à l'application.





