import Todo from './Todo.js'



let personIcon = document.getElementById('person')
let userOptions = document.getElementById('userOptions')
let closeUserOptions = document.getElementById('closeUserOptions')
let addToListCont = document.getElementById('addToDoCont');
let closeAddCont = document.getElementById('close')
let addToDoBtn = document.getElementById('addToDoBtn')
let addToListBtn = document.getElementById('addToList')
let des = document.getElementById('des')
let displayPane = document.getElementById('displayPane')
let infoCont = document.getElementById('infoCont')



addToListCont.style.display = "none"
userOptions.style.display = "none"


personIcon.addEventListener("click", ()=>{

    userOptions.style.display = "block"
    personIcon.id = "newPerson" 
})

closeUserOptions.addEventListener("click",()=>{
    userOptions.style.display = "none"
})

addToDoBtn.addEventListener("click",()=>{
    addToListCont.style.display = "flex"

})

closeAddCont.addEventListener("click",()=>{
    addToListCont.style.display = "none"
})

addToListBtn.addEventListener("click",()=>{

    let myObj = new Todo(des.value)
    
    let description = document.createElement('p')
    description.innerText =des.value
    description.style.display = " flex"
    description.style.alignItems = "center"
    description.style.justifyContent = "center"
    description.style.border = "solid red 1px"
    displayPane.append(infoCont)
    infoCont.append(description)

})






