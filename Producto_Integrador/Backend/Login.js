document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginErrorMessageContainer = document.getElementById('login-error-message-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const switchToRegisterButton = document.getElementById('switchToRegister');
    const switchToLoginButton = document.getElementById('switchToLogin');
    const registerForm = document.getElementById('registerForm');
    const registerErrorMessageContainer = document.getElementById('register-error-message-container');

    if (switchToRegisterButton) {
        switchToRegisterButton.addEventListener('click', function() {
            if (loginForm) loginForm.style.display = 'none';
            if (registerFormContainer) registerFormContainer.style.display = 'block';
        });
    }

    if (switchToLoginButton) {
        switchToLoginButton.addEventListener('click', function() {
            if (registerFormContainer) registerFormContainer.style.display = 'none';
            if (loginForm) loginForm.style.display = 'block';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const usernameInput = document.getElementById('loginUsername');
            const passwordInput = document.getElementById('loginPassword');
            const username = usernameInput.value;
            const password = passwordInput.value;

            console.log(JSON.stringify({ username: username, password: password }))
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password })
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(errData => {
                            throw new Error(errData.message || 'Error en la petición de login.');
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Login exitoso:', data);
                    alert(data.message);
                    window.location.href = '/Producto_Integrador/Frontend/Dashboard.html'
                })
                .catch(error => {
                    console.error('Error al iniciar sesión:', error);
                    loginErrorMessageContainer.textContent = error.message;
                });
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const usernameInput = document.getElementById('registerUsername');
            const passwordInput = document.getElementById('registerPassword');
            const username = usernameInput.value;
            const password = passwordInput.value;

            fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, password: password })
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(errData => {
                            throw new Error(errData.message || 'Error en la petición de registro.');
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Registro exitoso:', data);
                    alert(data.message);
                    if (loginForm) {
                        loginForm.style.display = 'block';
                    }
                    if (registerFormContainer) {
                        registerFormContainer.style.display = 'none';
                    }
                    document.getElementById('registerUsername').value = '';
                    document.getElementById('registerPassword').value = '';
                })
                .catch(error => {
                    console.error('Error al registrar:', error);
                    registerErrorMessageContainer.textContent = error.message;
                });
        });
    }
});