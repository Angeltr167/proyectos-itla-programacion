document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
        const usuario = JSON.parse(storedUser);
        if (usuario.email === email && usuario.password === password) {
            alert('Inicio de sesion exitoso.');
            window.location.href = 'home.html';
        } else {
            alert('Email o contraseña incorrectos. Por favor, intentelo de nuevo.');
        }
    } else {
        alert('No hay ningun usuario registrado. Por favor, registrese primero.');
    }
});
