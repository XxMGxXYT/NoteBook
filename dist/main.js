"use strict";
let Note = document.getElementById("note");
let Notes = document.getElementById("notes");
let AddButton = document.getElementById("add");
function classNote(div) {
    div.classList.add("note");
}
function Editable(div) {
    div.setAttribute("contenteditable", "true");
}
function UnEditable(div) {
    div.setAttribute("contenteditable", "false");
}
function getClone(div) {
    let copy = Notes.appendChild(div.cloneNode(true));
    copy.removeAttribute("contenteditable");
}
//# sourceMappingURL=main.js.map