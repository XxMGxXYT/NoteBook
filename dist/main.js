"use strict";
// [1] Search for "Textarea Element".
let mainNote = document.getElementById("note");
let Notes = document.getElementById("notes");
let AddButton = document.getElementById("add");
function createNote() {
    /* #1 Create elements */
    // The div that contains the note and the buttons
    let theNote = document.createElement("div");
    theNote.classList.add("TheNote");
    // The div that contains the note
    let Note = document.createElement("textarea");
    Note.value = (mainNote.value);
    Note.classList.add("Childnote");
    // The div that contains the buttons
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    // Update button
    let update = document.createElement("div");
    let UpText = document.createTextNode("update");
    update.appendChild(UpText);
    update.classList.add("update");
    // delete button
    let remove = document.createElement("div");
    let DeText = document.createTextNode("delete");
    remove.appendChild(DeText);
    remove.classList.add("delete");
    /* #1 Create elements */
    /* #2 Add all elements for their parents */
    // Add "note" div to "TheNote" div
    theNote.append(Note);
    // Add "update" and "delete" buttons to "buttons" div
    buttons.append(update);
    buttons.append(remove);
    // Add "buttons" div to "TheNote" div
    theNote.append(buttons);
    /* #2 Add all elements for their parents */
    /* #3 Return the main div */
    Notes.append(theNote);
    /* #3 Return the main div */
}
function classNote(div) {
    div.classList.add("note");
}
function Editable(div) {
    div.setAttribute("contenteditable", "true");
}
function UnEditable(div) {
    div.setAttribute("contenteditable", "false");
}
function getClone() {
    createNote();
}
AddButton.onclick = () => getClone();
//# sourceMappingURL=main.js.map