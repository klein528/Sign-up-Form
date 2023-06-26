const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordLabel = document.getElementById('confirmPasswordLabel');

confirmPasswordInput.addEventListener('input', () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('Passwords do not match');
  } else {
    confirmPasswordLabel.textContent = '';
    confirmPasswordInput.setCustomValidity('');
  }
});