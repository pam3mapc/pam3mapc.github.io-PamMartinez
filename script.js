//Navigation Menu

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";


}

// Back to top - button 
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/* music Cuyagua*/
let Musicplay=document.getElementById("wink"); {
  Musicplay.addEventListener ('mouseenter',playAudio)
  Musicplay.addEventListener('mouseleave',pauseAudio)

let audio = new Audio('wink.mp3');
function playAudio(){
  audio.play()
  console.log("play audio")
}

function pauseAudio(){
  audio.pause()
  console.log("pause audio")
}
}


/* music Cuyagua*/
let Musicplay1=document.getElementById("percusion"); {
	Musicplay1.addEventListener ('mouseenter',playAudio)
	Musicplay1.addEventListener('mouseleave',pauseAudio)

let audio1 = new Audio('percusion.mp3');
function playAudio(){
	audio1.play()
	console.log("play audio")
}

function pauseAudio(){
	audio1.pause()
	console.log("pause audio")
}
}



/* music love*/
let Musicplay2=document.getElementById("kisses"); {
  Musicplay2.addEventListener ('mouseenter',playAudio)
  Musicplay2.addEventListener('mouseleave',pauseAudio)

let audio2 = new Audio('kisses.mp3');
function playAudio(){
  audio2.play()
  console.log("play audio")
}

function pauseAudio(){
  audio2.pause()
  console.log("pause audio")
}
}

/* music menstruation*/
let Musicplay3=document.getElementById("drop"); {
  Musicplay3.addEventListener ('mouseenter',playAudio)
  Musicplay3.addEventListener ('mouseleave',pauseAudio)

let audio3 = new Audio('drop.mp3');
function playAudio(){
  audio3.play()
  console.log("play audio")
}

function pauseAudio(){
  audio3.pause()
  console.log("pause audio")
}
}

/* music film*/
let Musicplay4=document.getElementById("film"); {
  Musicplay4.addEventListener ('mouseenter',playAudio)
  Musicplay4.addEventListener ('mouseleave',pauseAudio)

let audio4 = new Audio('film.mp3');
function playAudio(){
  audio4.play()
  console.log("play audio")
}

function pauseAudio(){
  audio4.pause()
  console.log("pause audio")
}
}


