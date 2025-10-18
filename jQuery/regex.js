$(document).ready(function(){
    // name validation
    $("#name").keyup(function(){
        let name = $(this).val()
        let nameRE = /^[a-zA-Z\s]{3,}$/
        if (!nameRE.test(name)) {
            $(this).next("span").show().text("only allow alphabets").css("color","red")
            $(this).css("border","2px solid red")
        } else {
            $(this).next("span").hide()
            $(this).css("border","2px solid green")
        }
    })

    // email validation
    $("#email").keyup(function(){
        let email = $(this).val()
        let emailRE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if(!emailRE.test(email)) {
            $(this).next("span").show().text("format not allowed").css("color","red")
            $(this).css("border","2px solid red")
        } else {
            $(this).next("span").hide()
            $(this).css("border","2px solid green")
        }
    })
})
