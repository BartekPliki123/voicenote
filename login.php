const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        username: email,
        password: password
    };

    sendLoginData(userData);
});

function sendLoginData(userData) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert(xhr.responseText);
        } else {
            alert('Błąd podczas rejestracji.');
        }
    };
    const encodedData = `username=${encodeURIComponent(userData.username)}&password=${encodeURIComponent(userData.password)}`;
    xhr.send(encodedData);
}
