gsap.from("#page1 #box",{
    scale:0,
    rotate:360,
    duration:1,
    delay:1
})

gsap.from("#page2 #box",{
    scale:0,
    rotate:360,
    duration:1,
    // scrollTrigger:'#page2 #box' 
    scrollTrigger:{
        trigger:'#page2 #box',
        scroller:'body',
        markers:true,
        start:"top 55% ",
        end:"top 30%",
        scrub:1

    }
})

gsap.from("#page3 #box",{
  x:600,
  duration:2,
    scrollTrigger:{
        trigger:'#page3 #box',
        scroller:'body',
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true,
        // pin:true

    }
})
