function reszletek(a){
    document.getElementById(a).classList.remove('d-none');
    document.getElementById(a).classList.add('d-block');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}
function becsuk(a){
    document.getElementById(a).classList.remove('d-block');
    document.getElementById(a).classList.add('d-none');
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
}