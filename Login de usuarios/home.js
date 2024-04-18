document.addEventListener('DOMContentLoaded', function() {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
        // El usuario ha iniciado sesión correctamente
        const usuario = JSON.parse(storedUser);
        const welcomeMessage = document.createElement('p');
        welcomeMessage.textContent = `¡Bienvenido, ${usuario.email}! Has iniciado sesión correctamente.`;
        document.body.appendChild(welcomeMessage);
    } else {
        // El usuario no ha iniciado sesión, redirigirlo a la página de inicio de sesión
        alert('No has iniciado sesión. Por favor, inicia sesión primero.');
        window.location.href = 'login.html';
    }
});
