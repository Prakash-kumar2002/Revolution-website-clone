

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

var loader = document.querySelector("#preloader");
window.addEventListener("load",function(){
  loader.style.display = "none"
})


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    start: "50% 50%",
    end: "100% 50%",
    scroller: `#main`,
    scrub: 5,
    duration: 1,
    pin: true,
  },
});

tl.to(".img", {
  width: "100vw",
  height: "100vh",
});
gsap.from("#page1 .dot-div,.navbar",{
  opacity:0,
  duration:1,
  y:-100,
  scurb:true,
  ease: Expo.easeInOut,
})
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "20%",
    end: "bottom 100%",
    scroller: `#main`,
    scrub: 16,
    duration: 5,
  },
});

tl.to(".overlay", {
  ease: Expo.easeInOut,
  backgroundColor: "#142D35",
});


gsap.from("#page2 .txt1>.brand>.left", {
  scrollTrigger: {
      trigger: "#page2 .txt1>.brand>.left",
      start: "top 55%",
      scroller: `#main`,
      scrub: .5
  },
  opacity: 0,
  x:-100,
  ease: Expo.easeInOut,
})

gsap.from("#page2 .txt1>.brand>.right>h4", {
    scrollTrigger: {
        trigger: "#page2 .txt1>.brand>.right>h4",
        start: "top 90%",
        scroller: `#main`,
        scrub: true
    },
    opacity: 0,
    duration: 1,
    x:100,
    ease: Expo.easeInOut,
})

gsap.from("#page2 h2", {
  scrollTrigger: {
      trigger: "#page2 h2",
      start: "top 96%",
      scroller: `#main`,
      scrub: .5
  },
  opacity: 0,
  y:20,
  ease: Expo.easeInOut,
})

gsap.from("#page2 .image-div>.img1", {
  scrollTrigger: {
      trigger: "#page2 .image-div>.img1",
      start: "top 96%",
      scroller: `#main`,
      scrub: .5
  },
  opacity: 0,
  x:-20,
  ease: Expo.easeInOut,
})

gsap.from("#page2 .image-div>.video", {
  scrollTrigger: {
      trigger: "#page2 .image-div>.video",
      start: "top 96%",
      scroller: `#main`,
      scrub: .5
  },
  opacity: 0,
  x:20,
  ease: Expo.easeInOut,
})

gsap.from("#page2 .image-div>.img2", {
  scrollTrigger: {
      trigger: "#page2 .image-div>.img2",
      start: "top 100%",
      scroller: `#main`,
      scrub: .5
  },
  opacity: 0,
  y:100,
  ease: Expo.easeInOut,
})



gsap.from("#page3 .yerbi>h1", {
  scrollTrigger: {
      trigger: "#page3 .yerbi>h1",
      start: "top 95%",
      scroller: `#main`,
      scrub: true
  },
  opacity: 0,
  duration: 1,
  y:20,
  ease: Expo.easeInOut,
})

gsap.from("#page5 .txt2>h4,h3", {
  scrollTrigger: {
      trigger: "#page3 .txt2>h4,h3",
      start: "top 95%",
      scroller: `#main`,
      scrub: true
  },
  opacity: 0,
  duration: 1,
  stagger:0.5,
  y:100,
  ease: Expo.easeInOut,
})

gsap.from("#page5 .image-div2>.image,.video2", {
  scrollTrigger: {
      trigger: "#page5 .image-div2>.image,.video2",
      start: "top 140%",
      scroller: `#main`,
      scrub: true
  },
  opacity: 0,
  duration:1,
  y:100,
  ease: Expo.easeInOut,
})

gsap.from("#page5>.baby>h1", {
  scrollTrigger: {
      trigger: "#page5>.baby>h1",
      start: "top 80%",
      scroller: `#main`,
      scrub: true,
    },
    opacity:0,
    stagger:0.5,
  y:20,
  ease: Expo.easeInOut,
})

gsap.from("#page7>.future-text>.hold>h1", {
  scrollTrigger: {
      trigger: "#page7>.future-text>.hold>h1",
      start: "top 90%",
      scroller: `#main`,
      scrub: true,
    },
    opacity:0,
    stagger:0.5,
  y:20,
  ease: Expo.easeInOut,
})

gsap.from("#page7>.future-text>h5,p", {
  scrollTrigger: {
      trigger: "#page7>.future-text>h5,p",
      start: "top 110%",
      scroller: `#main`,
      scrub: true,
    },
    opacity:0,
  y:20,
  ease: Expo.easeInOut,
})

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

