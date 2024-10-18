function handleSubmit(event) {
  event.preventDefault();

  // Récupération des valeurs des champs
  const firstName = document.getElementById('firstname').value.trim();
  const lastName = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').valu
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

  const errorElement = document.getElementById('error');
  errorElement.innerHTML = '';

  if (!firstName || !lastName) {
      errorElement.innerHTML = 'First name and last name cannot be empty.';
      return;
  }

  if (!emailRegex.test(email)) {
      errorElement.innerHTML = 'Email is badly formatted.';
      return;
  }

  if (!passwordRegex.test(password)) {
      errorElement.innerHTML = 'Password must be at least 8 characters long and contain at least one letter and one number.';
      return;
  }

  errorElement.innerHTML = 'Form submitted successfully!';
}
