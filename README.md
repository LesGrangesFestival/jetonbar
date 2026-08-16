# JetonBar v3 hybride

Le bénévole peut ouvrir trois types de session :

1. Festival avec une configuration déjà enregistrée.
2. Festival en scannant un QR ou en saisissant manuellement l’endpoint et le code.
3. Session locale sans Festival, avec export ou partage CSV.

## Fichiers publics à mettre dans GitHub

- `index.html`
- `service-worker.js`
- `manifest.json` déjà présent dans le dépôt

Le configurateur QR reste local et ne doit pas être ajouté au dépôt.

## Mode Festival

À la clôture, l’application envoie les commandes à l’Edge Function. En cas d’échec, la session reste enregistrée sur le téléphone.

## Mode local

Aucune donnée n’est envoyée vers Supabase. Le bouton CSV permet l’export pendant la session. À la clôture, l’application demande de créer ou partager le CSV avant d’effacer la session.

## Scanner QR

Le scanner intégré utilise l’API `BarcodeDetector` lorsqu’elle est disponible. Sinon, le bénévole peut scanner le QR avec l’appareil photo du téléphone et ouvrir le lien, ou coller le lien dans l’application.
