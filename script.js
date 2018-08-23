		
		var h1 = document.querySelector("#h1");
		var h2 = document.querySelector("#h2");
		var h3 = document.querySelector("#h3");
		var h4 = document.querySelector("#h4");
		var h5 = document.querySelector("#h5");
		var hero = document.querySelector("#hero-parallax");
		var logo = document.getElementById('logo');
		var nav = document.getElementById('nav');
		var navbar = document.getElementById('navbar');
		var heroSect = document.getElementById('hero');
		var aboutSect = document.getElementById('about');
		var skillsSect = document.getElementById('skills');
		var contactBtn = document.getElementById('contact-button');
		var aboutBtn = document.getElementById('about-button');
		var aboutMore = document.getElementById('about-more');
		var skillsItem = document.querySelectorAll('.skills-item');
		var skillsItemCapt = document.querySelectorAll('.skills-item-caption');
		var skillIcon = document.querySelectorAll('.skill-icon');
		var skillH = document.querySelectorAll('.skill-h');

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
	 
 	//     setTranslate(0, yScrollPosition, h1);
	    setTranslate(yScrollPosition * -8, yScrollPosition * 0, h2);
	    setTranslate(yScrollPosition * 10, yScrollPosition *0, h3);
	//     setTranslate(yScrollPosition * 30, yScrollPosition *0, h4);
	//     setTranslate(yScrollPosition * 30, yScrollPosition *0, h5);
	    setTranslate(0, yScrollPosition * -.5, hero);
	    requestAnimationFrame(scrollLoop);
	}


// HIDDEN NAVBAR

window.addEventListener('scroll', function(){
	// hero tittle top of the window view
	var yPos = h1.getBoundingClientRect().y;

	if(yPos <= 0){
		// hiddenNav();

		// under hero toggle nav
		// navbar.addEventListener('mouseover', showNav);
		// navbar.addEventListener('mouseout', hiddenNav);
	} else {
		// showNav();
	}

	function showNav(){
		nav.style.left = '0';
	}		
	function hiddenNav(){
		nav.style.left = '-3em';
	}

	var contactBtnPos = contactBtn.getBoundingClientRect().bottom;
	var heroSectPos = heroSect.getBoundingClientRect().bottom;
	var aboutSectPos = aboutSect.getBoundingClientRect().bottom;
	var skillsSectPos = skillsSect.getBoundingClientRect().bottom;

	if(heroSectPos<=contactBtnPos){
		contactBtn.classList.add('button-transl');

	} else{
		contactBtn.classList.remove('button-transl');
	}

	if(aboutSectPos<=contactBtnPos){
		contactBtn.classList.add('button-transf');
			hiddenNav();
			// under hero toggle nav
			navbar.addEventListener('mouseover', showNav);
			navbar.addEventListener('mouseout', hiddenNav);
	} else if (aboutSectPos>=contactBtnPos){
		contactBtn.classList.remove('button-transf');
			showNav();
	}

	if(skillsSectPos<=contactBtnPos){
		contactBtn.classList.remove('button-transf');
	} else if(skillsSectPos>=contactBtnPos){
		// contactBtn.classList.add('button-transf');
	}


	function transformContactBtn(){	
		contactBtn.classList.add('button-transf');
	// contactBtn.style.color = '#bd1a3a'
	// contactBtn.style.background = '#fff';
	}
	function reTransformContactBtn(){
		contactBtn.classList.remove('button-transf');
	// contactBtn.style.color = '#bd1a3a'
	// contactBtn.style.background = '#fff';
	}
});

// CHANGE CONTACT-BTN WITH SCROLLING

	// var contactBtnPos = contactBtn.getBoundingClientRect().bottom;
	// var aboutSectPos = aboutSect.getBoundingClientRect().bottom;

	// if(aboutSectPos >= contactBtnPos){
	// 	function transformContactBtn(){
	// 		contactBtn.style.color = '#bd1a3a'
	// 		contactBtn.style.backgroundColor = '#bd1a3a';

	// 	}

	// }








// MORE INFORMATION ABOUT

aboutBtn.addEventListener('click', function(){
	aboutMore.classList.toggle('more');

})

























// for(var i = 0; i < skillsItem.length; i++){

// 	skillsItem[i].addEventListener('mouseover', function(){
// 		skillIcon[i].classList.add('skills-item-bck');
// 		skillH[i].classList.add('skills-item-bck');
// 		skillsItemCapt[i].style.visibility = 'visible';

// 	});
// 	skillsItem[i].addEventListener('mouseout', function(){
// 		skillIcon[i].classList.remove('skills-item-bck');
// 		skillH[i].classList.remove('skills-item-bck');
// 		skillsItemCapt[i].style.visibility = 'hidden';

// 	})
// }




