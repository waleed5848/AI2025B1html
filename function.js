// let myapp = () =>{
//     document.write("hello world")
// }
// let myapp3 = () =>{
//     document.write("hello pakistan")
// }


// let myapp2 = () =>{
//     document.write("pakistan")
// }


// let myapp1 = (num1,num2) =>{
//     document.write(num1+num2,"<br>")
// }
// let myapp4 = () =>{
//     document.write("hello pak")
// }

 let btn = document.getElementById("btn")
// let para = document.getElementById("para")

// btn.onclick = ()=> para.innerHTML = "hello world";
// btn.onmouseover = ()=> para.style.color = "red";

btn.addEventListener("click",()=>{
    document.getElementById("para").innerHTML = "hello world"
})
