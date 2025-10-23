$(document).ready(function(){
    
    function loadpage(page){
        $.ajax({
            url : page + ".html",
            success : function(data){
                $("#content").html(data)
            }
        })
    }

    $("#home").click(function(e){
        e.preventDefault
        loadpage('index')
    })
    $("#about").click(function(){
        loadpage('about')
    })
    $("#gallery").click(function(){
        loadpage('gallery')
    })

    loadpage('index')
})