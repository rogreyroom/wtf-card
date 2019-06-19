const great = document.querySelector(".hello--js");
const hi = document.querySelector(".hi--js");

const hello = (name, age) => {
  return `Miło Cię poznać.<br>
    ${name}. O! masz ${age} lat.<br>
    ${age > 31 ? "Ja mam nieco mniej." : "Ja mam nieco więcej."}`;
};

const ask = () => {
  name = prompt("Jak masz na imię?");
  age = prompt("Ile masz lat?");

  great.innerHTML = hello(name, age);
  great.classList.add("hello--active");
};

const greatOff = () => {
  great.innerHTML = "";
  great.classList.remove("hello--active");
};

hi.addEventListener("click", ask);
great.addEventListener("click", greatOff);
