const showPassword = document.getElementById('showPassword');
    const hidePassword = document.getElementById('hidePassword');
    const passwordInput = document.querySelector('.input1[type="password"]');

    showPassword.addEventListener('click', function() {
        passwordInput.type = 'text';
        showPassword.style.display = 'none';
        hidePassword.style.display = 'inline';
    });

    hidePassword.addEventListener('click', function() {
        passwordInput.type = 'password';
        hidePassword.style.display = 'none';
        showPassword.style.display = 'inline';
    });