const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtnEl = document.getElementById("generate-btn")
let passwordText1 = document.getElementById("password-text1")
let passwordText2 = document.getElementById("password-text2")

generateBtnEl.addEventListener("click",function(){
    passwordText1.textContent = getRandomPassword()
    passwordText2.textContent = getRandomPassword()
})

function getRandomPassword()
{
    let randomPassword = ""
    for(let i = 0 ; i < 13 ; i++)
    {
        randomPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    return randomPassword
}