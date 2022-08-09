const judul = document.getElementById("judulParagraf");
const body = document.querySelector("body");
const paragraf = document.getElementById("paragraf");
const judul2 = document.getElementById("judulParagraf2");
const paragraf2 = document.getElementById("paragraf2");
const italicText = document.getElementById("italicText");
const container = document.querySelector(".container");
const btnArea = document.querySelector(".btnArea");
const btnColor = document.querySelector(".btnColor");
const orangeBg = document.querySelector("#orangeBg");
const violetBg = document.querySelector("#violetBg");
const textBtn = document.querySelector(".textBtn")

// Function 
function italic() {
  container.style.fontStyle = "italic";
}
function bold() {
  container.style.fontWeight = "700";
}
function normal() {
  container.style.border = "";
  container.style.fontStyle = "normal";
}
function regular() {
  container.style.fontWeight = "500";
}
function orange() {
  body.style.color = "orange";
}
function violet() {
  body.style.color = "violet";
}

// Style
body.style.fontFamily = "Monospace";
body.style.transition = "all 1s"
body.style.backgroundColor = "navy"
body.style.color = "white"

container.style.textAlign = "center";
container.style.marginTop = "5%";

textBtn.style.marginTop = "5px";

btnArea.style.alignItem = "center";
btnArea.style.display = "flex";
btnArea.style.justifyContent = "space-between";

orangeBg.style.padding = "12px";
orangeBg.style.borderRadius = "100%";
orangeBg.style.backgroundColor = "orange";
orangeBg.style.padding = "12px";
orangeBg.style.borderRadius = "100%";
orangeBg.style.backgroundColor = "orange";

violetBg.style.padding = "12px";
violetBg.style.borderRadius = "100%";
violetBg.style.backgroundColor = "violet";
violetBg.style.padding = "12px";
violetBg.style.borderRadius = "100%";
violetBg.style.backgroundColor = "violet";
// innerHTML
judul.innerHTML = "Apa Itu DOM";
paragraf.innerHTML = "Document Object Model (DOM) merupakan sebuah ketentuan yang dikembangkan oleh W3C untuk berinteraksi dengan objek-objek yang ada di dalam HTML, XML, maupun XHTML.";
judul2.innerHTML = "Belajar DOM";
paragraf2.innerHTML = "DOM bersifat cross-platform dan language-independent, yang artinya DOM dapat digunakan dengan bahasa pemrograman apapun, dalam sistem operasi manapun.";