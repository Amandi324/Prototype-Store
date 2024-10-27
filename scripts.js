/*==================== Toggle Icon Navbar ====================*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== Scroll Sections Active Link ====================*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const scrollPosition = window.scrollY;

    // Update active link on scroll
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 150;
        const sectionHeight = sec.offsetHeight;
        const sectionId = sec.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${sectionId}"]`).classList.add('active');
            });
        }
    });

    /*==================== Sticky Navbar ====================*/
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollPosition > 100);

    /*==================== Close Navbar on Link Click (for Mobile) ====================*/
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/*==================== Smooth Scroll for Internal Links ====================*/
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== Close Navbar on Outside Click (Mobile Enhancement) ====================*/
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});
