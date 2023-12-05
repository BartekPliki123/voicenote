const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Utworzenie obiektu zawierającego dane logowania
    const userData = {
        email: email,
        password: password
    };

    // Wywołanie funkcji do wysłania danych logowania do skryptu PHP
    sendLoginData(userData);
});

// Funkcja do wysłania danych logowania do skryptu PHP
function sendLoginData(userData) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php'); // Wstaw odpowiedni adres URL do Twojego skryptu PHP
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Użytkownik zarejestrowany!');
        } else {
            alert('Błąd podczas rejestracji.');
        }
    };
    xhr.send(JSON.stringify(userData));
}
