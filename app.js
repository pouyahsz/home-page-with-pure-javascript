let languageButton = document.querySelector("div.top-header button");
let languageList = document.querySelector(".language-list");
let languageListItems = document.querySelectorAll(".language-list button");
let hambergurMenu = document.querySelector(".hambergur-menu");
let smallMenu = document.querySelector(".small-menu");
let hambergurMenuIcon = document.querySelectorAll(".hambergur-menu span")
let sidebarMenuIcon = document.querySelector(".sidebar-menu-icon");
let sidebar = document.querySelector(".sidebar");
let closeButton = document.querySelector(".heading i");
let navigationCircle = document.querySelectorAll(".navigation>div");
let sliderImage = document.querySelector(".slide img");
let megaMenuTrigger = document.querySelector(".mega-menu-trigger");
let trigger = document.querySelector(".trigger");
let megaMenu = document.querySelector(".megamenu-container");
let sliderNavigators = document.querySelectorAll(".slider div.navigation i");
let mainSliderImage = document.querySelector(".slider div.image img");
let mainSliderImages = ["images/slide-1.jpg", "images/slide-2.jpg"];
let accordeonitems = document.querySelectorAll("div.accordeon div.item");
let products = [...document.querySelectorAll("div.product")];
let productsItems = document.querySelectorAll("div.product div.product-overlay i");
let suggestionBox = document.querySelector(".suggestion");
let firstText = document.querySelector("#one");
let secondText = document.querySelector("#two");
let thirdText = document.querySelector("#three");
let firstAvatar = document.querySelector(".first-avatar");
let secondAvatar = document.querySelector(".second-avatar");
let thirdAvatar = document.querySelector(".third-avatar");
let slideCounter = 1;
let index = 0 ; 
let sliderchanger = 0;
let sidebarSlider = ["images/image-1.jpg", "images/image-4.jpg", "images/image-8.jpg"];

let flag = true;

languageButton.addEventListener("click", showDropdown);
for (let item of languageListItems) {
    item.addEventListener("click", showDropdown);
    item.addEventListener("click", changebutton);
}
hambergurMenu.addEventListener("click", menu);

sidebarMenuIcon.addEventListener("click", slidebar);

closeButton.addEventListener("click", slidebar);

for (let item of navigationCircle) {
    item.addEventListener("click", navigation);
}
megaMenuTrigger.addEventListener("mouseenter", showMegaMenu);
megaMenu.addEventListener("mouseenter", showMegaMenu);
megaMenu.firstElementChild.addEventListener("mouseleave", removeMegaMenu);
trigger.addEventListener("mouseleave", removeMegaMenu);

sliderNavigators[1].addEventListener("click", nextSlide);
sliderNavigators[0].addEventListener("click", prevSlide);

for (let item of accordeonitems) {
    item.addEventListener("click", openAccordeon);
}

for (let product of products) {
    product.addEventListener("mouseenter", addProductDetails);
    product.addEventListener("mouseleave", removeProductDetails);
}
firstAvatar.addEventListener("click", function () {
    if (secondText.getAttribute("state")=="active") {
        suggestionBox.classList.replace("second-state","first-state");
        secondText.setAttribute("state","inactive");
        firstText.setAttribute("state","active");
        secondAvatar.classList.add("avatar-opacity");
        firstAvatar.classList.remove("avatar-opacity");
    }
    if(thirdText.getAttribute("state")=="active"){
        suggestionBox.classList.replace("third-state","first-state");
        thirdText.setAttribute("state","inactive");
        firstText.setAttribute("state","active");
        thirdAvatar.classList.add("avatar-opacity");
        firstAvatar.classList.remove("avatar-opacity");
    }
})
secondAvatar.addEventListener("click", function () {
    if (firstText.getAttribute("state")=="active") {
        suggestionBox.classList.replace("first-state","second-state");
        firstText.setAttribute("state","inactive");
        secondText.setAttribute("state","active");
        firstAvatar.classList.add("avatar-opacity");
        secondAvatar.classList.remove("avatar-opacity");
    }
    if(thirdText.getAttribute("state")=="active"){
        suggestionBox.classList.replace("third-state","second-state");
        thirdText.setAttribute("state","inactive");
        secondText.setAttribute("state","active");
        thirdAvatar.classList.add("avatar-opacity");
        secondAvatar.classList.remove("avatar-opacity");
    }
})
thirdAvatar.addEventListener("click", function () {
    if (firstText.getAttribute("state")=="active") {
        suggestionBox.classList.replace("first-state","third-state");
        thirdText.setAttribute("state","active");
        firstText.setAttribute("state","inactive");
        firstAvatar.classList.add("avatar-opacity");
        thirdAvatar.classList.remove("avatar-opacity");
    }
    if(secondText.getAttribute("state")=="active"){
        suggestionBox.classList.replace("second-state","third-state");
        thirdText.setAttribute("state","active");
        secondText.setAttribute("state","inactive");
        secondAvatar.classList.add("avatar-opacity");
        thirdAvatar.classList.remove("avatar-opacity");
    }
})


function showDropdown() {
    languageList.classList.toggle("show-list")
    for (let item of languageListItems) {
        if (item.innerHTML == languageButton.innerHTML) {
            item.classList.add("selected");
        }
    }
}
function changebutton() {
    this.classList.add("selected");
    languageButton.textContent = this.textContent;
    for (let item of languageListItems) {
        if (item == this) {
            continue;
        }
        if (item.classList.contains("selected")) {
            item.classList.remove("selected")
        }
    }
}
function menu() {
    smallMenu.classList.toggle("show");
    if (flag == true) {
        hambergurMenuIcon[0].classList.add("first-rotation");
        hambergurMenuIcon[1].classList.add("hidden");
        hambergurMenuIcon[2].classList.add("third-rotation");
        flag = false;
    } else {
        hambergurMenuIcon[0].classList.remove("first-rotation");
        hambergurMenuIcon[1].classList.remove("hidden");
        hambergurMenuIcon[2].classList.remove("third-rotation");
        flag = true;
    }
}
function slidebar() {
    sidebar.classList.toggle("show-slidebar");
}

function changeSidebarSlide() {
    for (let item of navigationCircle) {

        item.classList.remove("gold");
    }
    sliderImage.setAttribute("src", sidebarSlider[slideCounter]);
    sliderImage.classList.add("fade");
    setTimeout(function () {
        sliderImage.classList.remove("fade");
    }, 1000)
    navigationCircle[slideCounter].classList.add("gold");
    slideCounter++;
    if (slideCounter == 3) {
        slideCounter = 0;
    }
}
function navigation() {
    for (let i = 0; i < 3; i++) {
        if (this == navigationCircle[i]) {
            for (let item of navigationCircle) {

                item.classList.remove("gold");
            }
            sliderImage.setAttribute("src", sidebarSlider[i]);
            sliderImage.classList.add("fade");
            fadeTimer = setTimeout(function () {
                sliderImage.classList.remove("fade");
            }, 1000)
            navigationCircle[i].classList.add("gold");
            slideCounter++;
            if (slideCounter == 3) {
                slideCounter = 0;
            }
        }

    }
    clearInterval(fadeTimer);
    fadeTimer = setTimeout(function () {
        sliderImage.classList.remove("fade");
    }, 1000)
    clearInterval(slider1Timer);
    slider1Timer = setInterval(changeSidebarSlide, 3000);

}
function showMegaMenu() {
    megaMenu.classList.add("show-megamenu");
    megaMenu.classList.add("fade-megamenu");
    setTimeout(function () {
        megaMenu.classList.remove("fade-megamenu");
    }, 1000)
}
function removeMegaMenu() {
    megaMenu.classList.remove("show-megamenu");
}

function changeMainSlide() {
    sliderchanger++;
    if (sliderchanger == 2) {
        sliderchanger = 0;
    }
    mainSliderImage.setAttribute("src", mainSliderImages[sliderchanger]);
    mainSliderImage.classList.add("fade");
    setTimeout(function () {
        mainSliderImage.classList.remove("fade");
    }, 1000)
    clearInterval(slider2Timer);
    slider2Timer = setInterval(changeMainSlide, 3000);

}
function nextSlide() {
    changeMainSlide();
}
function prevSlide() {
    sliderchanger = sliderchanger - 2;
    if (sliderchanger == -2) {
        sliderchanger = 0;
    }
    changeMainSlide();
}

function openAccordeon() {
    this.classList.toggle("open-accordeon");
    for (let item of accordeonitems) {
        if (item == this) {
            continue;
        }
        item.classList.remove("open-accordeon");

    }
}
function addProductDetails() {
    this.classList.add("show");
    index = products.indexOf(this);
    productsItems[index*2 +1].classList.add("opacity");
    setTimeout(function(){
        productsItems[index*2].classList.add("opacity");
    },200)

}
function removeProductDetails() {
    this.classList.remove("show");
    productsItems[index*2 +1].classList.remove("opacity");
    productsItems[index*2].classList.remove("opacity");
}





let slider1Timer = setInterval(changeSidebarSlide, 3000);
let slider2Timer = setInterval(changeMainSlide, 3000);