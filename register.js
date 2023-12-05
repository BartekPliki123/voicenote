// Konfiguracja Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Inicjalizacja Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Obsługa rejestracji użytkownika
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Użytkownik zarejestrowany:', user);

            // Dodawanie danych do bazy danych
            db.collection('users').doc(user.uid).set({
                email: email,
                // Dodaj dodatkowe dane użytkownika, jeśli potrzebujesz
            }).then(() => {
                console.log('Dane użytkownika dodane do bazy danych');
                alert('Użytkownik zarejestrowany!');
            }).catch((error) => {
                console.error('Błąd dodawania danych do bazy danych:', error);
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error('Błąd rejestracji:', errorMessage);
            alert('Błąd rejestracji: ' + errorMessage);
        });
});
