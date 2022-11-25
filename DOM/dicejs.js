function rolldice(){
var ranno1=Math.floor(Math.random()*6)+1;
var ranno2=Math.floor(Math.random()*6)+1;
var randiceimg="Dice"+ranno1+".png";
var randiceimg2="Dice"+ranno2+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randiceimg);
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randiceimg2);
if (ranno1>ranno2){
   document.querySelector("h1").innerHTML="Player 1 wins!"
}
else if(ranno2>ranno1){
    document.querySelector("h1").innerHTML="Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}
}