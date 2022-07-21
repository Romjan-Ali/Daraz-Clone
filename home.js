//categories
var categories = document.querySelector('.categories');
var option1 = document.querySelector('.option1');
var opt1 = document.querySelectorAll('.option1 div');
var option2 = document.querySelector('.option2');
var opt2 = document.querySelectorAll('.option2 div');
var option3 = document.querySelector('.option3');
var opt3 = document.querySelectorAll('.option3 a');
var catagoriesArr = ['a', 'b', 'c'];

categories.style.backgroundColor = 'white';


for(i=0; i<opt1.length; i++){
    opt1[i].setAttribute("onmouseover", "activeOptElem(event)");
}

for(i=0; i<opt2.length; i++){
    opt2[i].setAttribute("onmouseover", "activeOptElem2(event)");
}

function activeOptElem(evt){
    for(i=0; i<opt1.length; i++){
        opt1[i].className = opt1[i].className.replace(" activeParent", "");
    }
    for(i=0; i<opt2.length; i++){
        opt2[i].className = opt2[i].className.replace(" activeParent", "");
    }
    evt.currentTarget.className += " activeParent";
}

function activeOptElem2(evt){
    for(i=0; i<opt2.length; i++){
        opt2[i].className = opt2[i].className.replace(" activeParent", "");
    }
    evt.currentTarget.className += " activeParent";
}

categories.onmouseleave = function(){
    option2.style.display = 'none';
    option3.style.display = 'none';

    for(i=0; i<opt1.length; i++){
        opt1[i].className = opt1[i].className.replace(" activeParent", "");
    }
}

option1.onmouseenter = function(){
    option2.style.display = 'block';
    option3.style.display = 'none';
};
option2.onmouseenter = function(){
    option3.style.display = 'block';
}

function showElements1(evt){
    for(i=0; i<opt2.length; i++){
        opt2[i].style.display = 'none';
    }

    let elementsClass = document.getElementsByClassName(evt);
    for(i=0; i<elementsClass.length; i++){
        elementsClass[i].style.display = 'block';
    }
}

function showElements2(evt2){
    for(i=0; i<opt3.length; i++){
        opt3[i].style.display = 'none';
    }

    let elementsClass = document.getElementsByClassName(evt2);
    for(i=0; i<elementsClass.length; i++){
        elementsClass[i].style.display = 'block';
    }
}

//banner
var banner = document.getElementsByClassName("banner")[0];
var bannerContainer = document.getElementsByClassName("banner-container")[0];
var dotContainer = document.getElementsByClassName("dot-container")[0];
var dots = document.getElementsByClassName("dot");
var bannerImg = document.getElementById("bannerImg");
var bannerLink = document.getElementById("bannerLink");
var interval;
var timeOut;

const bannerArr = [
    {
        img: "images/banner/banner1.jpg",
        bg: "#3e0685",
        link: "#"
    }, {
        img: "images/banner/banner2.jpg",
        bg: "#b7f2ec",
        link: "#"
    }, {
        img: "images/banner/banner3.jpg",
        bg: "#d280d2",
        link: "#"
    }, {
        img: "images/banner/banner4.jpg",
        bg: "#F2FF51",
        link: "#"
    }, {
        img: "images/banner/banner5.jpg",
        bg: "#CCE5DF",
        link: "#"
    }, {
        img: "images/banner/banner6.jpg",
        bg: "#3F0687",
        link: "#"
    }, {
        img: "images/banner/banner7.jpg",
        bg: "#DAE646",
        link: "#"
    }, {
        img: "images/banner/banner8.jpg",
        bg: "#F75606",
        link: "#"
    }
]

// banner slideshow
for(i=0; i<bannerArr.length; i++){
    var dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dot.setAttribute("onmouseenter", "currentSlide(" + i + ")");
    dotContainer.appendChild(dot);
}

var slideIndex = 0;

currentSlide(slideIndex);
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    clearInterval(interval);
    interval = setInterval(() => {
        plusSlides(slideIndex += 1);
    }, 5000);
}

function showSlides(n){
    bannerImg.setAttribute("src", bannerArr[slideIndex].img);
    bannerLink.setAttribute("href", bannerArr[slideIndex].link);
    bannerContainer.style.backgroundColor = bannerArr[slideIndex].bg;
    for(i=0; i<dots.length; i++){
        dots[i].style.backgroundColor = "#DDDDDD";
    }
    dots[slideIndex].style.backgroundColor = "#FFFFFF";
}

function plusSlides(n){
    if(slideIndex >= bannerArr.length){
        slideIndex = 0;
    }
    bannerImg.setAttribute("src", bannerArr[slideIndex].img);
    bannerLink.setAttribute("href", bannerArr[slideIndex].link);
    bannerContainer.style.backgroundColor = bannerArr[slideIndex].bg;
    for(i=0; i<dots.length; i++){
        dots[i].style.backgroundColor = "#DDDDDD";
    }
    dots[slideIndex].style.backgroundColor = "#FFFFFF";
}

// if cursor keep on any dot or banner, slideshow will be stop. if cursor leave from banner and any dot, interval will be start
bannerImg.onmouseenter = function(){
    clearInterval(interval);
}
bannerImg.onmouseleave = function(){
    interval = setInterval(() => {
        plusSlides(slideIndex += 1);
    }, 5000);
}
for(i=0; i<dots.length; i++){
    dots[i].addEventListener("mouseenter", ()=>{
        clearInterval(interval);
    });
    dots[i].addEventListener("mouseleave", ()=>{
        interval = setInterval(() => {
            plusSlides(slideIndex += 1);
        }, 5000);
    })
}


// weekly offer image
var wImg = document.querySelector(".container2 .weekly-offer-img");
var y = 1;
setInterval(() => {
    wImg = document.querySelector(".container2 .weekly-offer-img");
    if(y===1){
        wImg.setAttribute("src", "images/offer/weekly-offer-1.png");
        y = 2;
        
    } else {
        wImg.setAttribute("src", "images/offer/weekly-offer-2.png");
        y = 1;
    }
}, 500);

// categories 2 products height equals to width
var c2products = document.querySelector(".categories2 .products2");
var c2productsWidth = window.getComputedStyle(c2products).getPropertyValue("width");
for(i=0; i<c2products.length; i++){
    c2products[i].style.height = c2productsWidth;
}

//just for you
var justForYou_Products = document.querySelectorAll(".just-for-you .products");
for(i=0; i<justForYou_Products.length; i++){
    if((i+1)%6 === 0){
        justForYou_Products[i].style.marginRight = 0;
    }
}


var jfyFigcaption = document.querySelectorAll(".just-for-you .products figcaption");
var jfyFigcaptionImg = document.getElementsByClassName("daraz-mall");
var j = 0;
console.log(jfyFigcaptionImg);
for(i=0; i<jfyFigcaption.length; i++){
    jfyFigcaption[i].style.marginTop = 1 + "rem";
    if(jfyFigcaption[i].contains(jfyFigcaptionImg[j])){
        jfyFigcaption[i].style.marginTop = 0;
        j++;
    }
}