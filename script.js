function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
loco();
function imageChanger(){
var element1 = document.querySelector(".elem1");
var elemcon = document.querySelector("#elem-container");
var fix_image =document.querySelector("#fixed_image");
elemcon.addEventListener("mouseenter",function(){
  fix_image.style.display = "block";
})
elemcon.addEventListener("mouseleave",function(){
  fix_image.style.display = "none";
})

// element1.addEventListener("mouseenter",function(){
//   let img = element1.getAttribute("data-image");
//   fix_image.style.background = `url(${img})`
// })   learning purpose use this code

var elems = document.querySelectorAll("#elements");
elems.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var img = e.getAttribute("data-image");
    fix_image.style.backgroundImage = `url(${img})`
  })
})
}
imageChanger();
function heading(){
  var bg_img = document.querySelector('#page4_bottom_right');
var tapclick = document.querySelectorAll("#headings h1")
var tapclick = document.querySelectorAll("#headings h1")
var para = document.querySelector("#paragraphs p");
let currentElement = null;
tapclick.forEach(function(a){
  a.addEventListener("click",function(){
   let img = a.getAttribute("data-image");
   bg_img.style.backgroundImage = `url(${img})`;
    changeColor(this);
  })
})
  function changeColor(tapclick) {
    if (currentElement) {
      currentElement.style.color = '#504A45';
    }
    tapclick.style.color = '#fff';
    currentElement = tapclick;
  }
}
heading();
function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
  });
}
swiper();
function menu (){
  var menubtn = document.querySelector(".menu");
  var menu = document.querySelector("#res_memu");
  var flag = true;
  menubtn.addEventListener("click",function(){
   if(flag == true){
    menu.style.top = 0;
   menu.style.opacity = 1;
   flag = false;
   }
   else{
    menu.style.top = "-100%";
    menu.style.opacity = 0;
    flag = true;
   }
  })
  }
  menu();

  function mouseanimation() {

    var pgcont = document.querySelector("#page5_bottom");
    var crsr = document.querySelector("#golu");
  
    pgcont.addEventListener("mousemove", function (dets) {
      gsap.to(crsr, {
        x: dets.x,
        y: dets.y,
      })
    })
    pgcont.addEventListener("mouseenter", function () {
      gsap.to(crsr, {
        scale: 1,
      })
    })
    pgcont.addEventListener("mouseleave", function () {
      gsap.to(crsr, {
        scale: 0,
      })
    })
  

  }
  mouseanimation()


gsap.from("#elements h1",{
  y: 0,
  duration:2,
  ScrollTrigger:{
    trigger: "#page3",
    scroller: "body",
    markers:true
  }
})

