let login = document.getElementById("login")

login.addEventListener("submit",function(e){
    e.preventDefault()

     let email = document.getElementById("email").value 
    let pass = document.getElementById("pass").value 

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let founduser = users.find(u => u.email === email && u.pass === pass )

    if(founduser){
        localStorage.setItem('loggedinuser', JSON.stringify(founduser))
        alert("login completed")
        location.assign("Welcome.html")
    }
    else{
        alert("Email or Password is incorrect")
        window.location.href("login.html")
    }
    
})