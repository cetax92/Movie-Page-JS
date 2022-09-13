let sveUkupno = 0;

function klickGledaj(kartica) {
  let glavnaKartica = kartica.closest(".film");
  let cijenaFilma = glavnaKartica.querySelector(".cijena").innerText;
  let imeFilma = glavnaKartica.querySelector("h4").innerText;
  let pogledano = glavnaKartica.querySelector("input");
  let ukupniRacun = document.querySelector(".racunFilmova");
  let film = document.getElementsByClassName("film");
  if (kartica === true) {
  } else {
    cijenaFilma = cijenaFilma.substring(1);
    cijenaFilma = parseInt(cijenaFilma);

    sveUkupno += cijenaFilma;
    document.querySelector(
      ".racunFilmova"
    ).innerHTML = `Your total bill: €${sveUkupno}`;

    kartica.innerText = "Pogledano";
    kartica.setAttribute("disabled", "disabled");
  }
}

// Klikom dugmeta izvrisi funkciju smanjenje opacity kartice
let dugme1 = document.getElementById("dugmeFilm1");
dugme1.addEventListener("click", funkcija1);

function funkcija1() {
  document.getElementById("karticaPrviFilm").style.opacity = "0.3";
}

let dugme2 = document.getElementById("dugmeFilm2");
dugme2.addEventListener("click", funkcija2);
function funkcija2() {
  document.getElementById("karticaDrugiFilm").style.opacity = "0.3";
}

let dugme3 = document.getElementById("dugmeFilm3");
dugme3.addEventListener("click", funkcija3);
function funkcija3() {
  document.getElementById("karticaTreciFilm").style.opacity = "0.3";
}
