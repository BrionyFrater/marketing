// $(document).ready(function () {
  
//       lucide.createIcons();
    
// });

document.addEventListener("DOMContentLoaded", (event) => {
      lucide.createIcons();
      gsap.registerPlugin(ScrollTrigger);

      const toggle = document.querySelector(".burger");
      const nav = document.querySelector("nav");
      
      let isOpen = false;


      gsap.set(".menu-item p", {y:255});
       
      const timeline = gsap.timeline({paused:true});
      const pgTimeline = gsap.timeline()


      pgTimeline.from("h1" ,{
            opacity: 0,
            duration: 1.2,
            x: -300,
            ease: "power4.inOut"
      }, 0);

      pgTimeline.from(".banner-txt p" ,{
            opacity: 0,
            duration: 1.5,
            y: 100,
            stagger: 0.2,
            ease: "power2.inOut"
      }, 0.2);

      gsap.from(".icon-box" ,{
            scrollTrigger: {
                  trigger: ".icon-box",
                  start: "top 60%",
                  end: "top 30%",
                  toggleActions: "play none none reverse"
            },
            opacity: 0,
            duration: 1,
            y: 30,
            stagger: 0.3,
            ease: "power4.inOut"
      });

      gsap.from(".how-1" ,{
            scrollTrigger: {
                  trigger: "#how",
                  start: "top 60%",
                  end: "top 30%",
                  toggleActions: "play none none reverse"
            },
            opacity: 0,
            duration: 1,
            x: -100,
            ease: "expo.out"
      });

      gsap.from(".how-2" ,{
            scrollTrigger: {
                  trigger: "#how",
                  start: "top 60%",
                  end: "top 30%",
                  toggleActions: "play none none reverse"
            },
            opacity: 0,
            duration: 1,
            x: 30,
            ease: "expo.out"
      });

      gsap.from("#why" ,{
            scrollTrigger: {
                  trigger: "#why",
                  start: "top 60%",
                  end: "top 30%",
                  toggleActions: "play none none reverse"
            },
            opacity: 0,
            duration: 1,
            y: 60,
            ease: "expo.out"
      });

     

      timeline.to(".overlay", {
            duration: 0.5,
            ease: "power4.inOut",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            
      });

      timeline.to(".menu-item p", {
            duration: 0.5,
            y: 0,
            stagger: 0.1,
            ease: "power4.out"

      }, "-=1");

      toggle.addEventListener('click', function(){
            
            if (isOpen){
                  timeline.reverse();

                  setTimeout(() => {
                        nav.classList.remove('mix-blend-multiply');
                  }, 500);
                  
                 
                  
            } else {
                  timeline.play();
                  nav.classList.add('mix-blend-multiply');
                  
            }

            isOpen = !isOpen

            
      })

      const menuItems = document.querySelectorAll('.menu-item p');

      // Add click event listener to each menu-item p
      menuItems.forEach(function (item) {
            item.addEventListener('click', function () {
                  timeline.reverse();
                  setTimeout(function(){
                        nav.classList.remove('mix-blend-multiply');
                  }, 500)
                  toggle.classList.remove('active')
                  isOpen = false;
            });
      });




});