Revoyons les bases avec un jeu de cartes de votre enfance : la bataille !

Vous devez écrire un programme qui à partir d'une distribution des cartes détermine le gagnant d'une partie de "bataille".
  Règles
La bataille est un jeu de cartes qui se joue à deux joueurs. Chaque joueur a en sa possession un certain nombre de cartes en début de partie qu'il garde dans sa main sous forme de tas, la face cachée sur le dessus.
 
Etape 1 : le combat
À chaque tour, chaque joueur retourne la carte du dessus de son tas. Si elle est supérieure à celle de son adversaire, il remporte les deux cartes et les place sous son tas. Voici l'ordre de valeur des cartes, de la plus faible à la plus forte :
2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A.
 
Etape 2 : la bataille
Si les deux cartes sont de même valeur, intervient alors ce que l'on appelle une bataille ! Chaque joueur défausse 3 cartes du dessus de son tas. Ensuite ils repassent à l'étape 1 (plusieurs batailles peuvent se suivre). Dès qu'un joueur remporte une bataille, il remporte toutes les cartes jouées pendant le tour et les place sous son tas.
 
Cas spéciaux :

    Si un des deux joueurs n'a plus assez de cartes pour jouer lors d'une bataille (pendant la phase de défausse ou pendant la phase de combat qui suit la défausse), alors les joueurs sont ex aequo.
    Les jeux de tests sont formulés de telle façon qu'une partie se termine toujours (vous n'avez donc pas à tester l'éventualité d'une partie infinie)

Chaque carte sera représentée par sa valeur suivie de sa couleur parmi : D, H, C, S. Par exemple : 4H, 8C, AS.

Quand un joueur gagne une manche, il remet les cartes sous son tas dans un ordre précis. D'abord les cartes du premier joueur, puis celles du second joueur (lors d'une bataille toutes les cartes du premier joueur puis toutes les cartes du second joueur).

Par exemple, si la distribution des cartes est la suivante :
Joueur 1 : 10D 9S 8D KH 7D 5H 6S
Joueur 2 : 10H 7H 5C QC 2C 4H 6D
Après une manche elle sera :
Joueur 1 : 5H 6S 10D 9S 8D KH 7D 10H 7H 5C QC 2C
Joueur 2 : 4H 6D
