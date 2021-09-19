let tipPercent = 0;
let billValue;
let numberOfPeople;
let customValue;
let tipAmountResult;
let totalAmountResult;
let tipAmount;
let Total;
let fieldSuggestion = false;
let noofpeople = document.getElementById("numberofpeople");

let resetButton = document.getElementById("reset");

function myRoot(e){
    tipPercent = parseInt(e.target.value);
    noofpeople.style.border="2px solid red";
    if(fieldSuggestion===false){
        fieldSuggestion = document.querySelector(".numberofpeople").insertAdjacentHTML("beforeend", "<p class=error >Can't be zero</p>");
        fieldSuggestion===true;
    }
}

function myFunction(e){
      
    billValue = document.getElementById("bill").value;
    numberOfPeople = document.getElementById("numberofpeople").value;
    customValue = document.getElementById("customvalue").value;
    tipAmount = document.getElementById("tipAmount");
    Total = document.getElementById("total");


    if(numberOfPeople){
        noofpeople.style.border="none";
    }


    if(customValue===""){
        tipAmountResult = ((parseFloat(billValue) * parseFloat(tipPercent/100)) / parseInt(numberOfPeople)).toFixed(2);
        totalAmountResult = ((parseFloat(billValue) / parseInt(numberOfPeople)) + parseFloat(tipAmountResult)).toFixed(2);
        if(billValue==="" || numberOfPeople==="" || tipPercent===""){
            tipAmount.innerHTML = `$0.00`;
            Total.innerHTML = `$0.00`;
        }else{
            tipAmount.innerHTML = `$ ${tipAmountResult}`;
            Total.innerHTML = `$ ${totalAmountResult}`;
        }
    }else{
        tipAmountResult = ((parseFloat(billValue) * parseFloat(customValue/100)) / parseInt(numberOfPeople)).toFixed(2);
        totalAmountResult = ((parseFloat(billValue) / parseInt(numberOfPeople)) + parseFloat(tipAmountResult)).toFixed(2);
        if(billValue==="" || numberOfPeople==="" || customValue===""){
            tipAmount.innerHTML = `$0.00`;
            Total.innerHTML = `$0.00`;
        }else{
            tipAmount.innerHTML = `$ ${tipAmountResult}`;
            Total.innerHTML = `$ ${totalAmountResult}`;
        }
    }

    if(billValue!="" && numberOfPeople!="" && tipPercent!=""){
        resetButton.style.opacity=1;
    }

    if(billValue!="" && numberOfPeople!="" && customValue!=""){
        resetButton.style.opacity=1;
    }

}

function myReset(e){
    location.reload();
}