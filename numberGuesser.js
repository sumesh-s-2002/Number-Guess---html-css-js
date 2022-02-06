// initiaalizing variables
let minNumber = 2;
let maxNumber = 10;
let guessNumber = 7;
let guessLeft = 3;

//defing ui variables
const minValue = document.querySelector(".min-val")
const maxValue = document.querySelector(".max-val")
const guessInput = document.querySelector("#guess-input")
const submitBtn = document.querySelector("#submit")
const message = document.querySelector(".message");
const content  = document.querySelector(".content")
minValue.textContent = minNumber;
maxValue.textContent = maxNumber;
///play again button
content.addEventListener("mousedown", (e)=>{
    if(e.target.classList.contains("play-again")){
        location.reload();
    }
  
})

//adding event listner for submitBtn
submitBtn.addEventListener("click", (e)=>{
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < minNumber || guess > maxNumber){
        setMessage(`please enter a number between ${minNumber} and ${maxNumber}`, "red");
    }
    if(guessNumber === guess){
       gameOver(true, `your guess ${guess} was currect you won`);
    }
    else{
        if(guessLeft === 0){
            gameOver(false, `your guesses are over right answer was ${guessNumber}`);
        }else{
        guessLeft = guessLeft-1;
        setMessage(`your guess ${guess} was wrong only ${guessLeft} guesses left` , "red")
        guessInput.style.borderColor = "red"

        }

        
    }
    e.preventDefault();
})
//define setMessage
function setMessage(mess, color){
    message.textContent = mess;
    //setting color
    message.style.color = color
}
function gameOver(won,msg){
    let color;
    won === true ? color = "green" : color = "red"
    guessInput.style.borderColor = color;
    guessInput.disabled = true;
    setMessage(msg, color);
    submitBtn.value = "Play again"
    submitBtn.className += "play-again"
}