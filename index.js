let randomNumber1= Math.floor(Math.random()*6)+1; //1-6
// console.log(randomNumber1);
let randomDice= "dice"+randomNumber1+".png"//pic dice1.png-dice6.png

let randomDiceSource="images/"+randomDice //images/dice1.png-images/dice6.png
// document.getElementsByClassName("img1") setAtribute
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",randomDiceSource);

let randomNumber2= Math.floor(Math.random()*6)+1
let randomDice2="dice"+randomNumber2+".png";
let randomDice2Source="images/"+randomDice2;
document.querySelectorAll("img")[1].setAttribute("src",randomDice2Source);

if (randomDice>randomDice2){
    document.querySelector("h1").innerHTML="🚩player1 Wins!";
}
else if (randomDice2>randomDice) {
    document.querySelector("h1").innerHTML="🚩player2 Wins!";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}