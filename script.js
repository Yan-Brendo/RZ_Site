var divText = document.getElementById('move-text')

//expandir o menu

function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
}


const myObserver = new IntersectionObserver ( (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.efect')

elements.forEach((element) => myObserver.observe(element))

window.addEventListener("scroll", function(){
    var header = document.querySelector('#cabecalho')
    header.classList.toggle('rolagem',window.scrollY > 0)
})

// alert

const alertLink = document.getElementById('alert-link');

//add um evento de clique 

alertLink.addEventListener('click', function(event) {
    event.preventDefault();

    alert('Este é um site particular e privado. O acesso não é permitido.')
})








