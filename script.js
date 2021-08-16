let Ichigo = document.createElement("div")
let IchigoImage = document.createElement('img');
IchigoImage.src = "Ichigo.jpg";
let IchigoAnchor = document.createElement("a");
IchigoAnchor.href = "http://127.0.0.1:5501/index2.html";
let IchigoName = document.createElement("p");
let products = document.querySelector(".displayProduct");
let IchigoPrice = document.createElement("p");
IchigoName.innerHTML = "BLEACH: ICHIGO KUROSAKI 1/6 SCALE PREMIUM STATUE";
IchigoPrice.innerHTML = "$699";
IchigoName.id = "IchigoName";
IchigoPrice.id = "IchigoPrice"
products.appendChild(Ichigo);
Ichigo.appendChild(IchigoAnchor);
IchigoAnchor.appendChild(IchigoImage);


Ichigo.appendChild(IchigoName);
Ichigo.appendChild(IchigoPrice);

let DBZ = document.createElement("div")
DBZ.href = "http://127.0.0.1:5501/index3.html";
let GokuImage = document.createElement('img');
GokuImage.src = "DBZ.jpg";
let GokuAnchor = document.createElement('a');
GokuAnchor.href = "http://127.0.0.1:5501/index3.html";
let GokuName = document.createElement("p");
let GokuPrice = document.createElement("p");
GokuName.innerHTML = "1/6 Scale Super Saiyan 3 Son Goku - Dragon Ball Resin Statue";
GokuPrice.innerHTML = "$349";
GokuName.id = "GokuName"
GokuPrice.id = "GokuPrice"
products.appendChild(DBZ);
GokuAnchor.appendChild(GokuImage);
DBZ.appendChild(GokuAnchor);
DBZ.appendChild(GokuName);
DBZ.appendChild(GokuPrice);
let Shinra = document.createElement("div")
let shinraimg = document.createElement("img")
shinraimg.src = "shinra.jpg";
let myVar = document.createElement('a');
myVar.href = "http://127.0.0.1:5501/index4.html";
let ShinraName = document.createElement("p");
let ShinraPrice = document.createElement("p");
ShinraName.innerHTML = "Fire Force ArtFX J Shinra Kusakabe Statue";
ShinraPrice.innerHTML = "$127";
ShinraName.id = "ShinraName"
ShinraPrice.id = "ShinraPrice"
products.appendChild(Shinra);
myVar.appendChild(shinraimg);
myVar.appendChild(ShinraName);
myVar.appendChild(ShinraPrice);
Shinra.appendChild(myVar);
Shinra.appendChild(ShinraName);
Shinra.appendChild(ShinraPrice);


