// Importowanie funkcji Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Konfiguracja Firebase
const firebaseConfig = {
  // ... Twoje dane konfiguracyjne Firebase
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Funkcja rejestracji użytkownika
export function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Użytkownik zarejestrowany:", user);
      alert("Użytkownik zarejestrowany!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Błąd rejestracji:", errorMessage);
      alert("Błąd rejestracji: " + errorMessage);
    });
}
