// Configuration Firebase du projet residanat-2027 (compte drmcf89@gmail.com).
// Ces valeurs sont publiques par nature : ce sont les règles Firestore qui protègent les données.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCJukbo8gJv0dhg412DOPUKYDFNJemZ014",
  authDomain: "residanat-2027-6ec7a.firebaseapp.com",
  projectId: "residanat-2027-6ec7a",
  storageBucket: "residanat-2027-6ec7a.firebasestorage.app",
  messagingSenderId: "448376198602",
  appId: "1:448376198602:web:1b136438c5f2ebc7e7ab33"
};
// false = seuls les emails de la collection « allowed » peuvent entrer (règles : regles-firestore.txt)
// true  = tout le monde peut créer un compte gratuit (règles : regles-firestore-ouvert.txt)
window.FIREBASE_OPEN = false;
