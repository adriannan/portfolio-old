		
		var h1 = document.querySelector("#h1");
		var h2 = document.querySelector("#h2");
		var h3 = document.querySelector("#h3");
		var h4 = document.querySelector("#h4");
		var h5 = document.querySelector("#h5");
		var hero = document.querySelector("#hero-parallax");
		var logo = document.getElementById('logo')
		var nav = document.getElementById('nav')
		var navbar = document.getElementById('navbar')


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
	    setTranslate(0, yScrollPosition * -.2, hero);
	    requestAnimationFrame(scrollLoop);
	}


// HIDDEN NAVBAR

window.addEventListener('scroll', function(){
	var yPos = h1.getBoundingClientRect().y;

	if(yPos <= 0){
		hiddenNav();

		// under hero toggle nav
		navbar.addEventListener('mouseover', showNav);
		navbar.addEventListener('mouseout', hiddenNav);
	} else {
		showNav();
	}

	function showNav(){
		nav.style.left = '0';
	}		
	function hiddenNav(){
		nav.style.left = '-3em';
	}
});










