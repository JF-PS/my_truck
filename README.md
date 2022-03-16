### Lancer le projet

## Attention api à cloner

L'api n'eqt pas déployer.
Il faut lancer l'api avant de lancer le projet react
Elle est disponible sur ce repository : https://github.com/JF-PS/api-react-devoir

Pour lancer l'api

-git clone https://github.com/JF-PS/api-react-devoir
-npm install
-npm start

ensuite bien vérifier sur quel port l'api écoute et
changer le .env du projet react en conséquence.

## Attention à bien inscrire le bon port

REACT_APP_API_URL=http://localhost:{3000}

puis dans le projet react npm start
