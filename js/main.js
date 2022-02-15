// increasing plus value function
function inputValueChange(inputId, price, isTrue){
    const caseInput = document.getElementById(inputId + '-number');
    let caseNumber = caseInput.value;
    if(isTrue){
        caseNumber = parseInt(caseNumber) + 1;
        
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
        
    }
    caseInput.value = caseNumber;

    const totalPrice = document.getElementById(inputId + '-total');
    totalPrice.innerText = caseNumber * price;
};

// phone incrice and decrice 



document.getElementById('case-plus').addEventListener('click', function(){
    inputValueChange('case', 59, true);
   
});

document.getElementById('ip-plus').addEventListener('click', function(){
    inputValueChange('phone', 1219, true);
});


document.getElementById('manus-ip').addEventListener('click', function(){
    inputValueChange('phone', 1219, false);
});
document.getElementById('case-manus').addEventListener('click', function(){
    inputValueChange('case', 59, false);
});