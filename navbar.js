function openNavbar() {
    document.getElementById('navbar').style.display = 'flex';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeNavbar() {
    document.getElementById('navbar').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
}

