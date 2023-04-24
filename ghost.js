/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID

document.getElementById("first_ghost").style.fill = "orange";

// GET BY CLASSNAME

const domref = document.getElementsByClassName("second_wave");

for (const element of domref) {
  element.style.fill = "blue";
}

// GET AREA, DRILL DOWN using GET BY TAG NAME

const area = document.getElementById("area-51");

const area51 = area.getElementsByTagName("svg");

for (const element of area51) {
  element.style.fill = "green";
}

// querySelector nth-child

const nth = document.querySelector(
  "body > .outer > #area-51 > svg:nth-child(3)"
);

nth.setAttribute("stroke", "red");
nth.setAttribute("stroke-width", "15px");

// from the last child, select the div immediately above the ghost and make its border '5px dashed'

const border = nth.parentElement;

border.style.border = "5px dashed";

// querySelectorAll

const allGhosts = document.querySelector("#area-50");
const redGhosts = allGhosts.querySelectorAll("svg");

for (const element of redGhosts) {
  element.style.fill = "red";
}
