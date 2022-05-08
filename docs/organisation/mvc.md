---
sidebar_position: 4
---

# L'architecture MVC

Laravel est un framework PHP qui utilise l'architecture MVC. 

L'architecture MVC permet de découper notre infrastructure en plusieurs parties :
 - [Les Modèles](/docs/organisation/bdd#les-modèles) : qui contiennent les données
 - [Les Vues](#les-vues) : qui permettent de visualiser les données
 - [Les Controllers](#les-controleurs) : qui gèrent les données

## Les Modèles

:::info

La partie **Modèle** de cette documentation se trouve [ici](/docs/organisation/bdd#les-modèles).

:::

## Les Contrôleurs {#les-controleurs}

Un contrôleur va traiter les actions de l'utilisateur, demander au(x) modèle(s) d'effectuer des changements puis de renvoyer une vue ou une réponse (pour l'api). C'est donc le pont entre les interactions de l'utilisateur et le traitement des données dans les différents modèles.

Toutes les fonctions présentent dans les contrôleurs sont reliées à une route.

Le projet comporte plusieurs contrôleurs :
 - **PropertyController** : gère les actions des propriétés
 - **ReservationController** : gère les actions des réservations
 - **FavoriteController** : gère les actions des favoris
 - **DashboardController** : gère les principales et affichage pour le panneau d'administration

Exemple de la fonction findOne() du fichier PropertyController qui permet de renvoyer au format JSON une propriété et toutes les données liés à celle-ci:

```php
function findOne($id)
{
    $user_id = Auth::id();
    $property = Property::where('id', $id)
        ->with('localisation')
        ->with('type')
        ->with('features.category_features')
        ->with('images')
        ->first();

    if($property) {
        if(Auth::check()) {
            $property->is_favorite = (bool)Favorite::where('property_id', $property->id)->where('user_id', $user_id)->first();
        }else{
            $property->is_favorite = false;
        }
        return response()->json($property, 200);
    } else {
        return response()->json("Property not found", 404);
    }
}
```


## Les Vues {#les-vues}

Les vues sont les éléments visuels qui permettent de visualiser les données.

Afin d'optimiser le rendu des vues et le nombre de fichiers, Blade permet de créer des composants et des layouts que l'on peut réutiliser dans les vues.

Ainsi le panneau d'administration est composé de plusieurs vues :
 - **welcome** : page d'accueil du panneau d'administration qui invite l'utilisateur à s'authentifier
 - **dashboard.home** : page d'accueil du panneau d'administration
 - **dashboard.users** : page de gestion des utilisateurs
 - **dashboard.properties** : page de gestion des propriétés
 - **dashboard.reservations** : page de gestion des réservations

Par exemple dans la vue dashboard.reservations, on vient réutiliser le layout `app` pour définir la structure de la page, puis on utilise des composants pour afficher les données. Ces composants seront affichés en fonction de la route qui a été utilisée.

```blade.php
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-2xl text-gray-800 leading-tight text-center">
            @switch(request()->route()->getName())
                @case('admin.properties.reservations')
                {{ __('Choix de l\'annonce') }}
                @break
                @case('admin.property.reservations')
                {{ __('Réservation de '. $property->title) }}
                @break
            @endswitch
        </h2>
    </x-slot>

    <div class="flex flex-row mx-4 gap-4">
        @switch(request()->route()->getName())
            @case('admin.properties.reservations')
            <x-reservations.tables :datas="$properties" class="tableforfilter"/>
            @break
            @case('admin.property.reservations')
            <x-property.card :property="$property" class="filter"/>
            <x-reservations.res-property :datas="$reservations" class="tableforfilter"/>
            @break
        @endswitch
    </div>
</x-app-layout>
```


