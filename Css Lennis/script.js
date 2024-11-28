// const lenis = new Lenis();

// function raf(time){
//      lenis.raf(time)
//      requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf);



// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log("scrolling");
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf); 