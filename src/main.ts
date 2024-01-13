let Note = <HTMLDivElement> document.getElementById("note")
let Notes = <HTMLDivElement> document.getElementById("notes")
let AddButton = <HTMLDivElement> document.getElementById("add")

function classNote(div: HTMLDivElement): void{
    div.classList.add("note")
}
function Editable(div: HTMLDivElement): void{
    div.setAttribute("contenteditable", "true")
}
function UnEditable(div: HTMLDivElement): void{
    div.setAttribute("contenteditable", "false")
}
function getClone(div: HTMLDivElement): void{
    let copy = <HTMLDivElement> Notes.appendChild(div.cloneNode(true))
    copy.removeAttribute("contenteditable")
}

