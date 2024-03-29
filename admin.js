// Åbner og lukker burger menu
function openBurger() {
  var burgerMenu = document.getElementById("burgerContent");
  burgerMenu.classList.toggle("open");
}
// Admin side
function addMarker() {
  let nameInput = document.getElementById("inputName");
  let dateInput = document.getElementById("inputDate");
  let coordsinput = document.getElementById("inputCoords");
  let name = document.getElementById("inputName").value;
  let date = document.getElementById("inputDate").value;
  let coords = document.getElementById("inputCoords").value;
  if (name.length != 0 && date.length != 0 && coords.length != 0) {
    let coordSplit = coords.split(",");
    let divMaker =
      `<div class="contentBox">
  <h1>` +
      name +
      `</h1>
  <h3>` +
      date +
      `<h3>
  <a href="profilsideFRA.html" target="_blank">Læs mere</a>
</div>`;
    var newMarker = [coordSplit[0], coordSplit[1], divMaker, name];
    sessionStorage.setItem(
      "Navn: " + JSON.stringify(newMarker[3]),
      JSON.stringify(newMarker)
    );
    nameInput.value = "";
    dateInput.value = "";
    coordsinput.value = "";
    let backtoMap = document.getElementById("backtoMapAdmin");
    backtoMap.style.display = "block";
  } else {
    alert("Udfyld alle felterne");
  }
}
