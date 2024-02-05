// [1] Search for "Textarea Element" ("Solved")
// [2] saveArray and arr2, not the same length

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


function getClone(): void {
    createNote()
    let deleteButton = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".delete")
    if(yes){
        deleteButton.forEach(function(e: HTMLDivElement){
            e.addEventListener("click", () => e.parentElement?.remove())
        })
    }
    let arr3: HTMLDivElement[] = []
    for(let i: number = 0; i < deleteButton.length; i++){
        arr3.push(deleteButton[i])
    }
    let arr: HTMLDivElement[] = []
    let updateButton = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".update")
    for(let i: number = 0; i < updateButton.length; i++){
        arr.push(updateButton[i])
    }
    // console.log(arr)
    let arr2: HTMLDivElement[] = []
    let childNote = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".Childnote")
    for(let i: number = 0; i < updateButton.length; i++){
        arr2.push(childNote[i])
    }
    // console.log(arr2)
    updateButton.forEach(function(e: HTMLDivElement){
        e.addEventListener("click", function(){
            // Make the note editable
            arr2[arr.indexOf(e)].removeAttribute("readonly")
            // Focus on the note
            arr2[arr.indexOf(e)].focus()
            // Create "save" and "cancel" Divs
            let saveDiv: HTMLDivElement = <HTMLDivElement> document.createElement("div")
            let cancelDiv: HTMLDivElement = <HTMLDivElement> document.createElement("div")
            saveDiv.classList.add("save")
            cancelDiv.classList.add("cancel")
            // Create "save" and "cancel" Icons
            let saveButtons: HTMLDivElement = <HTMLDivElement> document.createElement("i")
            let cancelButtons: HTMLDivElement = <HTMLDivElement> document.createElement("i")
            saveButtons.classList.add("fa-solid")
            cancelButtons.classList.add("fa-solid")
            saveButtons.classList.add("fa-check")
            cancelButtons.classList.add("fa-x")
            // Add icons to "save" and "cancel" Divs
            saveDiv.appendChild(saveButtons)
            cancelDiv.appendChild(cancelButtons)
            // Add buttons to "TheNote" div
            e.parentElement?.append(saveDiv)
            e.parentElement?.append(cancelDiv)
            // Get all "save" buttons, and put them in empty array
            var saveArray: HTMLDivElement[] = []
            let save = <NodeListOf<HTMLDivElement>> document.querySelectorAll(".save")
            for(let i: number = 0; i < save.length; i++){
                saveArray.push(save[i])
            }
            // // console.log(saveArray)
            // save.forEach(function(ele){
            //     ele.addEventListener("click", function(){
            //         console.log(saveArray)
            //         console.log(arr2[saveArray.indexOf(ele)])
            //     })
            //     // arr2[saveArray.indexOf(ele)].setAttribute("readonly", "true")
            // })
            // Remove "delete" and "update" buttons
            arr3[arr.indexOf(e)].remove()
            e.remove()
        })
    })
}

AddButton.addEventListener("click", () => getClone())