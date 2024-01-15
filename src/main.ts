// [1] Search for "Textarea Element".

let mainNote = <HTMLTextAreaElement> document.getElementById("note")
let Notes = <HTMLDivElement> document.getElementById("notes")
let AddButton = <HTMLDivElement> document.getElementById("add")

function createNote(): void{
    /* #1 Create elements */
    // The div that contains the note and the buttons
    let theNote = <HTMLDivElement> document.createElement("div")
    theNote.classList.add("TheNote")
    // The div that contains the note
    let Note = <HTMLTextAreaElement> document.createElement("textarea")
    Note.value = (mainNote.value)
    Note.classList.add("Childnote")
    // The div that contains the buttons
    let buttons = <HTMLDivElement> document.createElement("div")
    buttons.classList.add("buttons")
    // Update button
    let update = <HTMLDivElement> document.createElement("div")
    let UpText: Text = document.createTextNode("update")
    update.appendChild(UpText)
    update.classList.add("update")
    // delete button
    let remove = <HTMLDivElement> document.createElement("div")
    let DeText: Text = document.createTextNode("delete")
    remove.appendChild(DeText)
    remove.classList.add("delete")
    /* #1 Create elements */
    /* #2 Add all elements for their parents */
    // Add "note" div to "TheNote" div
    theNote.append(Note)
    // Add "update" and "delete" buttons to "buttons" div
    buttons.append(update)
    buttons.append(remove)
    // Add "buttons" div to "TheNote" div
    theNote.append(buttons)
    /* #2 Add all elements for their parents */
    /* #3 Return the main div */
    Notes.append(theNote)
    /* #3 Return the main div */
}

function classNote(div: HTMLDivElement): void{
    div.classList.add("note")
}
function Editable(div: HTMLDivElement): void{
    div.setAttribute("contenteditable", "true")
}
function UnEditable(div: HTMLDivElement): void{
    div.setAttribute("contenteditable", "false")
}
function getClone(): void{
    createNote()
}

AddButton.onclick = () => getClone()