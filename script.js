//active menu button//
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}
// lets remove menu bar//
window.onscroll = () =>
{
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}
ScrollReveal({
    reset:true,
    distance:'100px',
    duration:2000,
    delay:200
});
// scroll reveal//
ScrollReveal().reveal('.home-bio h1, .about-resume', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { origin: 'right' });
ScrollReveal().reveal('.home-bio p, heading', { origin: 'top' });
ScrollReveal().reveal('.progile-pic, .about-items, .skills-items, .projects-items, .form', { origin: 'bottom' });

// typing animation//
const animText = new Typed ('.animated-text',{
strings: ['webdeveloper', ' Smart Vicky', ' Software Engineer'],
backSpeed: 100,
typedSpeed: 100,
backDelay: 600,
loop: true
});


document.onkeydown = function(a)
    {
        if(a.ctrlKey && a.KeyCode==85)
        {
            alert('hello')
            return false;
        }
        else if(b.ctrlKey && b.shiftKey && b.keyCode==73)
         {
            return false;
        }
    }