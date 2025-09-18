// let btn = document.getElementById("btn")
// let heading = document.getElementById("heading")

// btn.addEventListener("click", function(){

// heading.innerHTML = "<i>hello DOM</i>"
// // heading.innerText = "<i>hello DOM</i>"

// })


let btn = document.getElementById("btn")
let para = document.getElementById("para")


btn.addEventListener("click",function(e){
    e.preventDefault()
    let name = document.getElementById("name").value
    para.innerHTML =name
})

