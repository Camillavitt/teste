window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function toggleMenu() {
    const desktopMenu = document.querySelector('.desktop-menu');
    desktopMenu.classList.toggle('active');
}