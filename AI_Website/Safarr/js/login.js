function validation_fp() {
  let femail = document.getElementById("femail").value;

  let femail_error = document.getElementById("femail_error").innerHTML;

  if (femail === "") {
    document.getElementById("femail_error").innerHTML =
      "*Please enter your email!";
    isubmit = false;

    setTimeout(function () {
      document.getElementById("femail_error").innerHTML = "";
    }, 5000);
  } else if (!validateEmail(femail)) {
    document.getElementById("femail_error").innerHTML =
      "*Please enter a valid email!";
    isubmit = false;
    setTimeout(function () {
      document.getElementById("femail_error").innerHTML = "";
    }, 5000);
  } else {
    alert("Registration successful");
    isubmit = true;
  }
}

function validation_in() {
  let lemail = document.getElementById("lemail").value;
  let lpass = document.getElementById("lpass").value;

  let lemail_error = document.getElementById("lemail_error").innerHTML;
  let lpass_error = document.getElementById("lpass_error").innerHTML;

  var isubmit = true;

  if (lemail === "" || lpass === "") {
    if (lemail === "") {
      document.getElementById("lemail_error").innerHTML =
        "*Please enter your email!";
      isubmit = false;

      setTimeout(function () {
        document.getElementById("lemail_error").innerHTML = "";
      }, 5000);
    }
    if (lpass === "") {
      document.getElementById("lpass_error").innerHTML =
        "*Please enter your password!";
      isubmit = false;

      setTimeout(function () {
        document.getElementById("spass_error").innerHTML = "";
      }, 5000);
    }
  } else if (
    !validateEmail(lemail) ||
    !validatePassword(lpass) ||
    lpass.length < 8
  ) {
    if (!validateEmail(lemail)) {
      document.getElementById("lemail_error").innerHTML =
        "*Please enter a valid email!";
      isubmit = false;
      setTimeout(function () {
        document.getElementById("lemail_error").innerHTML = "";
      }, 5000);
    }
    if (!validatePassword(lpass)) {
      document.getElementById("lpass_error").innerHTML =
        "*Password needs a num, letter & symbol";
      isubmit = false;
      setTimeout(function () {
        document.getElementById("lpass_error").innerHTML = "";
      }, 5000);
    }
    if (lpass.length < 8) {
      document.getElementById("lpass_error").innerHTML =
        "*Password 8>= characters!";
      isubmit = false;
      setTimeout(function () {
        document.getElementById("lpass_error").innerHTML = "";
      }, 5000);
    }
  } else {
    alert("Registration successful");
    isubmit = true;
  }
}

function validation_sign() {
  let semail = document.getElementById("semail").value;
  let spassword = document.getElementById("spassword").value;
  let sconfpassword = document.getElementById("sconfpassword").value;

  let semail_error = document.getElementById("semail_error").innerHTML;
  let spass_error = document.getElementById("spass_error").innerHTML;
  let sconpass_error = document.getElementById("sconpass_error").innerHTML;
  var issubmit = true;

  // console.log(semail_error + " " + spass_error + " " + sconpass_error + " ");

  if (semail === "" || spassword === "" || sconfpassword === "") {
    if (semail === "") {
      document.getElementById("semail_error").innerHTML =
        "*Please enter your email!";
      issubmit = false;

      setTimeout(function () {
        document.getElementById("semail_error").innerHTML = "";
      }, 5000);
      // alert("Please enter your email");
    }
    if (spassword === "") {
      document.getElementById("spass_error").innerHTML =
        "*Please enter your password!";
      issubmit = false;

      setTimeout(function () {
        document.getElementById("spass_error").innerHTML = "";
      }, 5000);

      // alert("Please enter your password");
    }
    if (sconfpassword === "") {
      document.getElementById("sconpass_error").innerHTML =
        "*Please enter your confirm password!";
      issubmit = false;

      setTimeout(function () {
        document.getElementById("sconpass_error").innerHTML = "";
      }, 5000);
      // alert("Please enter your confirm password");
    }
  } else if (
    !validateEmail(semail) ||
    !validatePassword(spassword) ||
    spassword.length < 8 ||
    sconfpassword !== spassword
  ) {
    if (!validateEmail(semail)) {
      document.getElementById("semail_error").innerHTML =
        "*Please enter a valid email!";
      issubmit = false;
      setTimeout(function () {
        document.getElementById("semail_error").innerHTML = "";
      }, 5000);

      // alert("Please enter a valid email");
    }
    if (!validatePassword(spassword)) {
      document.getElementById("spass_error").innerHTML =
        "*Password needs a num, letter & symbol";
      issubmit = false;
      setTimeout(function () {
        document.getElementById("spass_error").innerHTML = "";
      }, 5000);

      // alert("Password must contain at least one number, one alphabet, and one special character");
    }
    if (spassword.length < 8) {
      document.getElementById("spass_error").innerHTML =
        "*Password 8>= characters!";
      issubmit = false;
      setTimeout(function () {
        document.getElementById("spass_error").innerHTML = "";
      }, 5000);

      // alert("Password must be at least 8 characters");
    }
    if (sconfpassword !== spassword) {
      document.getElementById("sconpass_error").innerHTML =
        "*Confirm password does not match!";
      issubmit = false;

      setTimeout(function () {
        document.getElementById("sconpass_error").innerHTML = "";
      }, 5000);
      // alert("Confirm password does not match");
    }
  } else {
    alert("Registration successful");
    issubmit = true;
  }
}

function validatePassword(password) {
  var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return re.test(password);
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  signupBtn2 = document.querySelector(".signup2"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

const forgetForm = document.querySelector(".forget_form");
const forgetLink = document.querySelector(".forgot_pw");


const forgetCloseBtn = document.querySelector(".form_close");

forgetCloseBtn.addEventListener("click", () => {
  forgetForm.classList.remove("active");
});


signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  document.querySelector(".login_form").style.display = "none";
  document.querySelector(".signup_form").style.display = "block";
  document.querySelector(".forget_form").style.display = "none";
});

signupBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  document.querySelector(".login_form").style.display = "none";
  document.querySelector(".signup_form").style.display = "block";
  document.querySelector(".forget_form").style.display = "none";
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
  document.querySelector(".login_form").style.display = "block";
  document.querySelector(".signup_form").style.display = "none";
  document.querySelector(".forget_form").style.display = "none";
});


forgetLink.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  document.querySelector(".login_form").style.display = "none";
  document.querySelector(".signup_form").style.display = "none";
  document.querySelector(".forget_form").style.display = "block";
});