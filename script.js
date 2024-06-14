window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Détecter le mode de couleur préféré de l'utilisateur
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    // Observer les changements de préférences de couleur
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    });

    // Script pour ajouter la classe 'active' aux liens de navigation
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('header').style.display = 'none'; // Masquer le header
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('header').style.display = 'block'; // Afficher le header
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    // Détecter le lien actif
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }

        // Ajoutez un écouteur pour les hover transitions
        link.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });

        link.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
});