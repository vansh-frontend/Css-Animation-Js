// gsap.to('#box',{
//     x:1300,
//     duration:2,
//     delay:1,
//     backgroundColor:'green',
//     rotate:360,
//     borderRadius:'50%',
//     scale:0.5

// })



// gsap.from('h1',{
//     y:50,
//     duration:1,
//     opacity:0,
//     delay:1,
//     stagger:0.5

// })



// gsap.to("#circle",{
//     x:1200,
//     borderRadius:'10px',
//     duration:2.5,
//     delay:1,
//     rotate:360,
//     backgroundColor:'yellow',
//     repeat:-1,
//     yoyo:true

// })


var tl = gsap.timeline();

tl.to('#box1',{
    x:1300,
    duration:2.5,
})


tl.to('#box2',{
    x:1300,
    duration:2.5,
    rotate:360
})


tl.to('#box3',{
    x:1300,
    duration:2.5,
    rotate:-360,
})
