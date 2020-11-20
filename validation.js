
const form = document.getElementById('messageForm')
const emailField = document.getElementById('emailField');
const oksubmit = document.getElementById('oksubmit');
  
emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();
  
  if ( isValidEmail ) {
    oksubmit.disabled = false;
  } else {
    oksubmit.disabled = true;
  }
});
  
oksubmit.addEventListener('click', function (event) {
  form.submit();
});