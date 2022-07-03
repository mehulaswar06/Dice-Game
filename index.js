randomNumber1=Math.random();

randomNumber1=randomNumber1*6;

randomNumber1=Math.floor(randomNumber1)+1


randomDiceImage="dice"+randomNumber1+".png";
randomImageSource="images/"+randomDiceImage;
var img1= document.querySelectorAll("img")[0];



img1.setAttribute("src",randomImageSource)

randomNumber2=Math.floor(Math.random()*6+1);

randomDiceImage2="dice"+randomNumber2+".png";

randomImageSource2="images/"+randomDiceImage2;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}