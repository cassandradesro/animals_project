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
	$CentralAsa 	= document.querySelector("#CentralAsia"),
	$Russia 		= document.querySelector("#Russia"),
	$SEAsia 		= document.querySelector("#SEAsia"),
	$India 			= document.querySelector("#India"),
	$Australia 		= document.querySelector("#Australia"), 
	$scene			= document.querySelector("#scene");


$SubSahara.addEventListener("click", function(){
	$scene.classList.add("SubSahara_clicked");
});
$SouthAm.addEventListener("click", function(){
	$scene.classList.add("SouthAm_clicked");
}); 	
$MiddleAm.addEventListener("click", function(){
	$scene.classList.add("MiddleAm_clicked");
}); 	
$USCanada.addEventListener("click", function(){
	$scene.classList.add("USCanada_clicked");
});	
$North_Africa.addEventListener("click", function(){
	$scene.classList.add("North_Africa_clicked");
});
$Europe.addEventListener("click", function(){
	$scene.classList.add("Europe_clicked");
});
$MiddleEast.addEventListener("click", function(){
	$scene.classList.add("MiddleEast_clicked");
});
$CentralAsia.addEventListener("click", function(){
	$scene.classList.add("CentralAsia_clicked");
});
$Russia.addEventListener("click", function(){
	$scene.classList.add("Russia_clicked");
});	
$SEAsia.addEventListener("click", function(){
	$scene.classList.add("SEAsia_clicked");
});	
$India.addEventListener("click", function(){
	$scene.classList.add("India_clicked");
});		
$Australia.addEventListener("click", function(){
	$scene.classList.add("Australia_clicked");
});	












