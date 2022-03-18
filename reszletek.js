function reszletek(a){
    document.getElementById(a).classList.remove('d-none');
    document.getElementById(a).classList.add('d-block');
}
function close(a){
    document.getElementById(a).classList.remove('d-block');
    document.getElementById(a).classList.remove('d-none');
}