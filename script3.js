let drip = document.createElement("div")
let IMG = document.createElement('img');
IMG.src = "drip.png";
let Anchor = document.createElement("a");
Anchor.href = "supreme.html";
let Name = document.createElement("p");
let Price = document.createElement("p");
let clothes = document.querySelector(".displayClothes");
Name.innerHTML = "The One Above All";
Price.innerHTML = "$9,999.99";
Name.id = "Name";
Price.id = "Price";
clothes.appendChild(drip);
drip.appendChild(Anchor);
Anchor.appendChild(IMG);
drip.appendChild(Name);
drip.appendChild(Price);

let drip5 = document.createElement("div")
let IMG5= document.createElement('img');
IMG5.src = "Gshoes.png";
let Anchor5 = document.createElement("a");
Anchor5.href = "gokushoes.html";
let Name5 = document.createElement("p");
let Price5 = document.createElement("p");
Name5.innerHTML = "Adidas X Dragon Ball Z ZX500 RM Goku";
Price5.innerHTML = "$173.00";
Name5.id = "Name";
Price5.id = "Price";
clothes.appendChild(drip5);
drip5.appendChild(Anchor5);
Anchor5.appendChild(IMG5);
drip5.appendChild(Name5);
drip5.appendChild(Price5);

let drip2 = document.createElement("div")
let IMG2 = document.createElement('img');
IMG2.src = "akatsuki.png";
let Anchor2 = document.createElement("a");
Anchor2.href = "akatsukico.html";
let Name2 = document.createElement("p");
let Price2 = document.createElement("p");
Name2.innerHTML = "Primitive x Naruto Akatasuki Tee - Black";
Price2.innerHTML = "$23.99";
Name2.id = "Name";
Price2.id = "Price";
clothes.appendChild(drip2);
drip2.appendChild(Anchor2);
Anchor2.appendChild(IMG2);
drip2.appendChild(Name2);
drip2.appendChild(Price2);

let drip1 = document.createElement("div")
let IMG1 = document.createElement('img');
IMG1.src = "mui.png";
let Anchor1 = document.createElement("a");
Anchor1.href = "muigoku.html";
let Name1 = document.createElement("p");
let Price1 = document.createElement("p");
Name1.innerHTML = "MUI Goku Short Sleeve";
Price1.innerHTML = "$59.99";
Name1.id = "Name";
Price1.id = "Price";
clothes.appendChild(drip1);
drip1.appendChild(Anchor1);
Anchor1.appendChild(IMG1);
drip1.appendChild(Name1);
drip1.appendChild(Price1);

let drip3 = document.createElement("div")
let IMG3 = document.createElement('img');
IMG3.src = "pain.png";
let Anchor3 = document.createElement("a");
Anchor3.href = "bigpain.html";
let Name3 = document.createElement("p");
let Price3 = document.createElement("p");
Name3.innerHTML = "Pain Short Sleeve";
Price3.innerHTML = "$59.99";
Name3.id = "Name";
Price3.id = "Price";
clothes.appendChild(drip3);
drip3.appendChild(Anchor3);
Anchor3.appendChild(IMG3);
drip3.appendChild(Name3);
drip3.appendChild(Price3);

let drip4 = document.createElement("div")
let IMG4= document.createElement('img');
IMG4.src = "shenron.png";
let Anchor4 = document.createElement("a");
Anchor4.href = "shenroon.html";
let Name4 = document.createElement("p");
let Price4 = document.createElement("p");
Name4.innerHTML = "Adidas X Dragon Ball Z Support Mid- ADV Primeknit 'Shenron'";
Price4.innerHTML = "$203.99";
Name4.id = "Name";
Price4.id = "Price";
clothes.appendChild(drip4);
drip4.appendChild(Anchor4);
Anchor4.appendChild(IMG4);
drip4.appendChild(Name4);
drip4.appendChild(Price4);

function myFunction() {
    var x = document.getElementById("nav_div");
    if (x.className === "nav_div") {
      x.className += " responsive";
    } else {
      x.className = "nav_div";
    }
  }