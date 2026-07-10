
function hidemenu(){
    let menu =document.querySelectorAll("#menu");
gsap.registerPlugin(ScrollTrigger);

gsap.to(menu, {
 opacity:0,

  scrollTrigger: {
    trigger: "body",
    start: "top -20%",
    toggleActions: "play none none reverse"
    
   
   
  }
});
}
hidemenu();


document.addEventListener('DOMContentLoaded', () => {
  const box   = document.getElementById('slidebox');
  const track = document.getElementById('slides');
  const realSlides = gsap.utils.toArray(track.children);
  if (realSlides.length <= 1) return;
 
 
  const clone = realSlides[0].cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  track.appendChild(clone);
 
  const total = realSlides.length;      // number of genuine slides
  const holdTime = 3000;                // ms each image stays fully visible
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const moveDuration = reduceMotion ? 0 : 0.9;
 
  let index = 0;
  let timerId = null;
 
  const slideHeight = () => box.clientHeight; // box height == each image's height
 
  function goToNext() {
    index++;
    gsap.to(track, {
      y: -index * slideHeight(),
      duration: moveDuration,
      ease: 'power2.inOut',
      onComplete() {
        if (index === total) {           // we've landed on the clone
          gsap.set(track, { y: 0 });      // snap back to the real first slide
          index = 0;
        }
      }
    });
  }
 
  function start() {
    if (timerId) return;
    timerId = setInterval(goToNext, holdTime);
  }
  function stop() {
    clearInterval(timerId);
    timerId = null;
  }
 
  start();
 
  
  window.addEventListener('resize', () => {
    gsap.set(track, { y: -index * slideHeight() });
  });
 
  // Pause while the tab is backgrounded so it isn't animating unseen.
  document.addEventListener('visibilitychange', () => {
    document.hidden ? stop() : start();
  });
 
  // Pause on hover so a visitor can actually look at an image.
  box.addEventListener('mouseenter', stop);
  box.addEventListener('mouseleave', start);
});


let Confidence=document.querySelector("#confidence");
let arr=Confidence.textContent.split("");
arr.forEach(elem => {
   
    let spans=`<span>${elem}</span>`
    
});
gsap.to(Confidence,{
    
})