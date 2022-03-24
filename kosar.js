function kosarba(a){
    if (a = "kosarba13") {
        localStorage.clear;
        localStorage.setItem("kosar", 13);
        console.log("kosarba")
        console.log(localStorage.getItem("kosar"));
    }
    if (a = "kosarba13pro") {
        localStorage.setItem("kosar", 14);
    }
    if (a = "kosarba13promax") {
        localStorage.setItem("kosar", 15);
    }
    if (a = "kosarba13mini") {
        localStorage.setItem("kosar", 12);
    }
}

function teszt(){
    console.log(localStorage.getItem("kosar"));
}

function kosarad() {
    if(localStorage.getItem("kosar") == 13){
        document.getElementById(13).classList.remove("d-none");
        document.getElementById(13).classList.add("d-block");
    }
    // if(localStorage.getItem("kosar") == 14){
    //     document.getElementById(14).classList.remove("d-none");
    //     document.getElementById(14).classList.add("d-block");
    // }
    // if(localStorage.getItem("kosar") == 15){
    //     document.getElementById(15).classList.remove("d-none");
    //     document.getElementById(15).classList.add("d-block");
    // }
    if(localStorage.getItem("kosar") == 12){
        document.getElementById(12).classList.remove("d-none");
        document.getElementById(12).classList.add("d-block");
    }
        // else{
        //     window.alert("A kosarad üres!")
        // }
}


window.onload = kosarad;