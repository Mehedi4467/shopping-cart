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
    calculateTotal();
};

// get input value
function getInputValue(product){
 const productInput = document.getElementById(product + '-number');
 const productNumber = parseInt(productInput.value);
 return productNumber;


}

// calculate total value 
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
   
}



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