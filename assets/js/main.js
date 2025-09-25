/* NAVIGATION BAR FUNCTION */
    function myMenuFunction(){
        var menuBtn = document.getElementById("MyNavMenu");

        if(menuBtn.className === "nav-menu"){
            menuBtn.className += " responsive";
            // Add event listener to close the menu when clicking outside
            document.addEventListener('click', closeMenuOnClickOutside);
        } else{
            menuBtn.className = "nav-menu";
            // Remove event listener when menu is closed
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }

/* Download CV */
    function downloadCV() {
        // Replace with the actual path to your CV PDF
        const cvUrl = './assets/CV for website.pdf'; // Update this path
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV - MUHAMMAD AVI MAJID KAAFFAH'; // Optional: specify the name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Function to close the menu when clicking outside
    function closeMenuOnClickOutside(event) {
        var menuBtn = document.getElementById("MyNavMenu");
        var navButton = document.querySelector('.nav-menu-btn');

        // Check if the click was outside the menu and the menu button
        if (!menuBtn.contains(event.target) && !navButton.contains(event.target)) {
            menuBtn.className = "nav-menu"; // Close the menu
            document.removeEventListener('click', closeMenuOnClickOutside); // Clean up the event listener
        }
    }
    
/* ADD SHADOW ON NAV BAR WHILE SCROLLING */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
        const navHeader = document.getElementById("header");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else{
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }
/* TYPING EFFECT */

/* ##SCROLL REVEAL ANIMATION## */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    })
/* HOME */
    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social-icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})
/* PROJECT BOX */
    sr.reveal('.project-box',{interval: 200})

/* HEADINGS */
    sr.reveal('.top-header',{})

/* ABOUT INFO & CONTACT INFO */
    const srLeft = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 2000,
        reset: true
    })

    srLeft.reveal('.about-info',{delay: 100})
    srLeft.reveal('.photo',{delay: 100})
    srLeft.reveal('.about-skills',{delay: 100})

/* CERTIFICATIONS*/
    const srRight = ScrollReveal({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    })

    srRight.reveal('.certifications-container',{delay: 100})
    // srRight.reveal('.form-control',{delay: 100})

/* CHANGE ACTIVE LINK */

    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            
            } else {

                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }

    window.addEventListener('scroll', scrollActive)


/* HEADINGS */
