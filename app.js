let btn =document.querySelector("button");
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h1");
    h3.innerText= grc();
    let random=grc();
    let div = document.querySelector("div");
    div.style.backgroundColor=grc();
    
});
 function grc(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red} ${green} ${blue})`;
    return(color);

 }