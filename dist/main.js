"use strict";
// [1] Search for "Textarea Element".
let mainNote = document.getElementById("note");
let Notes = document.getElementById("notes");
let AddButton = document.getElementById("add");
let theNoteDivs = document.querySelectorAll(".TheNote");
var yes = false;
function createNote() {
    /* #1 Create elements */
    // The div that contains the note and the buttons
    let theNote = document.createElement("div");
    theNote.classList.add("TheNote");
    // The div that contains the note
    let Note = document.createElement("textarea");
    Note.value = (mainNote.value);
    Note.classList.add("Childnote");
    Note.setAttribute("readonly", "true");
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
    // Add "update" and "delete" buttons to "TheNote" div
    theNote.append(update);
    theNote.append(remove);
    /* #2 Add all elements for their parents */
    /* #3 Return the main div */
    Notes.append(theNote);
    /* #3 Return the main div */
    yes = true;
}
function getClone() {
    createNote();
    let deleteButton = document.querySelectorAll(".delete");
    if (yes) {
        deleteButton.forEach(function (e) {
            e.addEventListener("click", () => { var _a; return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.remove(); });
        });
    }
    // let updateButton = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".update")
    // let note = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".Childnote")
    // if(yes){
    //     note.forEach(function(n){
    //     })
    // }
}
AddButton.addEventListener("click", () => getClone());
//# sourceMappingURL=main.js.map