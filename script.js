//navbar toggle btn for dropdown and to cancel it 

const navbar_list = document.querySelector("#navbar_list");
const drop_btn = document.querySelector("#drop_btn")
const closeBtn = document.querySelector("#closeBtn")
drop_btn.addEventListener("click", () => {
    navbar_list.classList.add("active");
})
closeBtn.addEventListener("click", () => {
    navbar_list.classList.remove("active");
})
                    //function fo display password on click


// const passwordInput = document.getElementById('password');
// const eyeIcon = document.getElementById('eye');

// eyeIcon.addEventListener('click', () => {
//   if (passwordInput.type === 'password') {
//     passwordInput.type = 'text';
//     eyeIcon.classList.remove('fas');
//     eyeIcon.classList.add('far');
//     eyeIcon.classList.add('fa-eye-slash');
//   } else {
//     passwordInput.type = 'password';
//     eyeIcon.classList.remove('far');
//     eyeIcon.classList.remove('fa-eye-slash');
//     eyeIcon.classList.add('fas');
//     eyeIcon.classList.add('fa-eye');
//   }
// });

                    // ==============================================
                    // functon to dispaly your password when mouseover it 
                    // ==============================================
                    
                    
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye');

eyeIcon.addEventListener('mouseover', () => {
  passwordInput.type = 'text';
  eyeIcon.classList.remove('fas');
  eyeIcon.classList.add('far');
  eyeIcon.classList.add('fa-eye-slash');
});

eyeIcon.addEventListener('mouseout', () => {
  passwordInput.type = 'password';
  eyeIcon.classList.remove('far');
  eyeIcon.classList.remove('fa-eye-slash');
  eyeIcon.classList.add('fas');
  eyeIcon.classList.add('fa-eye');
});

// password regular expression
const passwordStrengthDiv = document.getElementById('password-strength');
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.])[A-Za-z\d@$!%*?&\.]{8,}$/;

passwordInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value;
  
  if (passwordRegex.test(passwordValue)) {
    passwordInput.style.borderColor = 'green';
    passwordStrengthDiv.textContent = 'Strong Password';
    passwordStrengthDiv.style.color = 'green';
  } else {
    passwordInput.style.borderColor = 'red';
    passwordStrengthDiv.textContent = 'Weak Password';
    passwordStrengthDiv.style.color = 'red';
  }
  
  if (passwordValue === '') {
    passwordInput.style.borderColor = '';
    passwordStrengthDiv.textContent = '';
  }
});
  

// email regular expression

const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');

emailInput.addEventListener('input', function() {
            const email = emailInput.value;

            // Regex to check for both "@" and ".com"
            const pattern = /@.*\.com$/;

            if (!pattern.test(email)) {
                emailInput.classList.add('error');
                emailInput.classList.remove('valid');
                errorMessage.style.display = 'inline'; // Show error message
            } else {
                emailInput.classList.remove('error');
                emailInput.classList.add('valid');
                errorMessage.style.display = 'none'; // Hide error message
            }
        });