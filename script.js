let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper(".courses-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});





//   link jenis Cybercrime
document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('1-slide');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://id.wikipedia.org/wiki/Pengelabuan';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('2-slide');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://id.wikipedia.org/wiki/Pengelabuan';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('3-slide');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://id.wikipedia.org/wiki/Penguntitan_dunia_maya';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('4-slide');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://id.wikipedia.org/wiki/Spam';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('5-slide');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://id.wikipedia.org/wiki/Kejahatan_siber#:~:text=sebagai%20kejahatan%20perbankan.-,Penipuan%20OTP,milik%20korban%20kepada%20pelaku%20kejahatan.';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('6-slide');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://pengasih.kulonprogokab.go.id/detil/983/awas-pinjol-ilegal-sederet-ciri-cirinya-dibuat-oleh-ryo-86';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('link-data-statistik');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://inet.detik.com/security/d-7054249/statistik-kejahatan-siber-di-indonesia-selama-2023';
    });
});



// link trik&trip
document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('b1');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://www.unida.ac.id/teknologi/artikel/7-cara-mudah-mengenali-situs-web-palsu-agar-terhindar-dari-scam.html';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('b2');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://support.google.com/mail/answer/8253?hl=id';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('b3');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://stripe.com/resources/more/secure-payment-systems-explained';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('b4');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://edu.gcfglobal.org/en/tr_id-internet-safety/membuat-kata-sandi-password-yang-kuat/1/';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('b5');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://support.google.com/accounts/answer/185839?hl=id&co=GENIE.Platform%3DDesktop';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const phishingSlide = document.getElementById('b6');
    
    phishingSlide.addEventListener('click', function() {
        window.location.href = 'https://www.hp.com/ca-en/shop/offer.aspx?p=the-importance-of-updating-your-software-and-hardware-regularly';
    });
});
