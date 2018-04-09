const app = function(){
  //1. Create the parent container ul and its class "cat"
  let ulCat = document.createElement("ul");
  ulCat.classList.add("cat");

  //2. Create the first child - li
  let liCat1 = document.createElement("li");
  liCat1.innerText = 'Name: Ella, Mella and Vella';

  //3. Create the second child - li
  let liCat2 = document.createElement("li");
  liCat2.innerText = 'Favourite food: salmon pate';

  //4. Create the second child and its img - li and img
  let liCat3 = document.createElement("li");
  liCat3.innerHTML = '<img width="500" src=\'./images/LouiseLikesCats.jpg\'>';

  //5. Append the liCat1 to ul
  ulCat.appendChild(liCat1);

  //6. Append the liCat2 to ul
  ulCat.appendChild(liCat2);

  //7. Append the liCat3 to ul
  ulCat.appendChild(liCat3);

  //8. Add cat to the list of cats
    let cats = document.querySelector("#cats");
    cats.appendChild(ulCat);

}
window.onload = app;


//...refactored...
var createUlCat = function () {
  let ulCat = document.createElement("ul");
  ulCat.classList.add("cat");
  return ulCat;
}
var createLiCat1 = function (name) {
  let liCat1 = document.createElement("li");
  liCat1.innerText = 'Name: ' + name;
  return liCat1;
}
var createLiCat2 = function (food) {
  let liCat2 = document.createElement("li");
  liCat2.innerText = 'Favourite food: ' + food;
  return liCat2;
}
var createLiCat3 = function (image) {
  let liCat3 = document.createElement("li");
  liCat3.innerHTML = '<img width="500" src=\'./images/' + image + '\'>';
  return liCat3;
}

appendElements = function(ulCat, liCat1, liCat2, liCat3){
  ulCat.appendChild(liCat1);
  ulCat.appendChild(liCat2);
  ulCat.appendChild(liCat3);
  cats.appendChild(ulCat);
}


var addCat = function(name, food, image) {
  var ulCat = createUlCat();
  var liCat1 = createLiCat1(name);
  var liCat2 = createLiCat2(food);
  var liCat3 = createLiCat3(image);

  appendElements(ulCat, liCat1, liCat2, liCat3);
}

window.onload = function(){
  addCat('Ririka', 'Fish bones', 'cat4.jpg');
  addCat('Ella, Mella and Vella', 'Salmon pate', 'LouiseLikesCats.jpg');
};
