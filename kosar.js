function kosarba(a){
    // apple
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
    // samsung
    if (a == "s22") {
        localStorage.clear;
        localStorage.setItem("kosar", 22);
    }
    if (a == "s22u") {
        localStorage.clear;
        localStorage.setItem("kosar", 23);
    }
    if (a == "zfold") {
        localStorage.clear;
        localStorage.setItem("kosar", 24);
    }
    if (a == "zflip") {
        localStorage.clear;
        localStorage.setItem("kosar", 25);
    }
    if (a == "samsungwatch") {
        localStorage.clear;
        localStorage.setItem("kosar", 21);
    }
    if (a == "buds") {
        localStorage.clear;
        localStorage.setItem("kosar", 20);
    }
    // xiaomi
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
    document.getElementById(a).classList.remove("d-block");
    document.getElementById(a).classList.add("d-none");
    localStorage.setItem("kosar", 0);
    location.reload();
}

function kosarad() {
    // apple
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
    // samsung
    if(localStorage.getItem("kosar") == 22){
        document.getElementById(22).classList.remove("d-none");
        document.getElementById(22).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 23){
        document.getElementById(23).classList.remove("d-none");
        document.getElementById(23).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 24){
        document.getElementById(24).classList.remove("d-none");
        document.getElementById(24).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 25){
        document.getElementById(25).classList.remove("d-none");
        document.getElementById(25).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 21){
        document.getElementById(21).classList.remove("d-none");
        document.getElementById(21).classList.add("d-block");
        document.getElementById(0).classList.remove("d-block");
        document.getElementById(0).classList.add("d-none");
    }
    if(localStorage.getItem("kosar") == 20){
        document.getElementById(20).classList.remove("d-none");
        document.getElementById(20).classList.add("d-block");
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