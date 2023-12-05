<?php
// Odczytanie danych z formularza
$username = $_POST['username'];
$password = $_POST['password'];

// Sprawdzenie poprawności danych - to tylko przykład, bezpieczne uwierzytelnianie wymaga znacznie więcej logiki
if ($username === 'admin' && $password === 'password') {
    // Dodanie danych logowania do pliku
    $file = 'loginy.txt';
    $data = $username . ':' . $password . PHP_EOL;
    file_put_contents($file, $data, FILE_APPEND);

    // Przekierowanie po zalogowaniu
    header("Location: panel.php");
    exit();
} else {
    echo "Błędne dane logowania";
}
?>
