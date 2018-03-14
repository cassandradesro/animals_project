"use strict";

(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();

var $SubSahara 		= document.querySelector("#SubSahara"),
	$SouthAm 		= document.querySelector("#SouthAm"),
	$MiddleAm 		= document.querySelector("#MiddleAm"),
	$USCanada 		= document.querySelector("#USCanada"),
	$North_Africa 	= document.querySelector("#North_Africa"),
	$Europe 		= document.querySelector("#Europe"),
	$MiddleEast 	= document.querySelector("#MiddleEast"),
	$CentralAsia 	= document.querySelector("#CentralAsia"),
	$Russia 		= document.querySelector("#Russia_1_"),
	$SEAsia 		= document.querySelector("#SEAsia"),
	$India 			= document.querySelector("#India"),
	$Australia 		= document.querySelector("#Australia"), 
	$scene			= document.querySelector("#scene"),
	$exitButton		= document.querySelector(".exit"),
	$SubSahara_animal	= document.querySelector(".africanlion"),
	$MiddleEast_animal	= document.querySelector(".hyena"),
	$USCanada_animal	= document.querySelector(".redwolf"),
	$Europe_animal		= document.querySelector(".monkseal"),
	$SEAsia_animal		= document.querySelector(".komodo"),
	$India_animal		= document.querySelector(".orangutan"),
	$CentralAsia_animal	= document.querySelector(".panda"),
	$MiddleAm_animal	= document.querySelector(".spidermonkey"),
	$Russia_animal		= document.querySelector(".tiger"),
	$SouthAm_animal		= document.querySelector(".tortoise"),
	$Australia_animal 	= document.querySelector(".wallaby"),
	$North_Africa_animal = document.querySelector(".whiterhino");


$SubSahara.addEventListener("click", function(){	
	$scene.classList.add("SubSahara_clicked");
	$SubSahara_animal.classList.add("active");
});

$SouthAm.addEventListener("click", function(){
	$scene.classList.add("SouthAm_clicked");
	$SouthAm_animal.classList.add("active");

}); 	
$MiddleAm.addEventListener("click", function(){
	$scene.classList.add("MiddleAm_clicked");
	$MiddleAm_animal.classList.add("active");

}); 	
$USCanada.addEventListener("click", function(){
	$scene.classList.add("USCanada_clicked");
	$USCanada_animal.classList.add("active");

});	
$North_Africa.addEventListener("click", function(){
	$scene.classList.add("North_Africa_clicked");
	$North_Africa_animal.classList.add("active");

});
$Europe.addEventListener("click", function(){
	$scene.classList.add("Europe_clicked");
	$Europe_animal.classList.add("active");

});
$MiddleEast.addEventListener("click", function(){
	$scene.classList.add("MiddleEast_clicked");
	$MiddleEast_animal.classList.add("active");

});
$CentralAsia.addEventListener("click", function(){
	$scene.classList.add("CentralAsia_clicked");
	$CentralAsia_animal.classList.add("active");

});
$Russia.addEventListener("click", function(){
	$scene.classList.add("Russia_clicked");
	$Russia_animal.classList.add("active");

});	
$SEAsia.addEventListener("click", function(){
	$scene.classList.add("SEAsia_clicked");
	$SEAsia_animal.classList.add("active");

});	
$India.addEventListener("click", function(){
	$scene.classList.add("India_clicked");
	$India_animal.classList.add("active");

});		
$Australia.addEventListener("click", function(){
	$scene.classList.add("Australia_clicked");
	$Australia_animal.classList.add("active");

});	

$exitButton.addEventListener("click", function(){
	var $activeClass = document.querySelector(".active"); 
	$activeClass.classList.remove("active");
	$scene.style.transformOrigin = "50% 50%";
	$scene.style.transform = "scale(1)";
});









