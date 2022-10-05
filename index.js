let toggle11 = document.getElementById("default-toggle11");
let toggle22 = document.getElementById("default-toggle22");
let toggle33 = document.getElementById("default-toggle33");

let toggle1 = document.getElementById("default-toggle1");
let toggle2 = document.getElementById("default-toggle2");
let toggle3 = document.getElementById("default-toggle3");
let toggle4 = document.getElementById("default-toggle4");
let toggle5 = document.getElementById("default-toggle5");
let toggle6 = document.getElementById("default-toggle6");
let toggle7 = document.getElementById("default-toggle7");
let toggle8 = document.getElementById("default-toggle8");
let toggle9 = document.getElementById("default-toggle9");

let lampu1 = document.getElementById("lampu1")
let lampu2 = document.getElementById("lampu2")
let lampu3 = document.getElementById("lampu3")
let lampu4 = document.getElementById("lampu4")
let lampu5 = document.getElementById("lampu5")
let lampu6 = document.getElementById("lampu6")
let lampu7 = document.getElementById("lampu7")
let lampu8 = document.getElementById("lampu8")
let lampu9 = document.getElementById("lampu9")


//grouping ruang
function saklar11() {
    if (toggle11.checked == true) {
        lampu1.src = "assets/images/on.gif"
        lampu2.src = "assets/images/on.gif"
        lampu3.src = "assets/images/on.gif"
        if (toggle11.checked == true) {
            toggle1.checked = true
            toggle2.checked = true
            toggle3.checked = true
        }
    } else if (toggle11.checked == false) {
        lampu1.src = "assets/images/off.gif"
        lampu2.src = "assets/images/off.gif"
        lampu3.src = "assets/images/off.gif"
        if (toggle11.checked == false) {
            toggle1.checked = false
            toggle2.checked = false
            toggle3.checked = false
        }
    }

}



//masing2 tombol keluarga
function saklar1() {
    if (toggle1.checked == true) {
        lampu1.src = "assets/images/on.gif";
        if (toggle1.checked == true && toggle2.checked == true && toggle3.checked == true) {
            toggle11.checked = true
        }
    } else if (toggle1.checked == false) {
        lampu1.src = "assets/images/off.gif"
        if (toggle1.checked == false && toggle2.checked == false && toggle3.checked == true) {
            toggle11.checked = false
        }
    }

    if (toggle2.checked == true) {
        lampu2.src = "assets/images/on.gif";
        if (toggle1.checked == true && toggle2.checked == true && toggle3.checked == true) {
            toggle11.checked = true
        }
    } else if (toggle2.checked == false) {
        lampu2.src = "assets/images/off.gif"
        if (toggle1.checked == false && toggle2.checked == false && toggle3.checked == true) {
            toggle11.checked = false
        }
    }

    if (toggle3.checked == true) {
        lampu3.src = "assets/images/on.gif";
        if (toggle1.checked == true && toggle2.checked == true && toggle3.checked == true) {
            toggle11.checked = true
        }
    } else if (toggle3.checked == false) {
        lampu3.src = "assets/images/off.gif"
        if (toggle1.checked == false && toggle2.checked == false && toggle3.checked == true) {
            toggle11.checked = false
        }
    }

}

//grouping ruangtamu
function saklar22() {
    if (toggle22.checked == true) {
        lampu4.src = "assets/images/on.gif"
        lampu5.src = "assets/images/on.gif"
        lampu6.src = "assets/images/on.gif"
        if (toggle22.checked == true) {
            toggle4.checked = true
            toggle5.checked = true
            toggle6.checked = true
        }
    } else if (toggle22.checked == false) {
        lampu4.src = "assets/images/off.gif"
        lampu5.src = "assets/images/off.gif"
        lampu6.src = "assets/images/off.gif"
        if (toggle22.checked == false) {
            toggle4.checked = false
            toggle5.checked = false
            toggle6.checked = false
        }
    }
}

//masing2 tombol ruangtamu
function saklar2() {
    if (toggle4.checked == true) {
        lampu4.src = "assets/images/on.gif";
        if (toggle4.checked == true && toggle5.checked == true && toggle6.checked == true) {
            toggle22.checked = true
        }
    } else if (toggle4.checked == false) {
        lampu4.src = "assets/images/off.gif"
        if (toggle4.checked == false && toggle5.checked == false && toggle6.checked == true) {
            toggle22.checked = false
        }
    }

    if (toggle5.checked == true) {
        lampu5.src = "assets/images/on.gif";
        if (toggle4.checked == true && toggle5.checked == true && toggle6.checked == true) {
            toggle22.checked = true
        }
    } else if (toggle5.checked == false) {
        lampu5.src = "assets/images/off.gif"
        if (toggle4.checked == false && toggle5.checked == false && toggle6.checked == true) {
            toggle22.checked = false
        }
    }

    if (toggle6.checked == true) {
        lampu6.src = "assets/images/on.gif";
        if (toggle4.checked == true && toggle5.checked == true && toggle6.checked == true) {
            toggle22.checked = true
        }
    } else if (toggle6.checked == false) {
        lampu6.src = "assets/images/off.gif"
        if (toggle4.checked == false && toggle5.checked == false && toggle6.checked == true) {
            toggle22.checked = false
        }
    }
}


//grouping ruangmakan

function saklar33() {
    if (toggle33.checked == true) {
        lampu7.src = "assets/images/on.gif"
        lampu8.src = "assets/images/on.gif"
        lampu9.src = "assets/images/on.gif"
        if (toggle33.checked == true) {
            toggle7.checked = true
            toggle8.checked = true
            toggle9.checked = true
        }
    } else if (toggle33.checked == false) {
        lampu7.src = "assets/images/off.gif"
        lampu8.src = "assets/images/off.gif"
        lampu9.src = "assets/images/off.gif"
        if (toggle33.checked == false) {
            toggle7.checked = false
            toggle8.checked = false
            toggle9.checked = false
        }
    }
}

    // masing2 tombol ruangmakan
    function saklar3() {
        if (toggle7.checked == true) {
            lampu7.src = "assets/images/on.gif";
            if (toggle7.checked == true && toggle8.checked == true && toggle9.checked == true) {
                toggle33.checked = true
            }
        } else if (toggle7.checked == false) {
            lampu7.src = "assets/images/off.gif"
            if (toggle7.checked == false && toggle8.checked == false && toggle9.checked == true) {
                toggle33.checked = false
            }
        }
    
        if (toggle8.checked == true) {
            lampu8.src = "assets/images/on.gif";
            if (toggle7.checked == true && toggle8.checked == true && toggle9.checked == true) {
                toggle33.checked = true
            }
        } else if (toggle8.checked == false) {
            lampu8.src = "assets/images/off.gif"
            if (toggle7.checked == false && toggle8.checked == false && toggle9.checked == true) {
                toggle33.checked = false
            }
        }
    
        if (toggle9.checked == true) {
            lampu9.src = "assets/images/on.gif";
            if (toggle7.checked == true && toggle8.checked == true && toggle9.checked == true) {
                toggle33.checked = true
            }
        } else if (toggle9.checked == false) {
            lampu9.src = "assets/images/off.gif"
            if (toggle7.checked == false && toggle8.checked == false && toggle9.checked == true) {
                toggle33.checked = false
            }
        }
    }





