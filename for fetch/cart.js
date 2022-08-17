let order = JSON.parse(localStorage.getItem("orders"));
console.log(order);
let price = [];

let append = () => {
  let show = document.getElementById("check");
  show.innerHTML = "";
  order.map((el, i) => {
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    let h3 = document.createElement("h3");
    h3.innerText = el.strMeal;
    let p = document.createElement("p");
    p.innerText = Math.floor(Math.random() * 50 + 20);
    p.style.color = "red";
    p.style.fontWeight = "bolder";
    p.style.fontSize = "21px";
    price.push(p);

    let div = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.style.padding = "8px";
    btn.style.cursor = "pointer";
    btn.addEventListener("click", function () {
      order.splice(i, 1);
      localStorage.setItem("orders", JSON.stringify(order));
      div.remove();
      window.location.reload();
    });
    div.append(img, h3, p, btn);
    show.append(div);
  });
};
append();

console.log(price);

let pricetag = () => {
  let totalP = document.getElementById("totalM");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += Number(price[i].innerText);
  }
  console.log(sum);
  totalP.innerText = sum;
};
pricetag();

let pay = document.getElementById("pay");
function check_payment() {
  pay.onclick = () => {
    let login = JSON.parse(localStorage.getItem("emaily"));
    if (!login) {
      alert("Login first");
      window.location.href = "./login.html";
    } else {
      window.location.href = "./checkout.html";
    }
  };
}

check_payment();
