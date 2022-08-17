import navbar from "../navjs/nav.js";
document.getElementById("navbar").innerHTML = navbar();

let login = JSON.parse(localStorage.getItem("emaily"));
let changeit = document.getElementById("changeit");
if (login) {
  changeit.innerText = "LOG-OUT";
}

changeit.addEventListener("click", logouttt);
function logouttt() {
  if (changeit.innerText == "LOGIN") {
    window.location.href = "login.html";
  } else if ((changeit.innerText = "LOG-OUT")) {
    localStorage.removeItem("emaily");
    localStorage.removeItem("admin");
    window.location.reload();
  }
}
