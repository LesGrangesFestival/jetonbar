# 🎪 Festival Les Granges — Application Bar & Tickets

Application web développée pour le **Festival Les Granges** afin de faciliter la gestion des commandes, des jetons et de la vente de tickets pendant le festival.

L'application est conçue principalement pour être utilisée sur **smartphone par les bénévoles**.

Elle fonctionne comme une application web installable (PWA) et peut continuer à enregistrer les commandes en cas de perte temporaire de connexion Internet.

---

## 🍺 Bar & stands

L'application permet au bénévole de sélectionner simplement les produits commandés.

Elle calcule automatiquement le **nombre total de jetons** à demander au client.

Les différents postes disponibles sont :

- Tickets
- Bar — Petit Bois
- Bar — Grange Bleue
- Stand Snack
- Stand Burger
- Bar Dimanche

Les produits et tarifs en jetons dépendent du poste sélectionné.

Le bénévole peut changer de poste pendant sa session sans devoir fermer l'application.

---

## 🎟️ Vente de tickets

Le mode **Tickets** permet de calculer rapidement :

- le nombre de jetons demandé ;
- le montant à payer ;
- le mode de paiement (cash ou carte) ;
- le montant reçu en espèces ;
- la monnaie à rendre.

Le prix d'un jeton est défini dans la configuration du festival.

---

## 📱 Utilisation

Au démarrage, le bénévole renseigne :

- son prénom ;
- son nom ;
- son poste.

Une session est ensuite ouverte.

Les commandes sont enregistrées localement sur le téléphone puis synchronisées avec le serveur lorsque la connexion Internet est disponible.

L'application peut donc continuer à être utilisée en cas de connexion instable pendant le festival.

---

## 🔄 Synchronisation

Les données sont enregistrées **localement en premier** afin de ne pas bloquer les bénévoles en cas de problème réseau.

La synchronisation est ensuite tentée automatiquement :

- lorsqu'un certain nombre d'éléments sont en attente ;
- après une période d'inactivité ;
- au retour de la connexion Internet ;
- lors de la fermeture d'une session.

Une synchronisation manuelle est également disponible dans les paramètres.

---

## 🔐 Configuration du festival

Les paramètres propres au festival ne sont pas directement intégrés dans le dépôt GitHub.

Les téléphones peuvent être configurés à l'aide d'un **lien privé / QR code de configuration**.

Une fois la configuration importée :

1. elle est enregistrée localement sur le téléphone ;
2. le fragment de configuration est retiré de l'URL ;
3. l'application peut ensuite être utilisée normalement.

Sans configuration, l'application fonctionne en **mode local**.

---

## 📊 Administration

Un espace administrateur permet de consulter les données centralisées du festival.

Il permet notamment :

- de consulter les statistiques ;
- de filtrer les résultats par poste ;
- d'actualiser les données ;
- d'exporter les commandes au format CSV.

L'accès administrateur est protégé par un code vérifié côté serveur.

---

## ☁️ Backend

La synchronisation et l'administration utilisent **Supabase Edge Functions**.

Les données sont centralisées dans Supabase tandis que l'application GitHub Pages reste une application web statique.

Aucun code administrateur ou secret serveur ne doit être enregistré directement dans ce repository.

---

## 📂 Structure

```text
/
├── index.html
├── manifest.json
├── service-worker.js
└── assets/
