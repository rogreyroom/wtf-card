const great = document.querySelector(".hello--js");
const hi = document.querySelector(".hi--js");

const hello = (name, age) => `Miło Cię poznać.<br>
                             ${name}. O! Twój wiek to ${age}.<br>
                             ${
                               age > 41
                                 ? "Mój jest nieco mniejszy."
                                 : "Mój jest nieco większy."
                             }`;

const helloName = name => `Miło Cię poznać! ${name}`;

const helloAge = age => `Miło Cię poznać nieznajomy! <br>
                         Więc Twój wiek to ${age}. <br>
                         ${
                           age > 41
                             ? "Mój jest nieco mniejszy."
                             : "Mój jest nieco większy."
                         }`;

const ask = () => {
  let name, nameValue;
  let age, ageValue;
  name = prompt("Jak masz na imię?");
  age = Number(prompt("Ile masz lat?"));

  if (name === null || name.trim() === "") {
    nameValue = false;
  } else {
    nameValue = name.charAt(0).toUpperCase() + name.slice(1);
  }

  if (age === 0 || isNaN(age)) {
    ageValue = false;
  } else {
    ageValue = age;
  }

  if (nameValue !== false && ageValue !== false) {
    great.innerHTML = hello(nameValue, ageValue);
    great.classList.add("hello--active");
  } else if (nameValue !== false && ageValue === false) {
    great.innerHTML = helloName(nameValue);
    great.classList.add("hello--active");
  } else if (nameValue === false && ageValue !== false) {
    great.innerHTML = helloAge(ageValue);
    great.classList.add("hello--active");
  } else {
    great.innerHTML = `Witaj nieznajomy.`;
    great.classList.add("hello--active");
  }
};

const greatOff = () => {
  great.innerHTML = "";
  great.classList.remove("hello--active");
};

hi.addEventListener("click", ask);
great.addEventListener("click", greatOff);
