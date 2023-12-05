// Obsługa rejestracji użytkownika
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Tutaj możesz dodać kod tworzący bazę danych lub przechwytywanie danych logowania
    console.log('Email:', email);
    console.log('Hasło:', password);

    // Tutaj można dodać żądanie utworzenia bazy danych lub innych operacji, które chcesz wykonać

    // Poniżej przykład zapisania danych do lokalnej tablicy użytkowników
    const newUser = {
        email: email,
        password: password
    };
    // Przykład dodania użytkownika do lokalnej tablicy (symulacja zapisu do bazy danych)
    // Tutaj możesz zamiast tego użyć prawdziwej bazy danych
    console.log('Nowy użytkownik:', newUser);
    alert('Użytkownik zarejestrowany!');
});
