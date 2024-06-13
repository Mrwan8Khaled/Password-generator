// define elements
let num = document.getElementById("num");
let btn = document.getElementById("create");
let text = document.getElementById("pass");

// define cases
let CapCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let SmlCase = "abcdefghijklmnopqrstuvwxyz";
let Numbers = "1234567890";
let Symbols = "!@#$%^&*()_+=-{}[]<>?";

btn.addEventListener("click", function () {
  let rtime;
  if (num.value == 0) {
    text.style.display = "none";
  } else if (num.value < 0) {
    text.style.display = "block";
    rtime = Number(num.value * -1);
  } else {
    text.style.display = "block";
    rtime = Number(num.value);
  }
  let password = ""; // Reset the password variable

  for (let index = 0; index < rtime; index++) {
    let x = Math.floor(Math.random() * 4) + 1;
    switch (x) {
      case 1:
        let chosenCap = Math.floor(Math.random() * 26);
        password += CapCase[chosenCap];
        break;
      case 2:
        let chosenSml = Math.floor(Math.random() * 26);
        password += SmlCase[chosenSml];
        break;
      case 3:
        let chosenNum = Math.floor(Math.random() * 10);
        password += Numbers[chosenNum];
        break;
      case 4:
        let chosenSymbol = Math.floor(Math.random() * 21);
        password += Symbols[chosenSymbol];
        break;
      default:
        break;
    }
  }
  text.innerText = password;
});
