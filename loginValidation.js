document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    const emailInput = document.getElementById('login_email');
    const passwordInput = document.getElementById('login_password');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Clear all previous error messages
        clearErrorMessages();

        // Validate the form
        if (validateLoginForm()) {
            // Simulate redirection for demonstration
            window.location.href = 'homepage.html';
        } else {
            // Display general error message
            showError('Login failed. Please check your credentials.', 'login-error');
        }
    });

    function validateLoginForm() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        if (email === '' || !isValidEmail(email)) {
            showError('Please enter a valid email address.', 'login-email-error');
            isValid = false;
        }

        if (password === '' || password.length < 8) {
            showError('Password should be at least 8 characters long.', 'login-password-error');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(message, errorId) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = message;
    }

    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.textContent = '');
    }
});