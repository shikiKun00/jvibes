const navbar = document.querySelector(".navbar");
const opnNav = navbar.querySelector(".open-nav");
const navLinks = navbar.querySelector(".navLinks");
const changeLangBtn = navLinks.querySelectorAll("button");

changeLangBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.className === "indonesian") {
            alert("indonesian translation");
        } else if (btn.className === "english") {
            alert("english translation");
        } else {
            alert("japan translation");
        }
    });
});

opnNav.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const container = document.querySelector(".container");
const section = container.querySelectorAll("section");

/* handle author image */
const images = container.querySelectorAll("img");
const modalBox = document.querySelector(".modal-box");
const modalBoxCloseBtn = modalBox.querySelector(".close-modal-box");
const link = modalBox.querySelector("a");

window.addEventListener("load", () => {
    container.style.paddingTop = navbar.clientHeight + "px";
    navLinks.style.top = navbar.clientHeight + "px";

    images.forEach((img, i) => {
        img.addEventListener("click", () => {
            link.href = link.href + img.dataset.author;

            link.textContent = img.dataset.author;
            modalBox.style.top = navbar.clientHeight + "px";
        });
    });

    modalBoxCloseBtn.addEventListener("click", () => {
        modalBox.style.top = -navbar.clientHeight + "%";
    });

    section.forEach(el => {
        if (el.className != "hero") {
            el.style.paddingTop = navbar.clientHeight + 40 + "px";
        }
    });
});

document.addEventListener("click", function (e) {
    if (!opnNav.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});
