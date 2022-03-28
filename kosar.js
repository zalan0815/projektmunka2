function kosarba(a){
    if (a == "kosarba13") {
        localStorage.clear;
        localStorage.setItem("kosar", 13);
    }
    if (a == "kosarba13pro") {
        localStorage.clear;
        localStorage.setItem("kosar", 14);
    }
    if (a == "kosarba13promax") {
        localStorage.clear;
        localStorage.setItem("kosar", 15);
    }
    if (a == "kosarba13mini") {
        localStorage.clear;
        localStorage.setItem("kosar", 12);
    }
    if (a == "kosarbaairpods") {
        localStorage.clear;
        localStorage.setItem("kosar", 11);
    }
    if (a == "kosarbaapplewatch") {
        localStorage.clear;
        localStorage.setItem("kosar", 10);
    }
}

function teszt(){
    console.log(localStorage.getItem("kosar"));
}

function torles(a){
    document.getElementById(13).classList.remove("d-block");
    document.getElementById(13).classList.add("d-none");
    localStorage.setItem("kosar", 0);
    location.reload();
}

function kosarad() {
    if(localStorage.getItem("kosar") == 13){
        document.getElementById(13).classList.remove("d-none");
        document.getElementById(13).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 14){
        document.getElementById(14).classList.remove("d-none");
        document.getElementById(14).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 15){
        document.getElementById(15).classList.remove("d-none");
        document.getElementById(15).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 12){
        document.getElementById(12).classList.remove("d-none");
        document.getElementById(12).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 11){
        document.getElementById(11).classList.remove("d-none");
        document.getElementById(11).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 10){
        document.getElementById(10).classList.remove("d-none");
        document.getElementById(10).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 0){
        document.getElementById(0).classList.remove("d-none");
        document.getElementById(0).classList.add("d-block");
        document.getElementById('gomb').classList.remove("d-block");
        document.getElementById('gomb').classList.add("d-none");
    }
}

window.onload = kosarad;

function megrendeles(){
    window.alert("Sikeresen megrendelve!")
}