const contactBtn = document.getElementById("contact-button");

// MOVING HERO TITTLE ON SCROLL
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function scrollLoop() {
  let yScrollPosition = window.scrollY;
  if (yScrollPosition < 600) {
    setTranslate(yScrollPosition * -8, 0, document.querySelector("#h2"));
    setTranslate(yScrollPosition * 10, 0, document.querySelector("#h3"));
    setTranslate(
      0,
      yScrollPosition * -0.5,
      document.querySelector("#hero-parallax")
    );
  }

  requestAnimationFrame(scrollLoop);
}

//  ANIMATED BUTTON

function changeBtn() {
  const contactBtnPos = document
    .getElementById("contact-button")
    .getBoundingClientRect();
  const skilsPos = document.getElementById("skills").getBoundingClientRect();

  if (
    skilsPos.top <= contactBtnPos.bottom &&
    skilsPos.bottom >= contactBtnPos.bottom
  ) {
    contactBtn.classList.add("button-transf");
  } else if (
    document.getElementById("contact").getBoundingClientRect().top <=
    contactBtnPos.bottom
  ) {
    contactBtn.innerHTML = `<i class="fas fa-angle-up"></i>`;
    contactBtn.parentElement.href = `#hero`;
    contactBtn.classList.add("button-transf");
  } else {
    contactBtn.classList.remove("button-transf");
    contactBtn.innerHTML = "kontakt";
    contactBtn.parentElement.href = `#contact`;
  }
  requestAnimationFrame(changeBtn);
}

function translBtn() {
  if (
    document.getElementById("hero").getBoundingClientRect().bottom <=
    contactBtn.getBoundingClientRect().bottom
  ) {
    contactBtn.classList.add("button-transl");
  } else {
    contactBtn.classList.remove("button-transl");
  }
  requestAnimationFrame(translBtn);
}

// MORE INFORMATION ABOUT

document.getElementById("about-button").addEventListener("click", function() {
  document.getElementById("about-more").classList.toggle("more");
  if (this.innerHTML == "więcej") {
    this.innerHTML = "mniej";
  } else {
    this.innerHTML = "więcej";
  }
});

// ANIMATED ON SCRLL -> HERO & BTN

function scrollChange() {
  scrollLoop();
  translBtn();
  changeBtn();
}

window.addEventListener("DOMContentLoaded", scrollChange);
