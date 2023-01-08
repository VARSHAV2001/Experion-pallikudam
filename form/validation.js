function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    const fname = document.forms.login.fname;
    const lname = document.forms.login.lname;
    const email = document.forms.login.email;
    const password = document.forms.login.password;
    const confirmPass = document.forms.login.confirmPass;
    const mobile = document.forms.login.mobile;
    const dob = document.forms.login.dob;


    const fnameValue = fname.value;
    const lnameValue = lname.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPassValue = confirmPass.value;
    const mobileValue = mobile.value;
    const dobValue = dob.value;



    if (fnameValue.length <= 2) {
        fname.style.border = '1px solid red';
        fname.nextElementSibling.classList.remove('d-none');
    } else {
        fname.style.border = '1px solid grey';
        fname.nextElementSibling.classList.add('d-none');
    }


    if (lnameValue.length <= 2) {
        lname.style.border = '1px solid red';
        lname.nextElementSibling.classList.remove('d-none');
    } else {
        lname.style.border = '1px solid grey';
        lname.nextElementSibling.classList.add('d-none');
    }

    if (emailValue.length < 3) {
        email.style.border = '1px solid red';
        email.nextElementSibling.classList.remove('d-none');
    } else {
        email.style.border = '1px solid grey';
        email.nextElementSibling.classList.add('d-none');
    }

    const passwordErrorDisplay = password.nextElementSibling;
    if (passwordValue == false) {
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
    }
    else {
        password.style.border = '1px solid grey';
        password.nextElementSibling.classList.add('d-none');
    }

    const confirmPassErrorDisplay = confirmPass.nextElementSibling;
    if (confirmPassValue != passwordValue) {
        confirmPass.style.border = '1px solid red';
        confirmPass.nextElementSibling.classList.remove('d-none');
        confirmPassErrorDisplay.innerHTML += '<li>Password is wrong.</li>';
    }

    else {
        confirmPass.style.border = '1px solid grey';
        confirmPass.nextElementSibling.classList.add('d-none');
    }
    if (mobileValue.length < 10) {
        mobile.style.border = '1px solid red';
        mobile.nextElementSibling.classList.remove('d-none');
    } else {
        mobile.style.border = '1px solid grey';
        mobile.nextElementSibling.classList.add('d-none');
    }

    if (dobValue == null || dobValue == '') {
        dob.style.border = '1px solid red';
        dob.nextElementSibling.classList.remove('d-none');
    } else {
        dob.style.border = '1px solid grey';
        dob.nextElementSibling.classList.add('d-none');
    }


    console.log(fname, lname, email, password, confirmPass, mobile, dob);
}