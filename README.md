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
