var randomNumber1= Math.floor(Math.random()*3)+1;
var randomNumber2= Math.floor(Math.random()*3)+1;

if (randomNumber1>randomNumber2) {
	 
	document.querySelector("h1").innerHTML = "Chota bubu loves Bada Bubu more...hihihihi "
	var randomImageSource1="bda1.jpeg";
	document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
}
else if (randomNumber2>randomNumber1) {
	
	document.querySelector("h1").innerHTML = "Bada bubu loves Chota Bubu more...huh "

var randomImageSource2="chota1.jpeg";
	document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 
}
else{
	document.querySelector("h1").innerHTML ="AAAAAA ki EE to draw hoi poi...but I love you more !! "
}
