// ÉTAPE À FAIRE : remplace chaque COLLE_ICI par la valeur de ton projet.
// Firebase › Paramètres du projet (engrenage) › Vos applications › ton app Web › « firebaseConfig ».
// Tant que ce fichier contient COLLE_ICI, le site marche en mode local (sans compte).
window.FIREBASE_CONFIG = {
  apiKey: "COLLE_ICI",
  authDomain: "COLLE_ICI",
  projectId: "COLLE_ICI",
  storageBucket: "COLLE_ICI",
  messagingSenderId: "COLLE_ICI",
  appId: "COLLE_ICI"
};
// false = seuls les emails de ta liste « allowed » peuvent entrer (règles : regles-firestore.txt)
// true  = tout le monde peut créer un compte gratuit (règles : regles-firestore-ouvert.txt)
window.FIREBASE_OPEN = false;
