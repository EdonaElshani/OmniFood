let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector("#header");

console.log(navButton);
console.log(navHeader);
// Krijim i nje objekti ne JS // Inline Style
// let result = {firstName: "Edona ", lastName: "Elshani"}
// let firstName = result.firstName;
// let lastName = result.lastName;
// let fullName = firstName + lastName;
// let header = document.querySelector(".hero-description .primary-header");

// let dbFullName;
// header.addEventListener("mouseover", function () { //mouseover means hover
//   header.textContent = fullName;
//   header.style.backgroundColor = "pink";
//   header.style.padding = "2rem";
//   dbFullName=header.textContent;
//   console.log(dbFullName);
// })
//

navButton.addEventListener("click", function () {
  navHeader.classList.toggle("open-nav");
});

let dataFooter = document.querySelector(".year");
let dataAktuale = new Date().getFullYear();

dataFooter.textContent = dataAktuale;

let btnTransition=document.querySelector("#btn-start-eating");

btnTransition.addEventListener("click", function(){
btnTransition.classList.toggle("btn-transition");
});
