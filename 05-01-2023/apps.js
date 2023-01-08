// function handleSubmit(e){
//     e.preventDefault();
//     console.log('handleSubmit called');
// }


// form control

// function handleSubmit(e){
//     e.preventDefault();
//     console.log(e);
//     // const email = document.forms['login']['email'].value;
//     const email = document.forms.login.email.value;
//     console.log(email);
// }

// to display email id and password

// function handleSubmit(e){
//     e.preventDefault();
//     console.log(e);
//     // const email = document.forms['login']['email'].value;
//     const email = document.forms.login.email.value;
//     const password = document.forms.login.password.value;
//     console.log(email, "\n", password);
// }



// to display the error message

// function handleSubmit(e){
//     e.preventDefault();
//     console.log(e);
//     // const email = document.forms['login']['email'].value;
//     const email = document.forms.login.email;
//     const password = document.forms.login.password;

//     const emailValue = email.value;
//     const passwordValue = password.value;

//     if(passwordValue.length < 6){
//         password.style.border = '1px solid red';
//         password.nextElementSibling.classList.remove('d-none');
//     }
//     if(emailValue.length < 6){
//         email.style.border = '1px solid red';
//         email.nextElementSibling.classList.remove('d-none');
//     }

//     if(passwordValue.length >= 6){
//         password.style.border = '1px solid gray';
//         password.nextElementSibling.classList.add('d-none');
//     }
//     if(emailValue.length >= 6){
//         email.style.border = '1px solid gray';
//         email.nextElementSibling.classList.add('d-none');
//     }

//     console.log(email, "\n", password);
// }



function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // const email = document.forms['login']['email'].value;

    const age = document.forms.login.age;
    const email = document.forms.login.email;
    const password = document.forms.login.password;


    const ageValue = age.value;
    const emailValue = email.value;
    const passwordValue = password.value;



    if (emailValue.length < 6) {
        email.style.border = '1px solid red';
        email.nextElementSibling.classList.remove('d-none');
    }

    if (ageValue <= 18) {
        age.style.border = '1px solid red';
        age.nextElementSibling.classList.remove('d-none');
    }

    const ageErrorDisplay = age.nextElementSibling;
    if (ageValue.length < 6) {
        age.style.border = '1px solid red';
        age.nextElementSibling.classList.remove('d-none');
        ageErrorDisplay.innerHTML += '<li>Minimum age should be at least 18.</li>';
    }

    const passwordErrorDisplay = password.nextElementSibling;
    if (passwordValue.length < 6) {
        password.style.border = '1px solid red';
        password.nextElementSibling.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must be at least 6 character.</li>';
    }

    if (passwordValue.includes('')) {
        password.style.border = '1px solid red';
        password.nextElementSibling.classList.remove('d-none');
        passwordErrorDisplay.innerHTML += '<li>Password must not contgain space.</li>';
    }

    console.log(email, "\n", password);
}