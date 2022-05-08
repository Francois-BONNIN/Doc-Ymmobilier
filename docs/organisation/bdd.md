---
sidebar_position: 2
---

# La Base de Données

## MySQL

Laravel est composé d'un ORM (Object Relational Mapper) qui permet de faire le lien entre les données et les objets de l'application très facilement.
Cet ORM est optimisé pour les bases de données relationnelles comme MySQL.

Afin d'organiser les données et de faciliter leur manipulation, Laravel utilise une architecture de données nommée **Modèle**.
Chaque modèle représente une table de la base de données. 

Un diagramme de classes a été mise en place dès le lancement du projet, en fonction du cahier des charges et des fonctionnalités de l'application souhaitées.

## Diagramme de classes

![Diagramme de classes](/img/diagramme-classes.png)

## Les Modèles

:::info
Un **modèle** contient une classe qui va représenter une table en base de données. Cette classe vient faire « l'interface » entre le contrôleur et la base de données.
:::

Suite à la schématisation de la base de données avec un diagramme de classe, il est facile d'organiser et de créer les modèles.

Afin de réaliser les liaisons entre les différentes tables, Laravel propose d'utiliser les relations entre les modèles.

Ainsi, notre projet comporte plusieurs types de relations :
- [One to one](https://laravel.com/docs/9.x/eloquent-relationships#one-to-one) : une relation « one to one » permet d'établir la cardinalité de 1 à 1 entre les modèles.
- [One to many](https://laravel.com/docs/9.x/eloquent-relationships#one-to-many) : une relation « one to many » permet d'établir la cardinalité de 1 à n entre les modèles.
- [Many to many](https://laravel.com/docs/9.x/eloquent-relationships#many-to-many) : une relation « many to many » permet d'établir la cardinalité de n à n entre les modèles.

Prenons par exemple notre modèle principal `Property` :

```php
class Property extends Model {
    use HasFactory;
    private $is_favorite = false;

    public function type(){ return $this->belongsTo(Type::class); }

    public function localisation(){ return $this->hasOne(Localisation::class); }

    public function images(){ return $this->hasMany(Image::class); }

    public function features(){ return $this->belongsToMany(Feature::class); }

    public function favorites(){ return $this->hasMany(Favorite::class); }

    public function reservations(){ return $this->hasMany(Reservation::class); }
}
```

## Les Seeders et les Factories

Pour présenter une application et un panneau d'administration fonctionnels, notre projet comporte des données de test.

:::note

Les données de test sont générées automatiquement et aléatoirement par Laravel. Aucunes des données présentes ne sont réels.
:::

**Les Factories** utilisent la librairie de génération de données [Faker](https://github.com/fzaninotto/Faker). Ainsi des paramètres et des directives sont données par exemple, dans le fichier UserFactory.php afin de créer de faux utilisateurs :

```php
class UserFactory extends Factory
{
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'phone' => "0" . $this->faker->numberBetween(100000000, 999999999),
            'image' => 'https://picsum.photos/id/'.$this->faker->numberBetween(1,1000).'/200/300',
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'created_at' => now(),
        ];
    }
}    
```

:::tip

La **plupart des données** sont générés par le fichier [PropertySeeder.php](https://github.com/DimitriRomano/YnovB3-Immo-API-Panel/blob/master/database/seeders/PropertySeeder.php). On y retrouve tout l'algorithme de génération de données ainsi que la réflexion qu'il y a pu avoir pour arriver à utiliser les relations entre les modèles avec les seeders.

:::