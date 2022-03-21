var termek = 0;

function kosarba(a){
    if (a = "kosarba13") {
        termek = 13;
    }
    if (a = "kosarba13pro") {
        termek  = 14;
    }
    if (a = "kosarba13promax") {
        termek = 15;
    }
    if (a = "kosarba13mini") {
        document.getElementById('kosar13mini').classList.remove('d-none');
        document.getElementById('kosar13mini').classList.add('d-block');
    }
}
function teszt(termek){
    document.getElementById(termek).classList.remove('d-none');
    document.getElementById(termek).classList.add('d-block');
}

window.onload = show();

function show(termek){
    document.getElementById(termek).classList.remove('d-none');
    document.getElementById(termek).classList.add('d-block');
}