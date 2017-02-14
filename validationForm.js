function validate() {

    var success = true;

    if (userFail()) {
        success = false;
        alert("Your Username must start with a letter");
        document.valform.user.focus();
        document.valform.user.select();
        document.valform.user.value = "";

    }
    else if (emailFail()) {
        sucess= false;
        alert("Please enter a valid email address");
        document.valform.useremail.focus();
        document.valform.useremail.select();

        return sucess;
    }
    else if (passFail()) {
        sucess = false;
        alert("Please enter a password over 8 characters");
        document.valform.pass.focus();
        document.valform.pass.select();
        document.valform.pass.value = "";
        document.valform.passcomf.value = "";
        return sucess;
    }

    else if (comfFail()) {
        sucess = false;
        alert("The passwords did not match");
        document.valform.passcomf.focus();
        document.valform.passcomf.select();
        document.valform.passcomf.value = "";
        document.valform.pass.value = "";
        return sucess;
    }

    alert("Thank you for reigstering!");
    return success;
}
function userFail(){
    var text = document.valform.user.value;
    if(/\b[0-9]/.test(text)) {
        return true;
    }
}
function emailFail(){
    var email = document.valform.useremail.value;
    return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}
function passFail(){
    var password = document.valform.pass.value;
    if(password.length<8){
        return true;
    }
}
function comfFail(){

    var comfPassword = document.valform.passcomf.value;
    var password = document.valform.pass.value;
    if(comfPassword !=password){
        return true;
    }
}
