let fetched = JSON.parse(localStorage.getItem("dishes"));
// console.log(fetched);
let price = [];
let append = (fetched) => {
  let box = document.getElementById("box");
  if (!fetched) {
    let img2 = document.createElement("img")
    img2.src = "no.png"
    box.append(img2)
  }
  fetched.map((el) => {
    
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    let h2 = document.createElement("h2");
    h2.innerText = el.strMeal;
    let btn = document.createElement("button");
    btn.innerText = "Order";
    btn.setAttribute("class", "ok");
    let div = document.createElement("div");
    btn.onclick = () => {
      checkout(el);
    };
    let p = document.createElement("p");
    p.innerText = "Price : " + Math.floor(Math.random() * 80 + 24) + "Rs";
    price.push(p);
    div.append(img, h2, btn, p);
    box.append(div);
  });
};
append(fetched);
let checkout = (fetched) => {
  let arr = JSON.parse(localStorage.getItem("orders")) || [];
  arr.push(fetched);
  localStorage.setItem("orders", JSON.stringify(arr));
  //   window.location.href = "./checkout.html";
};

//  box.append(img)
