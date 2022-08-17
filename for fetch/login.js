document.querySelector("form").addEventListener("submit", login);
let sign = JSON.parse(localStorage.getItem("users"));
function login(e) {
  e.preventDefault();
  if (!sign) {
    alert("Create an Account First");
  }
  let form = document.querySelector("form");

  let email = form.email.value;
  let password = form.password.value;

  // let obj = {
  //   email: email,
  //   password: password,
  // };
  // console.log(obj[email]);
  let flag = false;
  for (let i = 0; i < sign.length; i++) {
    if (email == sign[i].email && password == sign[i].password) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  let r = [];
  let btne = document.getElementById("btne");
  if (flag == true) {
    r.push(email, password);
    localStorage.setItem("emaily", JSON.stringify(r));
    alert("Login successful!");
    window.location.href="./index.html"
  } else {
    alert("Wrong credentials");
  }
}
