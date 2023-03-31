const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  }    
    const user = {email: email.value.trim(), password: password.value.trim()};
    console.log(user)

    event.currentTarget.reset();
}
