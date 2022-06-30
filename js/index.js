function getPW() {
var pwletters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    pwLength = 12,
    password="";

    for(var i=0 ; i<=pwLength;i++){
        var randomNum = Math.floor(Math.random() *pwletters.length);
        password+=pwletters.substring(randomNum, randomNum+1);
    }
    document.getElementById("password").value=password;
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById("password").value)
  } 
    
 