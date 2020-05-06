// var i=0;
// while(i<=0)
// {
//   var name1=prompt("Enter the name of Player 1:");
//   var name2=prompt("Enter the name of Player 2:");
//   i++;
// }
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
