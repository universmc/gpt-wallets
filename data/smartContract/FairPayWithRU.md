Documentation de contrat FairPayWithRU
Présentation :
Le contrat FairPayWithRU est un contrat de jeton ERC20 qui implémente les fonctionnalités de distribution et de réclamation de revenu universel (RU) pour les utilisateurs. Il permet aux administrateurs de définir des paramètres tels que la valeur de la pièce PI, le taux de valeur CVUN et la limite CVUN. L'objectif de ce contrat est de fournir un mécanisme de base pour distribuer équitablement les ressources et le revenu au sein d'une communauté en ligne.
Fonctionnalités :
Distribution de RU : Cette fonction distribue des RU aux utilisateurs en fonction de leur niveau. Le niveau est déterminé par les points de valeur (VP) de l'utilisateur, qui doivent être supérieurs à un seuil minimal.
Réclamation de RU : Cette fonction permet aux utilisateurs de réclamer leurs RU, qui sont transférés à leur adresse.
Définition des paramètres : Les fonctions de définition de la valeur de pièce PI, du taux de valeur CVUN et de la limite CVUN permettent aux administrateurs de configurer ces paramètres selon les besoins de la communauté.
Gestion des jetons ERC20 : Les fonctions d'émission, de destruction et de transfert de jetons permettent aux administrateurs de gérer les jetons ERC20 du contrat.
Structures de données :
Job : Cette structure contient les informations sur un emploi, notamment son nom, son salaire et son statut de completion.
Mappings : Le contrat utilise deux mappages pour stocker les VP et les RU de chaque utilisateur.
Fonctions publiques :
setPiCoinValue(uint256 _piCoinValue) : Cette fonction permet aux administrateurs de définir la valeur de la pièce PI.
setCvunRate(uint256 _cvunRate) : Cette fonction permet aux administrateurs de définir le taux de valeur CVUN.
setCvunCap(uint256 _cvunCap) : Cette fonction permet aux administrateurs de définir la limite CVUN.
updateCvun(address account, uint256 value) : Cette fonction permet aux administrateurs de mettre à jour les VP d'un utilisateur en fonction de sa valeur CVUN.
getCvunRate() : Cette fonction retourne la valeur du taux de valeur CVUN.
getPiCoinValue() : Cette fonction retourne la valeur de la pièce PI.
distributeRU() : Cette fonction distribue les RU aux utilisateurs en fonction de leur niveau.
claimRU() : Cette fonction permet aux utilisateurs de réclamer leurs RU.
getUserLevel(address account) : Cette fonction retourne le niveau d'un utilisateur en fonction de ses VP.
Fonctions externes :
mint(address account, uint256 amount) : Cette fonction permet aux administrateurs d'émettre des jetons ERC20 pour un compte spécifique.
burn(address account, uint256 amount) : Cette fonction permet aux administrateurs de détruire des jetons ERC20 d'un compte spécifique.
transferFrom(address sender, address recipient, uint256 amount) : Cette fonction permet aux administrateurs de transférer des jetons ERC20 d'un compte à un autre.
Notez que cette documentation fournit une vue d'ensemble du contrat FairPayWithRU.