const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part1",
    start: "50% 50%",
    end: "150% 50%",
    // markers:true,
    scrub: true,
    pin: true,
  },
});

tl.to(
  ".rotate-div",
  {
    rotate: -15,
    scale: 0.8,
    x: "-1%",
  },
  "a"
);
tl.to(
  "#row2",
  {
    marginTop: "-15%",
  },
  "a"
);
tl.to(
  "#row3",
  {
    marginTop: "-19%",
  },
  "a"
);
tl.to(
  "#row4",
  {
    marginTop: "-18%",
  },
  "a"
);
tl.to(
  "#row5",
  {
    marginTop: "-19%",
  },
  "a"
);
tl.to(
  ".overlay h1",
  {
    opacity: "1",
  },
  "a"
);
tl.to(
  ".overlay",
  {
    backgroundColor: "#000000b4",
  },
  "a"
);
tl.from(
  ".scrolling",
  {
    width: 0,
    opacity: 0,
  },
  "a"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part2",
    start: "8% 70%",
    end: "50% 50%",
    // markers:true,
    scrub: true,
    // pin:true,
  },
});

tl2.to(".rounded-div-wrapper", {
  height: "0%",
  marginTop: "0",
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "10% 50%",
    end: "50% 50%",
    // markers:true,
    scrub: 3,
    // pin:true
  },
});

tl3.to(
  ".two .text-area-hover h1",
  {
    width: "100%",
    scrub: true,
  },
  "b"
);
tl3.to(
  ".two .text-area-hover h2",
  {
    width: "100%",
    scrub: true,
    // pin:true
  },
  "b"
);

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part4",
    start: "40% 50%",
    end: "200% 50%",
    // markers: true,
    scrub: true,
    pin: true,
  },
});

tl4.to('#c1',{
  marginTop:'2%',
  opacity:'1'
},'1st')
tl4.to('#c2',{
  opacity:'1',
},'1st')
tl4.to('#c1',{
  marginTop:'-100%',
  opacity:'0'
},'1st')
tl4.to('#c3',{
  opacity:'1',
},'2nd')
tl4.to('#c2',{
  opacity:'0'
},'2nd')
tl4.to('#c1',{
  marginTop:'-220%',
},'2nd')
tl4.to('#c4',{
  opacity:'1',
},'3rd')
tl4.to('#c3',{
  opacity:'0'
},'3rd')
tl4.to('#c1',{
  marginTop:'-320%',
},'3rd')
tl4.to('#c5',{
  opacity:'1',
},'4rd')
tl4.to('#c4',{
  opacity:'0'
},'4rd')
tl4.to('#c1',{
  marginTop:'-400%',
},'4rd')
tl4.to('#c6',{
  opacity:'1',
},'5th')
tl4.to('#c5',{
  opacity:'0'
},'5th')
tl4.to('#c1',{
  marginTop:'-480%',
},'5th')


tl4.to('.cir-part4',{
  rotate:'90'
},'1st')
tl4.to('.cir-part4',{
  rotate:'180'
},'2nd')
tl4.to('.cir-part4',{
  rotate:'250'
},'3rd')
tl4.to('.cir-part4',{
  rotate:'300'
},'4rd')
tl4.to('.cir-part4',{
  rotate:'340'
},'5th')

tl4.to('.cir-part4',{
  marginLeft:'100%',
  rotate:'365'
})

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part5",
    start: "15% 50%",
    end: "100% 50%",
    // markers:true,
    scrub: true,
    // pin:true
  },
});

tl5.to(
  ".part5 .text-area-hover h1",
  {
    width: "100%",
    scrub: true,
  },
  "c"
);
tl5.to(
  ".text-area-hover h2",
  {
    width: "100%",
    scrub: true,
    // pin:true
  },
  "c"
);

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part6",
    start: "0% 50%",
    end: "20% 70%",
    // markers:true,
    scrub: 3,
    // pin:true
  },
});

tl6.to('.rounded-div-wrapper-6',{
  height:'0%',
  marginTop:'0%'
})
 
let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part7",
    start: "50% 50%",
    end: "300% 50%",
    // markers:true,
    scrub: 1,
    pin:true
  },
});

tl7.to('#demo',{
  bottom:'7%'
},'c')

tl7.to('.our-work-txt-div',{
  height:'60vh'
},'c')
tl7.to('.our-work-txt',{
  height:'50vh'
},'c')
tl7.to('#our',{
  left:'10%',
  top:'10%'
},'c')
tl7.to('#work',{
  left:'80%',
  bottom:'10%'
},'c')
tl7.to('.scroll-img',{
  marginTop:'-200%'
})

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".top-head",
    start: "0% 50%",
    end: "30% 50%",
    // markers:true,
    scrub: 1,
    // pin:true
  },
});
tl8.from('.top-head',{
  opacity:'.4'
});

function load() {
  let load = document.querySelector("#loader");
  setTimeout(function () {
    load.style.transform = "translateY(-100%)";
  }, 5000);
}
load();
