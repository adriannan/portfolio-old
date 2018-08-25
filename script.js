		
		var h1 = document.querySelector("#h1");
		var h2 = document.querySelector("#h2");
		var h3 = document.querySelector("#h3");
		var hero = document.querySelector("#hero-parallax");
		var nav = document.getElementById('nav');
		var navbar = document.getElementById('navbar');
		var heroSect = document.getElementById('hero');
		var aboutSect = document.getElementById('about');
		var skillsSect = document.getElementById('skills');
		var projectSect = document.getElementById('projects');
		var contactBtn = document.getElementById('contact-button');
		var aboutBtn = document.getElementById('about-button');
		var topBtn = document.getElementById('top-button');
		var aboutMore = document.getElementById('about-more');

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
	 
	    setTranslate(yScrollPosition * -8, yScrollPosition * 0, h2);
	    setTranslate(yScrollPosition * 10, yScrollPosition * 0, h3);
	    setTranslate(0, yScrollPosition * -.5, hero);
	    requestAnimationFrame(scrollLoop);
	}


// HIDDEN NAVBAR

window.addEventListener('scroll', function(){
	// hero tittle top of the window view
	var yPos = h1.getBoundingClientRect().y;
	var contactBtnPos = contactBtn.getBoundingClientRect().bottom;
	var heroSectPos = heroSect.getBoundingClientRect().bottom;
	var aboutSectPos = aboutSect.getBoundingClientRect().bottom;
	var skillsSectPos = skillsSect.getBoundingClientRect().bottom;
	var projectSectPos = projectSect.getBoundingClientRect().bottom;

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

	if(heroSectPos<=contactBtnPos){
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

			if(skillsSectPos<=contactBtnPos){
				reTransformContactBtn();
				// hidden button on contact section
				if(projectSectPos<=contactBtnPos){
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


// MORE INFORMATION ABOUT

aboutBtn.addEventListener('click', function(){
	aboutMore.classList.toggle('more');
})



