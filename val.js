window.onload = function(){
    cUpid();
}

function cUpid() {
  const cU = document.getElementById("cU");
  const buT = document.getElementById("buT");
  const messages = [
    "Cupid's searching through his mailbox.",
    "Cupid's searching through his mailbox..",
    "Cupid's searching through his mailbox...",
    "Oh! Looks like there's been one stuck in the mail!",
    ""
  ];
  
  let currentIndex = 0;
  
  function updateText() {
    if (currentIndex < messages.length - 1) {
      cU.innerText = messages[currentIndex];
      currentIndex++;
      setTimeout(updateText, 3000);
    } else {
      cU.innerText = messages[currentIndex]; // Display the last message
      setTimeout(() => { // Introduce a small delay before showing the button
        buT.style.display = "block";
      }, 50); // 50 milliseconds (0.05 seconds) delay
    }
  }
  updateText();
}

function finaL(){
  buT.style.display = "none";

  const maiL = document.getElementById("maiL");
  maiL.style.display = "block";
}

function respY(){
  alert("LESSSGOOOOO");
}

function respN(){
  alert("WRONG ANSWER, TRY AGAIN!");
}