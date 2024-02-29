document.getElementById('toggleBtn').addEventListener('click', function() {
    var header = document.getElementById('header');
    var toggleBtn = document.getElementById('toggleBtn');
    var mainContent = document.getElementById('main');
    var section = document.getElementById('section');

    if (window.innerWidth <= 710) { 
        if (header.classList.contains('closed')) {
            header.style.top = '0';
            header.classList.remove('closed');
            toggleBtn.innerHTML = '&#10006;';
        } else {
            header.style.top = '-100%';
            header.classList.add('closed');
            toggleBtn.innerHTML = '&#9776;';
        }
    } else {
        if (header.classList.contains('closed')) {
            header.style.left = '0';
            header.classList.remove('closed');
            toggleBtn.innerHTML = '&#10006;';
            toggleBtn.style.left = '0px';
            mainContent.style.marginLeft = '200px';
            section.style.margin = '0px 60px';
        } else {
            header.style.left = '-300px';
            header.classList.add('closed');
            toggleBtn.innerHTML = '&#9776;';
            toggleBtn.style.left = ''; 
            mainContent.style.marginLeft = '0';
            section.style.margin = '0px 160px';
            
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var mainContent = document.getElementById('main');
    var section = document.getElementById('section');

    if (window.innerWidth > 710) { 
        section.style.margin = '0px 160px';
    }
});

