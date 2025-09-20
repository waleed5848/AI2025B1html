// let para = document.getElementsByClassName("para")
// para[0].innerHTML = "hello world"
// para[2].style.color = "red"

// let para = document.getElementsByTagName("h1")
// para[0].innerHTML = "aptech sfc"

// let para = document.querySelector("*")

// para.style.color = "green"
// let para = document.querySelectorAll("h1")
// para.forEach(value => {
//     value.innerHTML = "hello world"
//     value.style.color = "red"
// });

let img = document.getElementById("img")
let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    if(img.src.includes("back1.svg")){
        img.src = "./images/back2.svg"
        btn.innerHTML = "this is second image"
    }
    else{
         img.src = "./images/back1.svg"
        btn.innerHTML = "this is first image"
    }
})