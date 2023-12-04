document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
    const message = document.getElementById('message');

    registerBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Wysyłanie danych do serwera za pomocą fetch lub XMLHttpRequest
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            // Otrzymanie odpowiedzi z serwera
            if (data.success) {
                message.textContent = 'Konto zostało utworzone!';
            } else {
                message.textContent = 'Wystąpił błąd podczas rejestracji.';
            }
        })
        .catch(error => {
            console.error('Błąd:', error);
            message.textContent = 'Wystąpił błąd podczas rejestracji.';
        });
    });
});
