// [1] Search for "Textarea Element".

let mainNote = <HTMLTextAreaElement> document.getElementById("note")
let Notes = <HTMLDivElement> document.getElementById("notes")
let AddButton = <HTMLDivElement> document.getElementById("add")
let theNoteDivs = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".TheNote")



var yes: boolean = false

function createNote(): void{
    /* #1 Create elements */
    // The div that contains the note and the buttons
    let theNote = <HTMLDivElement> document.createElement("div")
    theNote.classList.add("TheNote")
    // The div that contains the note
    let Note = <HTMLTextAreaElement> document.createElement("textarea")
    Note.value = (mainNote.value)
    Note.classList.add("Childnote")
    Note.setAttribute("readonly", "true")
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
    // Add "update" and "delete" buttons to "TheNote" div
    theNote.append(update)
    theNote.append(remove)
    /* #2 Add all elements for their parents */
    /* #3 Return the main div */
    Notes.append(theNote)
    /* #3 Return the main div */
    yes = true
}


function getClone(): void{
    createNote()
    let deleteButton = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".delete")
    if(yes){
        deleteButton.forEach(function(e: HTMLDivElement){
            e.addEventListener("click", () => e.parentElement?.remove())
        })
    }
    // let updateButton = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".update")
    // let note = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".Childnote")
    // if(yes){
    //     note.forEach(function(n){
            
    //     })
    // }
}

AddButton.addEventListener("click", () => getClone())