
window.addEventListener("load", function(event) {
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


    let num_who = Math.floor((Math.random() * 3) + 0);
    let num_what= Math.floor((Math.random() * 3) + 0);
    var num_when = Math.floor((Math.random() * 3) + 0);
    //console.log (num_who+' '+num_what +' '+ num_when);
    console.log(who[num_who]+' '+what[num_what]+' '+when[num_when]);

    var excuse_element = document.getElementById('excuse1');
    excuse_element.innerHTML = '<h1>'+who[num_who]+' '+what[num_what]+' '+when[num_when]+'</h1>';

});

document.getElementById("buttonExcuse").addEventListener("click", function(){
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


    let num_who = Math.floor((Math.random() * 3) + 0);
    let num_what= Math.floor((Math.random() * 3) + 0);
    var num_when = Math.floor((Math.random() * 3) + 0);
    //console.log (num_who+' '+num_what +' '+ num_when);
    console.log(who[num_who]+' '+what[num_what]+' '+when[num_when]);

    var excuse_element = document.getElementById('excuse1');
    excuse_element.innerHTML = '<h1>'+who[num_who]+' '+what[num_what]+' '+when[num_when]+'</h1>';

});



