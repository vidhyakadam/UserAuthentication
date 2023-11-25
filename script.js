
////-----------------------form validation code is here ------------------------------------------
function validateform(){
    var name =  document.myform.name.value;
    var firstpassword = document.myform.password.value;
    var secondpassword = document.myform.password2.value;

    if(name==null || name ==""){
        alert("Name field cant be blank")
        return false;
    }
      if(firstpassword == secondpassword){
        return true;
    }
    else {
        alert("password must be smae!");
    }
}


//-----------------------main 

document.addEventListener('DOMContentLoaded', () => {



});




// function saveData(){
//     let name, email, password;
//     name = document.getElementById("#name").value;
//     email = document.getElementById("#email").value;
//     password = document.getElementById("#password").value;

//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
// }