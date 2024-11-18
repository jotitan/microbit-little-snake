# Coder son Snake en Javascript - Microbit

Nous allons coder ensemble un mini jeu de snake avec Microbit

## Règles du jeu

Le serpent à une longueur de 3.
Des pommes apparaissent aléatoirement. Lorsque le serpent passe dessus, il marque un point.
Le bouton A permet de tourner à gauche, le bouton à droite.
L'appui sur le logo permet de mettre en pause et d'afficher le score.
Le serpent peut passer à travers les murs, il apparaît alors de l'autre côté

## Etapes

Voici les étapes pour construire facilement votre serpent

* Le serpent
    * Afficher le serpent composé d'une tête et de deux points de la queue
    * L'animer en le faisant avancer dans la même direction
    * Connecter les boutons A et B pour changer la direction du serpent : A à gauche, B à droite
    * Prendre en compte la direction au serpent
* Score
    * Gérer la pause lors du click sur le logo
    * Afficher le score lorsqu'on est sur pause
    * Générer la position d'une pomme dans la matrice là où ne se trouve pas le serpent et l'afficher
    * Lorsque le serpent (sa tête) passe sur la pomme, ajouter un point et regénérer une pomme


> Ouvrir cette page à [https://jotitan.github.io/microbit-little-snake/](https://jotitan.github.io/microbit-little-snake/)

## Utiliser comme extension

Ce dépôt peut être ajouté en tant qu'**extension** dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Nouveau projet**
* cliquez sur **Extensions** dans le menu engrenage
* recherchez **https://github.com/jotitan/microbit-little-snake** et importez

## Éditer ce projet

Éditer ce dépôt dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Importer** puis cliquez sur **Importer l'URL **
* collez **https://github.com/jotitan/microbit-little-snake** et cliquez sur importer

#### Métadonnées (utilisées pour la recherche, le rendu)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
