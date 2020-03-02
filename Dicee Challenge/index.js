
/*me tin methodo random paragw tyxaious arithous k tin *6 gia na mou dwsei autous p zitaw. dinei omws 0-5 ara +1. To floor einai gia n m dwsei akeraious*/

var randomNumber1 =  Math.floor(Math.random() * 6) + 1;


var randomDiceImage = "dice" + randomNumber1 + ".png";// tha einai string apo dice1-6



var randomImageSource = "images/" + randomDiceImage;//images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];//dialegw tin 1h eikona

image1.setAttribute("src",randomImageSource);//allazw to arxiko src me to random

var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

//prompt-sto header "Refresh me-emfanizetai to apotelesma!!"

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Play 2 wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}