var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "200px";
}
function closemenu() {
  sidemenu.style.right = "0";
}
// ------------------------------------------ header background img------------------------------------------------

// -----------------------------------------scroll Animation-------------------------------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
// --------------------------------------------for products ---------------------------------------------

const obsProd = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showprod");
    } else {
      entry.target.classList.remove("showprod");
    }
  });
});

const crdhhiddenElements = document.querySelectorAll(".crdhidden");
crdhhiddenElements.forEach((el) => obsProd.observe(el));

// ----------------------------------------------------- service -----------------------------------------------

const obsser = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showservice");
    } else {
      entry.target.classList.remove("showservice");
    }
  });
});

const serhiddenElements = document.querySelectorAll(".serhidden");
serhiddenElements.forEach((el) => obsser.observe(el));
// ----------------------------------------------------- service2 -------------------------------------------------------
const obsser2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showservice");
    } else {
      entry.target.classList.remove("showservice");
    }
  });
});

const ser2hiddenElements = document.querySelectorAll(".ser2hidden");
ser2hiddenElements.forEach((el) => obsser2.observe(el));
// ---------------------------------------------------- service end -----------------------------------------------------------

// ---------------------------------------------- back to top ------------------------------------------------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
