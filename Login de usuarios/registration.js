document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
        const usuario = JSON.parse(storedUser);
        if (usuario.email === email) {
            alert('Este correo electronico ya esta registrado. Por favor, utiliza otro.');
            return;
        }
    }

    let usuario = { email: email, password: password };
    localStorage.setItem('usuario', JSON.stringify(usuario)); 

    alert('Usuario registrado correctamente. Por favor, inicia sesión.');
    window.location.href = 'login.html';
    this.reset();
});
