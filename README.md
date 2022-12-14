# Test EFFICY
## Exigences fonctionnelles

#### Dynamique des pages

Chargez les <select>options avec le contenu du oppoStatustableau global.
Lorsque le statut est modifié, définissez la valeur associée de succès (par exemple, le statut 4 définit le succès = 75)
Lors de la soumission du formulaire, affichez les valeurs des éléments du formulaire sous forme de chaîne JSON. Nous voulons voir les valeurs, pas le texte. {"status":3,"success":50}
#### Style de base

Aligner à droite la valeur de réussite
Affichez le bouton Soumettre dans sa propre boîte. Ajoutez un peu d'espacement autour de l'élément.
Définissez une police mono-espace sur la sortie <div>afin que nous ayons une meilleure vue sur la sortie JSON générée.


## Les règles du jeu
Vous ne pouvez pas modifier la source HTML
Utilisez CSS, SCSSou Sasspour le style, pas de JS
N'utilisez que du JS pur , les frameworks ou bibliothèques externes (par exemple jQuery) ne sont pas autorisés.
Vous n'êtes pas obligé de prendre en charge les navigateurs obsolètes, ECMA 2019 est autorisé !