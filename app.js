const closedWeb = document.querySelector(".closed");
const openWeb = document.querySelector(".open");

closedWeb.addEventListener("click", () => {
  if (openWeb.classList.contains("open")) {
    openWeb.classList.add("active");
    closedWeb.classList.remove("active");
  }
});

openWeb.addEventListener("click", () => {
  if (closedWeb.classList.contains("closed")) {
    closedWeb.classList.add("active");
    openWeb.classList.remove("active");
  }
});

///////////////////////////////

let person = [
  {
    name: "Pizza",
    price: "12",
  },

  {
    name: "Hotdog",
    price: "4",
  },

  {
    name: "Burger",
    price: "8",
  },

  {
    name: "Tacos",
    price: "10",
  },
];
const food = document.querySelector("#food");

let compressed = person.map(function (item) {
  return item.name + "" + "is " + item.price;
});

food.innerHTML = compressed.join("\n");
