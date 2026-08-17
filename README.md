# Festival Les Granges — App bar / tickets (V2 design)

Version prête pour GitHub Pages.

## À déposer à la racine du repository
- index.html
- manifest.json
- service-worker.js
- assets/

## Fonctionnel dans cette version
- démarrage session : prénom / nom / poste
- postes : Bar Festival, Bar Petite Grange, Bar Snack, Bar Burger, Tickets, Général
- page Bar : boissons, gobelets, total jetons, menu déroulant pour changer de bar
- page Tickets :
  - nombre de jetons
  - prix unitaire actuel : 1,50 €
  - total automatique
  - paiement Cash ou Carte
  - montant reçu
  - monnaie à rendre
- Tickets est sélectionnable dans le même menu déroulant que les bars
- passage libre Bar ↔ Tickets sans fermer la session
- paramètres de session
- aperçu Dashboard administrateur
- actualisation Dashboard uniquement à l'ouverture / bouton Actualiser
- export CSV local

## Étapes suivantes
1. tables Supabase + IDs uniques de commandes
2. synchronisation automatique / file locale hors ligne
3. QR + lien privé de configuration Festival
4. code administrateur unique côté serveur
5. Dashboard global + export CSV de toutes les commandes


## V4 — design affiche 2026
- fond rose plus présent et texturé
- grandes zones presque blanches avec nuance rose
- fleurs décoratives en bas de chaque écran
- nuages blancs et soleil jaune dans les en-têtes
- abeilles décoratives
- écran d'accueil plus proche de l'affiche 2026
- toutes les fonctions V3 conservées, notamment le passage libre Bar ↔ Tickets


## V5 — rapprochement de la maquette validée
- icônes colorées devant chaque boisson et gobelet
- header plus proche de la maquette
- cartes presque blanches / rose très léger
- nuages, soleil, abeilles et fleurs plus subtils
- logo plus lisible et mieux proportionné
- dashboard et page Tickets harmonisés avec la maquette


## V5.2 FIXED
Postes :
1. Tickets
2. Bar - Petit bois
3. Bar - Grange bleue
4. Stand Snack
5. Stand Burger
6. Bar Dimanche

Bar Dimanche est visible mais désactivé hors dimanche (Europe/Brussels).


## V5.3
- suppression complète de la gestion des gobelets / cautions
- même icône que l'eau pour Coca, Fanta, jus d'orange et jus de pomme
- Bar - Petit bois séparé en deux sections :
  - Boissons
  - Produits : Chips et Acroticcini

## V5.4
Bar Dimanche:
- accès automatique le dimanche (Europe/Brussels)
- hors dimanche: accès possible avec le code exceptionnel `DimancheBarFestival`
- l'autorisation exceptionnelle reste active pendant l'onglet/session du navigateur

## V5.5 — règle dimanche
- Bar Dimanche demande toujours le code `DimancheBarFestival`, même le dimanche.
- Le dimanche, Bar - Petit bois, Bar - Grange bleue, Stand Snack et Stand Burger sont bloqués.
- Tickets reste accessible le dimanche.
- Hors dimanche, les bars/stands normaux restent accessibles ; Bar Dimanche reste accessible uniquement avec le code.

## V5.6 — règles d'accès
- Tickets : toujours accessible.
- Bar Dimanche :
  - dimanche : accès direct
  - lundi à samedi : code `DimancheBarFestival`
- Autres bars / stands :
  - lundi à samedi : accès direct
  - dimanche : code `DimancheBarFestival`

## V5.7
Bar Dimanche est maintenant séparé en :
- Boissons
- Produits : Chips, Tarte, Café
