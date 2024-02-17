"use strict";
// [1] Search for "Textarea Element" => ("Solved")
// [2] saveArray and textAreaArray, not the same length => ("Solved")
// [3] Make update button works after localstorage job
// [4] Make delete button works after localstorage job => ("Solved")
// [5] Make save button works after localstorage job
// [6] Make cancel button works before and after localstorage job
// [7] If note added without refresh the page, delete button will delete more than expected
let mainNote = document.getElementById("note");
let Notes = document.getElementById("notes");
let AddButton = document.getElementById("add");
let theNoteDivs = document.querySelectorAll(".TheNote");
var yes = false;
let counter = 0;
// Empty array for saving mainNote values
let emptyArray = [];
// If there is value in the localstorage
if (localStorage.getItem("notes")) {
    // Change the old values of "emptyArray" to the "emptyArray" in the localstorage
    emptyArray = JSON.parse(localStorage.getItem("notes"));
    // Make a note for each value in the "emptyArray"
    emptyArray.forEach((e) => {
        createNote().children[0].value = e;
    });
    // Make other buttons work
    buttons();
}
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
    // Add "theNote" to "Notes" div
    Notes.append(theNote);
    /* #2 Add all elements for their parents */
    /* #3 Set some values and return the finall note div */
    // Set the mainNote empty again after a note created
    mainNote.value = "";
    // Increase counter value
    counter += 1;
    // Set "yes" variable value to "true"
    yes = true;
    // Return the finall note div
    return theNote;
    /* #3 Set some values and return the finall note div */
}
function buttons() {
    let deleteButton = document.querySelectorAll(".delete");
    if (yes) {
        deleteButton.forEach(function (e) {
            e.addEventListener("click", () => {
                var _a;
                // Deleting item from emptyArray, and set the new emptrArray values to localstorage
                emptyArray.splice(emptyArray.indexOf((_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.children[0].value), 1);
                localStorage.setItem("notes", JSON.stringify(emptyArray));
                // Deleting note from the page
                setTimeout(() => { var _a; return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.remove(); }, 300);
            });
        });
    }
    let arr3 = [];
    for (let i = 0; i < deleteButton.length; i++) {
        arr3.push(deleteButton[i]);
    }
    let arr = [];
    let updateButton = document.querySelectorAll(".update");
    for (let i = 0; i < updateButton.length; i++) {
        arr.push(updateButton[i]);
    }
    let arr2 = [];
    let childNote = document.querySelectorAll(".Childnote");
    for (let i = 0; i < updateButton.length; i++) {
        arr2.push(childNote[i]);
    }
    // update button function
    function upButton(ele) {
        ele.addEventListener("click", function () {
            var _a, _b;
            // Make the note editable
            arr2[arr.indexOf(ele)].removeAttribute("readonly");
            // Focus on the note
            arr2[arr.indexOf(ele)].focus();
            // Create "save" and "cancel" Divs
            let saveDiv = document.createElement("div");
            let cancelDiv = document.createElement("div");
            saveDiv.classList.add("save");
            cancelDiv.classList.add("cancel");
            // Create "save" and "cancel" Icons
            let saveButtons = document.createElement("i");
            let cancelButtons = document.createElement("i");
            saveButtons.classList.add("fa-solid");
            cancelButtons.classList.add("fa-solid");
            saveButtons.classList.add("fa-check");
            cancelButtons.classList.add("fa-x");
            // Add icons to "save" and "cancel" Divs
            saveDiv.appendChild(saveButtons);
            cancelDiv.appendChild(cancelButtons);
            // Add buttons to "TheNote" div
            (_a = ele.parentElement) === null || _a === void 0 ? void 0 : _a.append(saveDiv);
            (_b = ele.parentElement) === null || _b === void 0 ? void 0 : _b.append(cancelDiv);
            // Get all "save" buttons
            let save = document.querySelectorAll(".save");
            // Get all "cancel" buttons
            let cancel = document.querySelectorAll(".cancel");
            save.forEach(function (e) {
                e.addEventListener("click", function () {
                    var _a, _b, _c, _d;
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
                    // Make Textarea element uneditable
                    (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.children[0].setAttribute("readonly", "true");
                    // Remove Cancel button
                    (_b = e.parentElement) === null || _b === void 0 ? void 0 : _b.children[2].remove();
                    // Add "update" and "delete" buttons to the parent of "save" button
                    (_c = e.parentElement) === null || _c === void 0 ? void 0 : _c.append(update);
                    (_d = e.parentElement) === null || _d === void 0 ? void 0 : _d.append(remove);
                    // Remove Save button
                    e.remove();
                    // restart the main function
                    buttons();
                });
            });
            // Remove "delete" and "update" buttons
            arr3[arr.indexOf(ele)].remove();
            ele.remove();
        });
    }
    updateButton.forEach((e) => upButton(e));
}
AddButton.addEventListener("click", function () {
    // If there is text in the mainNote
    if (mainNote.value !== "") {
        // Add mainNote text to the empty array
        emptyArray.push(mainNote.value);
        // Save array to the localstorage
        localStorage.setItem("notes", JSON.stringify(emptyArray));
        // Create a new note 
        createNote();
        // Make other buttons work
        buttons();
        console.log(`From add button ${emptyArray}`);
    }
    // If the mainNote empty
    else {
        return false;
    }
});
//# sourceMappingURL=main.js.map