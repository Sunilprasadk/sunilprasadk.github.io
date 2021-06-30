const startGame = document.getElementById("start-button");
const resetGame = document.getElementById("reset-button");
let userInputField = document.getElementById("userinput");
let computerInputField = document.getElementById("computerinput");
let resultInputField = document.getElementById("result");
let resultStyle = document.getElementById("resultstyle");
let resultStyleClass = document.querySelector(".outputbox");


function startGameHandler(){
    const defaultInput = "STONE";
    let userChoiceInput;
    let userInput;
    let computerInput;
    let userInputValid;

    userChoiceInput = prompt("Type your choice among STONE, PAPER or SCISSOR : ");
    userInputValid = userChoiceInput.toUpperCase();

        if(userInputValid != "STONE" & userInputValid != "PAPER" & userInputValid != "SCISSOR"){
            userInput = defaultInput;
            console.log(`userInput:${userInput}`);
            alert(`You entered invalid choice so default choice ${defaultInput} is taken as your choice`);
            userInputField.innerHTML =`<h6 class="text-center" style="font-size:20px; color:green;">User Input : <span style="font-size:20px; color:red;"> ${userInput} </span></h6>`;
        }else{
            userInput = userInputValid;
            console.log(userInput);
            userInputField.innerHTML =`<h6 class="text-center" style="font-size:20px; color:green;">User Input : <span style="font-size:20px; color:red;"> ${userInput} </span></h6>`;
        }

        let randomInput = Math.random();
        console.log(randomInput);
        if(randomInput <= 0.3){
            computerInput = "STONE";
        }else if(randomInput > 0.3 & randomInput < 0.8){
            computerInput = "PAPER";
        }else if(randomInput >= 0.8){
            computerInput = "SCISSOR";
        }
        console.log(`computerInput:${computerInput}`);
        computerInputField.innerHTML =`<h6 class="text-center" style="font-size:20px; color:green;">Computer Input : <span style="font-size:20px; color:red;"> ${computerInput} </span></h6>`;

    if(userInput === "PAPER" & computerInput === "STONE" ||
    userInput === "STONE" & computerInput === "SCISSOR" ||
    userInput === "SCISSOR" & computerInput === "PAPER" ){
        console.log("YOU WIN");
        resultInputField.innerHTML =`<h6 class="text-center" style="font-size:20px; color:green;">Result: <span style="font-size:20px; color:red;"> You Win!</span></h6>`;
    }else if(userInput === computerInput){
        console.log("MATCH DRAW");
        resultInputField.innerHTML =`<h6 class="text-center" style="font-size:20px; color:green;">Result: <span style="font-size:20px; color:red;"> Match Drawn!</span></h6>`;
    }else{
        console.log("YOU LOST");
        resultInputField.innerHTML =`<h6 class="text-center" style="font-size:20px; color:green;">Result: <span style="font-size:20px; color:red;"> You Lost!</span></h6>`;
    }
    //resultStyle.className = "outputbox";
    resultStyleClass.style.display = "block";
    }


    function endGameHandler(){
        console.clear();
        resultStyleClass.style.display = "none";
    }

    startGame.addEventListener('click', startGameHandler);
    resetGame.addEventListener('click', endGameHandler);