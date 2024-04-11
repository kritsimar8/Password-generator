const passwordBox = document.getElementById("password");

const upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuwxyz";
const special = "!@#$%^&*()_+?";

const length = 12;
const allchars= upper + lower +special;

function generate(){
    let password=""
   
    
    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=special[Math.floor(Math.random()*special.length)];

    while (length>password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)]
    }
   
    
    passwordBox.value=password;
    console.log(passwordBox.value);

}


function copyPass() {
    const copy = passwordBox.value;
    navigator.clipboard.writeText(copy);
  }