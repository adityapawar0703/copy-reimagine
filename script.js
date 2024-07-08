
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
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


var sheryjsforbigscreen = function () {
  Shery.imageEffect("#back", { style: 3, config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -0.44, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.9626865683781616 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0.010204081632652962, "y": 0 } }, "shapeScale": { "value": { "x": 1, "y": 1 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 1, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 2 }, "noise_speed": { "value": 1.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 47.33, "range": [0, 100] } }, gooey: true });
}
sheryjsforbigscreen()

// shery js for smallscreen
Shery.imageEffect(".images", {
  style: 3, config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -0.44, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.9626865683781616 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0.010204081632652962, "y": 0 } }, "shapeScale": { "value": { "x": 1, "y": 1 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 1, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 2 }, "noise_speed": { "value": 1.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 47.33, "range": [0, 100] } }, gooey: true 
  
});




var crsr = document.querySelector("#crsr")

  document.addEventListener("mousemove", function (dets) {
      gsap.to(crsr, {
          x: dets.x,
          y: dets.y,
          transform:"translate(-50%,-50%)"
      })
  })

  
  var page1=document.querySelector("#page1")
  var page2=document.querySelector("#page2")
  var page3=document.querySelector("#page3")
  var page4=document.querySelector("#page4")
  var page5=document.querySelector("#page5")
  var page6=document.querySelector("#page6")
  var page7=document.querySelector("#page7")
  var page8=document.querySelector("#lastpage")
  var page9=document.querySelector("#secondlastpage")


  page1.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })
  page2.addEventListener("mouseenter",function(){
    crsr.innerHTML="SCROLL"
  })
  page3.addEventListener("mouseenter",function(){
    crsr.innerHTML="CLICK"
  })
  page4.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })
  page5.addEventListener("mouseenter",function(){
    crsr.innerHTML="REVIEWS"
  })
  page6.addEventListener("mouseenter",function(){
    crsr.innerHTML="SCROLL & FOLLOW"
  })
  page7.addEventListener("mouseenter",function(){
    crsr.style.color="black"
    crsr.innerHTML="SCROLL"
    crsr.style.backgroundColor="rgba(255, 255, 255, 0.436)"

  })
  page7.addEventListener("mouseleave",function(){
    crsr.style.color="white"
    crsr.style.backgroundColor="rgba(0, 0, 0, 0.662)"

  })
  page8.addEventListener("mouseenter",function(){
    crsr.style.display="none"
  })
  page8.addEventListener("mouseleave",function(){
    crsr.style.display="flex"
    //  crsr.style.display=""
  })
  page9.addEventListener("mouseenter",function(){
    crsr.innerHTML="EXPLORE"
  })



//navpagemain animation--------------------------------------
var menu =document.querySelector("#navpagemain-part2 i")
var close=document.querySelector("#full i")
var tml=gsap.timeline()

    tml.to("#full",{
        right:"0%",
        duration:.7,
        opacity:1

    })

    tml.from("#full h3",{
        x:250,
        duration:1,
        opacity:0,
        stagger:0.1

    })
    
    tml.pause() 

    menu.addEventListener("click",function(){
      menu.style.display="none";
      // menu.style.pointerEvents="none"
        tml.play();
      document.querySelector("#page1 button").style.display="none"

    })
    close.addEventListener("click",function(){
      tml.reverse();
      gsap.to(menu,{
        delay:1,
        display:"initial"
      })
      gsap.to("#page1 button",{
        display:"inline",
        delay:1.8
      })
     

    })





    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const polaroids = document.querySelectorAll('.polaroid');

  const paths = [
    [{ x: 100, y: 50 }, { x: 200, y: 0 }, { x: 300, y: 100 }, { x: 0, y: 0 }],
    [{ x: 100, y: -50 }, { x: 200, y: 0 }, { x: 300, y: -100 }, { x: 0, y: 0 }],
    [{ x: -100, y: 50 }, { x: -200, y: 0 }, { x: -300, y: 100 }, { x: 0, y: 0 }],
    [{ x: -100, y: -50 }, { x: -200, y: 0 }, { x: -300, y: -100 }, { x: 0, y: 0 }],
    [{ x: 100, y: 50 }, { x: 200, y: 0 }, { x: 300, y: 100 }, { x: 0, y: 0 }],
  ];

  const tlpage2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      markers: false,
      start: "top 25%",
      end: "top -10%",
      scrub: true,
      pin: true,
    },
  });

  // Animate text within #page2right h1
  const page2h1 = document.querySelector("#page2 #page2right h1");
  const page2h1Text = page2h1.textContent;
  const splittedText = page2h1Text.split("");
  let cluttered = "";
  splittedText.forEach(function(elem) {
    cluttered += `<span>${elem}</span>`;
  });
  page2h1.innerHTML = cluttered;

  tlpage2.to("#page2 #page2right h1 span", {
    color: "black",
    stagger: 0.1,
  });

  // Animate polaroids with motion paths
  polaroids.forEach((polaroid, index) => {
    const pathIndex = index % paths.length;
    tlpage2.fromTo(polaroid, {
      motionPath: {
        path: paths[pathIndex],
        curviness: 1.25,
        autoRotate: false,
      },
      rotate: () => gsap.utils.random(-30, 30),
      scale: 0.5,
      opacity: 0,
    }, {
      motionPath: {
        path: paths[pathIndex],
        curviness: 1.25,
        autoRotate: false,
      },
      duration: 2.5,
      rotate: 0,
      scale: 1,
      opacity: 1,
      delay: index * 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(polaroid, {
          rotate: gsap.utils.random(-15, 15),
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
    });
  });
});


// page1 =>
  var page1swiper = new Swiper("#page1 .page1swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      duration:2,
      disableOnInteraction: false,
    },  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },  
  });  


  //page3 text effect animation
  var elems=document.querySelectorAll("#page3 .elem")
elems.forEach(function(elem){
    var index1=0;
    var index2=0;
    var index3=0;
    

    var animating=false;
    var h1s=elem.querySelectorAll("#page3 h1")
    var p1s=elem.querySelectorAll("#page3 p")
    var buttons=elem.querySelectorAll("#page3 button")



    document.querySelector("#page3").addEventListener("click",function(){
   
    
            if(!animating){
                animating=true

            gsap.to(h1s[index1],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    gsap.set(this._targets[0],{top:"100%"});
                    animating=false;
                }
            }
        )
        gsap.to(p1s[index2],{
            top:"-=100%",
            ease:Expo.easeInOut,
            duration:1,
            onComplete:function(){
                gsap.set(this._targets[0],{top:"100%"});
                animating=false;
            }
        }
    )
    gsap.to(buttons[index3],{
      top:"-=100%",
      // rotate:"0deg",
      ease:Expo.easeInOut,
      duration:1,
      onComplete:function(){
          gsap.set(this._targets[0],{top:"100%"});
          animating=false;
      }
  }
  )
  
  
           index1===h1s.length-1?(index1=0): index1++;
           index2===p1s.length-1?(index2=0): index2++;
           index3===buttons.length-1?(index3=0): index3++;


            gsap.to(h1s[index1],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1
            })
            gsap.to(p1s[index2],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1
            })
            gsap.to(buttons[index3],{
              top:"-=100%",
              // rotate:"0deg",
              ease:Expo.easeInOut,
              duration:1
          })
        }
        })


})


//last2nd page animation

var elementconatiner2 = document.querySelector("#secondlastpage #element-container")
    elementconatiner2.addEventListener("mouseenter",function(){
        gsap.to("#image-div",{
            opacity:1
        })
    })
    elementconatiner2.addEventListener("mouseleave",function(){
        gsap.to("#image-div",{
            opacity:0
        })
    })
    
    var AllElements = document.querySelectorAll("#secondlastpage .element")
    var  imgdiv = document.querySelector("#secondlastpage #image-div")
    var movingImage = document.querySelector("#secondlastpage #image-div img")
    AllElements.forEach(function(elem){
      elem.addEventListener("mouseenter",function(){
        let image = elem.getAttribute("data-image")
        movingImage.setAttribute("src",image)
      })
            elementconatiner2.addEventListener("mousemove",function(dets){
                gsap.to("#image-div",{
                   left:`${dets.x-elementconatiner2.getBoundingClientRect().x}`,
                   top:`${dets.y-elementconatiner2.getBoundingClientRect().y}`,
                   duration:0.3,
                   ease:"power1.out"
        })
      })
  })






  
//page6 review page swiper
var tl = gsap.timeline({
  scrollTrigger:{
   scroller:'#main',
   trigger:'#page6',
   start:'top -10%',
   end:"top 50%",
   pin:true,
   scrub:5
  }
})
tl
.to('.containerlast',{
   left:'-100%',
   duration:2
})

var tl2 = gsap.timeline({
   scrollTrigger:{
    scroller:'#main',
    trigger:'.containerlast',
    start:'top 50%',
    scrub:3
   }
})
tl2
.to('#page6 .box img',{
    left:'10px',
    transform:'translate(-10px) scale(1.012)'

})


//page7 animation ingredients story
document.addEventListener('DOMContentLoaded', () => {
  tl7.from("#ing1text h1", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power1.out"
  });

  tl7.from("#ing1text p", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power1.out",
    delay: 0.5
  });
});


var tl7=gsap.timeline({
  scrollTrigger:{
      trigger:"#page7",
      scroller:"#main",
      markers:false,
      start:"top -40%",
      end:"top -100%",
      scrub:true,
      pin:true
  }

})
tl7.from("#ing1",{
  x:-500,
  rotate:-45,
  duration:1,
  opacity:0,
  
})
tl7.from("#ing2",{
  x:500,
  rotate:45,
  duration:1,
  opacity:0,
  
})
tl7.from("#ing3",{
  x:500,
  rotate:45,
  duration:1,
  opacity:0,
  
})
  var page5swiper = new Swiper("#page5 .page5swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // When window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // When window width is >= 1024px
      1024: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




// Initialize Swiper
// Initialize Swiper
var swiper8 = new Swiper("#page4 .page4Swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const arrr=[
  {productImage:"https://media.istockphoto.com/id/470731269/photo/scoops-of-mango-sorbet.webp?b=1&s=170667a&w=0&k=20&c=bgm0vYICaCE0lGxKh19LVCwEeTVYvy0NJmcEoHPzeNY=",
  productName:"MANGO ICECREAM",
  productDes:"Ditch the ordinary, scoop up extraordinary! Our mango ice cream is a taste explosion of Alphonso mangoes, a luxurious treat that's perfect for mango lovers who crave the real deal",
  seasonImage:"./summer4.jpg"
},
{
  productImage:"https://www.aycofarms.com/wp-content/uploads/2018/04/Pineapple-Icecream-01-01.jpg",
  productName:"PINEAPPLE ICECREAM",
productDes:" Pucker up for perfection! Our pineapple ice cream is the perfect balance of sweet and tart, a refreshing treat that will transport you to a beachside bliss.",
seasonImage:"./winter5.jpg ",
season:"Winter"
} ,

{
  productImage:"https://media.istockphoto.com/id/520982830/photo/ice-cream-in-a-coconut.webp?b=1&s=170667a&w=0&k=20&c=zDe-yRwaanR4e2AAxWH-SxCKVuNCYklGvuIgMOq4nKs=",
  productName:"COCONUT ICECREAM",
  productDes:"Naturals is a pioneer of the ‘Tender Coconut’ flavour in the country. As an original flavour from Naturals, it is a huge favourite among ice cream lovers. It’s made with real malai from tender coconuts that are sourced from Kerala and Karnataka. You just can’t have enough of this delicious flavour!",
  seasonImage:"./summer4.jpg",
  season:"Summer"
},

{
  productImage:"https://media.istockphoto.com/id/1345295716/photo/a-scoop-of-grape-flavored-purple-ice-cream-served-in-a-white-bowl-close-up-of-gastronomic.webp?b=1&s=170667a&w=0&k=20&c=43PuOivpr6pTSjliBobYnDF7Ty-2jRe7oZBqx8Aqj-w=",
  productName:"BLACK GRAPES ICECREAM",
  productDes:" Expect a taste of heaven in every bite of our original Black Grapes ice cream. Its amazing taste will leave you craving for more!",
  seasonImage:"https://img.freepik.com/premium-photo/little-girl-sitting-rock-rain-she-is-wearing-yellow-raincoat-red-boots-holding-red-umbrella_14117-419180.jpg?w=1380 ",
  season:"Monsoon"
},
{
  productImage:"https://flockler.com/thumbs/sites/192/no-churn-pomegranate-ice-cream_s1500x0_q80_noupscale.jpg",
  productName:"POMEGRANATE ICECREAM",
  productDes:" Beyond the ordinary lies extraordinary flavor. Our pomegranate ice cream is a symphony of sweet and tart, with a beautiful pink hue that's as delightful to see as it is to savor",
  seasonImage:"./autum2.jpg ",
  season:"AUTUMN"
},
  {
    productImage:"https://i.pinimg.com/236x/c5/45/21/c54521d2f97f5d3283818ea4225cd720.jpg",
    productName:"KIWI ICECREAM",
    productDes:" This delicious flavour will transport you to another world. The Kiwi is imported from New Zealand which is known for its genuine taste that come together in our original ice cream, you’re bound to get lost in the taste!.",
    seasonImage:"./winter5.png ",
    season:"Winter"
  }  
  
]

// Generate slides and append to Swiper
const swiperWrapper = document.querySelector("#page4 .swiper-wrapper");
swiperWrapper.innerHTML = arrr.map(product => `
  <div class="swiper-slide">
    <img src="${product.productImage}" alt="${product.productName}">
  </div>
`).join('');

// Update product details on slide change
const productContainer = document.getElementById("productname");
const descriptionContainer = document.getElementById("description");

swiper8.on('slideChange', function () {
  const currentSlideIndex = this.activeIndex;
  const effectiveIndex = currentSlideIndex % arrr.length;
  const product = arrr[effectiveIndex];

  productContainer.textContent = product.productName;
  descriptionContainer.textContent = product.productDes;

  if (product.seasonImage) {
    document.getElementById("page4").style.backgroundImage = `url(${product.seasonImage})`;
  }
});

// Navigation buttons
document.getElementById("prevButton").addEventListener("click", () => swiper8.slidePrev());
document.getElementById("nextButton").addEventListener("click", () => swiper8.slideNext());
