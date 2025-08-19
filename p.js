

let nationality = prompt("Enter your nationality")
if(nationality == "pakistani"){
    let religion = prompt("Enter your religion")
    if(religion == "Islam" || "islam" ){
        let age = prompt("Enter your age")
        if(age >= 18){
            document.write("<h1>You are eligible for vote</h1>")
        }
        else{
            document.write("18+ are only eligible to vote")
        }
    }
    else{
        document.write("only Muslims are allowed")
    }
}
else{
    document.write("only pakistani can vote")
}
   

    