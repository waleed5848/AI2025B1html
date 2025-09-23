localStorage.setItem("name" , "zain")
localStorage.setItem("email" , "zain@gmail.com")

let data =localStorage.getItem("name")
document.write(data)

sessionStorage.setItem("name" , "ahmed")
alert(sessionStorage.getItem("name"))
sessionStorage.removeItem("name")

document.cookie = "cookie1 = hello"

document.cookie = "cookie2 = hello world , max-age"+60*60*60
