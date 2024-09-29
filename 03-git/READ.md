Mon Magnifique Portfolio
Bienvenue sur le dépôt GitHub de mon magnifique portfolio ! 🎉

Introduction
Ce projet est une introduction à l'utilisation de Git et GitHub. Il couvre les bases de la création et la gestion d'un dépôt, ainsi que l'utilisation de quelques commandes Git essentielles.

Objectifs 🎯
Apprendre les bases de Git et GitHub : Comprendre la différence entre Git (un outil de gestion de versions) et GitHub (un service en ligne pour héberger des dépôts Git).
Configurer Git : Configuration de l'utilisateur Git, création de clés SSH, et connexion à GitHub.
Créer un premier repository : Initialisation d'un dépôt local, ajout de fichiers, et synchronisation avec GitHub.
Gérer les modifications : Faire des changements, les sauvegarder et les pousser sur GitHub.
Étapes 🛠️

1. Configuration initiale
Créer un compte GitHub : github.com
Configurer la clé SSH :
Suivez ce guide officiel pour générer et ajouter votre clé SSH.
Configurer Git sur votre ordinateur :
bash

Copier le code
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"

2. Créer un nouveau repository
Créer un repository sur GitHub : Cliquez sur le bouton "New repository" sur votre page GitHub et nommez-le mon_pseudo.github.io.
Initialiser le repository localement :
bash
Copier le code
git init

Ajouter un fichier : Créez un fichier index.html et ajoutez-le avec la commande :
bash
Copier le code
git add index.html

Effectuer un premier commit :
bash
Copier le code
git commit -m "first commit"

Lier le dépôt local au dépôt GitHub :
bash
Copier le code
git remote add origin git@github.com:mon_pseudo/mon_magnifique_portfolio.git

Pousser les modifications sur GitHub :
bash
Copier le code
git push -u origin main

3. Faire des modifications
Modifier index.html avec du contenu supplémentaire.
Ajouter et sauvegarder les modifications :
bash
Copier le code
git add index.html
git commit -m "Modification du fichier index.html"

Pousser les modifications sur GitHub :
bash
Copier le code
git push

4. Gérer les conflits
Modifier le fichier index.html directement sur GitHub.

Faire une autre modification localement et essayer de pousser :
bash
Copier le code
git push

Résoudre le conflit :
Si vous avez un message d'erreur indiquant un conflit, récupérez d'abord les modifications de GitHub :
bash
Copier le code
git pull

Résolvez le conflit dans le fichier concerné.
Sauvegardez le résultat :
bash
Copier le code
git add index.html
git commit -m "Résolution du conflit"
git push

Commandes Git de base 📚
git init : Initialise un dépôt Git local.
git add <fichier> : Ajoute un fichier au prochain commit.
git commit -m "message" : Sauvegarde les modifications avec un message descriptif.
git push : Pousse les modifications locales vers GitHub.
git pull : Récupère les dernières modifications depuis GitHub.
git status : Affiche l'état des modifications locales.
git diff <fichier> : Montre les différences entre les modifications locales et la dernière version commitée.
Liens utiles 🔗
Documentation Git
Guide GitHub
Cheatsheet GitHub

Avenir 🚀
Créez d'autres repositories pour vos projets personnels.
Collaborez avec d'autres sur un projet commun.
Apprenez à utiliser les branches pour gérer plusieurs versions de votre projet.

Remerciements 🙏
Merci d'avoir suivi ce guide ! 

