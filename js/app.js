let form = document.querySelector("form");
let inputCreat = document.querySelector("input");
let ulList = document.querySelector("ul");
let btnAdd = document.querySelector(".card__btn__add");
let btnClearAll = document.querySelector(".card__btn-claer-all");
let couterSpan = document.querySelector("span");
let number = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let newLiList = document.createElement("li");
  let newBtnUlList = document.createElement("button");
  let newBtnDelete = document.createElement("button");
  let hr = document.createElement("hr");
  let img = document.createElement("img");

  newLiList.textContent = inputCreat.value;
  inputCreat.value = "";

  ulList.appendChild(newLiList);
  newLiList.prepend(newBtnUlList);
  newLiList.appendChild(newBtnDelete);
  newLiList.appendChild(hr);
  newBtnUlList.appendChild(img);

  if (newLiList.textContent == "") {
    newLiList.remove();
    inputCreat.setAttribute("placeholder", "Create a new todo…");
    form.classList.add("input-pleashlder");
  } else {
    inputCreat.setAttribute("placeholder", "Create a new todo…");
    form.classList.remove("input-pleashlder");
  }
  newLiList.classList.add("card__list__item");
  newBtnUlList.classList.add("card__list__item__btn");
  newBtnDelete.classList.add("card__list__item__delete");

  newBtnDelete.textContent = "✖";

  let cardListItemBtn = document.querySelectorAll(".card__list__item__btn");
  cardListItemBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("card__text-decoration");
    });
  });
  let cardBtnDelete = document.querySelectorAll(".card__list__item__delete");
  cardBtnDelete.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();

      number = ulList.children.length;
      couterSpan.textContent = number;
    });
  });

  number = ulList.children.length;
  couterSpan.textContent = number;
});

btnClearAll.addEventListener("click", () => {
  Array.from(ulList.children).forEach((li) => {
    li.remove();
    number = ulList.children.length;
    couterSpan.textContent = number;
  });
});
