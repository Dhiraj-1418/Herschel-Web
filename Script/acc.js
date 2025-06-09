let login =document.getElementById("login");
let register =document.getElementById("register")

let logEmail = document.getElementById("logEmail");
let logPass = document.getElementById("logPass");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let con_pass = document.getElementById("con_pass")



login.addEventListener("click",(e)=>{
    e.preventDefault();

    let loginObj={
        id:logEmail.value,
        pass:logPass.value
    }

if(loginObj.id!="" && loginObj.pass!=""){
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginObj),
        });


}else{
    alert("All fields are mendatory to fill ")
}
 


})

register.addEventListener("click",(e)=>{
    e.preventDefault();

    let loginObj={
        FirstName:fName.value,
        LastName:lName.value,
        Email:email.value,
        pass:pass.value,
        ConfirmPass:con_pass.value
    }

if(loginObj.id!="" && loginObj.pass!=""){
        fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginObj),
        });

     

}else{
    alert("All fields are mendatory to fill ")
}
 


})