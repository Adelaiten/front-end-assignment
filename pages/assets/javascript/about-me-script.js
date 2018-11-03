function checkIfInputsFilled(){
    var allFilled = true;

    var inputs = document.getElementsByTagName('input');
    for(var i=0; i<inputs.length; i++){
        if(inputs[i].type == "text" && inputs[i].value == ''){
            allFilled = false;
            break;
        }
    }

    document.getElementById("mysubmit").disabled = !allFilled;
};



function validateName(){
    var name = document.getElementById("name").value;
    return /^[A-Za-z\s]+$/.test(String(name));
};

function validateEmail() {
    var email = document.getElementById("mail").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function fireMethods(){
    if (!validateName() && !validateEmail()){
        alert("Wrong name and email");
    }else if (!validateName()){
        alert("Wrong name!");
    }else if (!validateEmail()){
        alert("Wrong Email!");
    }
};

window.onload = function(){
    var inputs = document.getElementsByTagName('input');
    for(var i=0; i<inputs.length; i++){
        if(inputs[i].type == "text"){
            inputs[i].onkeyup = checkIfInputsFilled;
            inputs[i].onblur = checkIfInputsFilled;
        }
    }
    document.getElementById('mysubmit').onclick = fireMethods;
};