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
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



/* music in PAMELA MARTINEZ BARRERA*/

let Musicplay=document.getElementById("audio");
	Musicplay.addEventListener ('mouseenter',playAudio)
	Musicplay.addEventListener('mouseleave',pauseAudio)

let audio = new Audio('percussion.mp3');
function playAudio(){
	audio.play()
	console.log("play audio")
}

function pauseAudio(){
	audio.pause()
	console.log("pause audio")
}


