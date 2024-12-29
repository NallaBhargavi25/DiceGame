document.querySelector("button").addEventListener("click", () => {
   var shadowbutton= document.querySelector(".buttonContainer");
    addshadow(shadowbutton);
var randomNumber1=parseInt(Math.random()*6+1);
var randomNumber1image="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomNumber1image);
var randomNumber2=parseInt(Math.random()*6+1);
var randomNumber2image="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomNumber2image);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

});
function addshadow(input){
    input.classList.add("buttonshadow");
    setTimeout(() => {
        input.classList.remove("buttonshadow");
    }, 50);
}
