  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBdj8mzFmoOo_KwVhPy_KobPT1O2Kp8608",
    authDomain: "hackaton-bbva-contratacion.firebaseapp.com",
    projectId: "hackaton-bbva-contratacion",
    storageBucket: "hackaton-bbva-contratacion.appspot.com",
    messagingSenderId: "829726070697",
    appId: "1:829726070697:web:d15eea68ac63902a8e16b8",
    measurementId: "G-9HJ4NN8L2X"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function writeUserData(name, apellidos, cedula, email, fechadePago, telefono) {
    db.collection('prospecto').doc().set({
        nombres: name,
        apellidos: apellidos,
        cedula: cedula,
        email: email,
        fechadePago: fechadePago,
        telefono: telefono
    });
}