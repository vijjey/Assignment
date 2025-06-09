// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.maincontainer'),
//     smooth: true
// });

let t1 = gsap.timeline()

t1.from('.navbar',{
    opacity:0,
    y:-70,
    duration:0.9,
})

t1.from('.right',{
  opacity:0,
  x:-400,
  duration:1,
})

t1.from('.left',{
    opacity:0,
    duration:1.5,
})
 
t1.from('.about-section',{
    
})


// navbar click handle


const main = document.querySelector('.maincontainer')
const sidebar = document.createElement('div');
const element1 = document.createElement('h4');
const element2 = document.createElement('h4');
const element3 = document.createElement('h4');
const element4 = document.createElement('h4');

element1.className="sidebar-text";
element1.innerText="home";
sidebar.appendChild(element1)

element2.className="sidebar-text";
element2.innerText="About";
sidebar.appendChild(element2)

element3.className="sidebar-text";
element3.innerText="services";
sidebar.appendChild(element3)

element4.className="sidebar-text";
element4.innerText="contact";
sidebar.appendChild(element4)

console.log(element1)

const menu = document.querySelector('.menu');
menu.addEventListener('click',()=>{
  console.log('clicked')
  sidebar.className='sidebar';
  sidebar.style.display="block";
  main.appendChild(sidebar);
   console.log(sidebar)

})

sidebar.addEventListener('click',()=>{
  sidebar.style.display="none";
})
