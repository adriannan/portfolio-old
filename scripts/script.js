		
		var nav = document.getElementById('nav');
		var navbar = document.getElementById('navbar');
		var contactBtn = document.getElementById('contact-button');
		var topBtn = document.getElementById('top-button');

// MOVING HERO TITTLE ON SCROLL
	function setTranslate(xPos, yPos, el) {
 	   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
	}

	window.addEventListener("DOMContentLoaded", scrollLoop, false);

	var xScrollPosition;
	var yScrollPosition;
	 
	function scrollLoop() {
	    xScrollPosition = window.scrollX;
	    yScrollPosition = window.scrollY;
	 
	    setTranslate(yScrollPosition * -8,  0, document.querySelector("#h2"));
	    setTranslate(yScrollPosition * 10,  0, document.querySelector("#h3"));
	    setTranslate(0, yScrollPosition * -.5, document.querySelector("#hero-parallax"));
	    requestAnimationFrame(scrollLoop);
	}


// HIDDEN NAVBAR
function showNav(){
	nav.style.left = '0';
}		
function hiddenNav(){
	nav.style.left = '-3em';
}

function transformContactBtn(){	
	contactBtn.classList.add('button-transf');
}
function reTransformContactBtn(){
	contactBtn.classList.remove('button-transf');
}

window.addEventListener('scroll', function(){
	// hero tittle top of the window view
	var contactBtnPos = contactBtn.getBoundingClientRect().bottom;
	var aboutSectPos = document.getElementById('about').getBoundingClientRect().bottom;

	if(document.getElementById('hero').getBoundingClientRect().bottom<=contactBtnPos){
		contactBtn.classList.add('button-transl');
	} else{
		contactBtn.classList.remove('button-transl');
	}

	if(aboutSectPos<=contactBtnPos){
		transformContactBtn();
		hiddenNav();
			// under hero toggle nav
			navbar.addEventListener('mouseover', showNav);
			navbar.addEventListener('mouseout', hiddenNav);

			if(document.getElementById('skills').getBoundingClientRect().bottom<=contactBtnPos){
				reTransformContactBtn();
				// hidden button on contact section
				if(document.getElementById('projects').getBoundingClientRect().bottom<=contactBtnPos){
					contactBtn.style.visibility = 'hidden';
					topBtn.style.display = 'block';
				} else{
					contactBtn.style.visibility = 'visible';
					topBtn.style.display = 'none';
				}
			}
	} else if (aboutSectPos>=contactBtnPos){
		reTransformContactBtn();
		showNav();
	}
});

topBtn.addEventListener('click', function(){
	topBtn.style.display = 'none';
	contactBtn.style.visibility = 'visible';
});


// MORE INFORMATION ABOUT

document.getElementById('about-button').addEventListener('click', function(){
	document.getElementById('about-more').classList.toggle('more');
	if(this.innerHTML == "więcej"){
		this.innerHTML = "mniej";
	} else {
		this.innerHTML = "więcej"
	}
});



