const playForm = document.querySelector("#play-form");
const inputNum = document.querySelector("#input-num");
const infoGame = document.querySelector("#game-info");
const resultGame = document.querySelector("#game-result");
const guessNum = document.querySelector("#guess-num")

let userNum;
function handleInputNum(){
  userNum = inputNum.value;
  console.log(userNum);
}

function handleOnSubmit(event){
    event.preventDefault();
    const userAns = parseInt(guessNum.value, 10);
    let comNum = Math.round(Math.random() * userNum);
    infoGame.innerText=`You chose: ${userAns}, the machine chose: ${comNum}`;
    let resultString;
    if(userAns === comNum) {
        resultString="won";
    } else {
        resultString="lost";
    }
    resultGame.innerText=`You ${resultString}!`;
}

inputNum.addEventListener("input", handleInputNum);
playForm.addEventListener("submit", handleOnSubmit);