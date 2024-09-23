// addEventListener on blog button 
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html';
})

// global variable 



// update input value  common function - 1
function updateInputValue(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}


// update span text common function - 2
function updateSpanText(id, value){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = currentNumber + value;
    document.getElementById(id).innerText = totalBalance;
}


// update history item common function - 3
function addHistoryItem(addNum,string){
    const item = document.createElement('div');
    item.className = "border-2 rounded-lg shadow-lg p-6 space-y-3";
    item.innerHTML = ` <p class = "font-bold text-black">${addNum} Taka is donated ${string}  , Bangladesh</p>
                        <p>${new Date().toLocaleString('en-US', { 
                        timeZone: 'Asia/Dhaka', 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long',  
                        day: '2-digit', 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        second: '2-digit', 
                        hour12: false 
                        })} GMT +06.00(Bangladesh Standard Time)</p>`
                      itemContainer = document.getElementById('history-container');
                      itemContainer.appendChild(item);
}

// add classlist to button  common function - 4

function addClassList(id){
    document.getElementById('show-donation').classList.remove('bg-secondary', 'font-bold', 'bg-white');
    document.getElementById('show-history').classList.remove('bg-secondary', 'font-bold', 'bg-white');
    // show id
    document.getElementById(id).classList.add('bg-secondary', 'font-bold');
}
// remove function common function -4
function removeHidden(id){
    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    // show id 
    document.getElementById(id).classList.remove('hidden');
}



// addEventListener on donate button -1
document.getElementById('donate-btn1').addEventListener('click', function(){
    let firstValue = updateInputValue('input-value1');
    const currentBalance = parseFloat(document.getElementById('total-amount').innerText) ;
    if(firstValue <= 0  || firstValue === "" || isNaN(firstValue)){
        document.getElementById('input-value1').value = "";
        return alert('Please entry valid number');

    }else if(firstValue > currentBalance){
        document.getElementById('input-value1').value = "";
        return alert('You cannot exceed your balance');
    }else{
        updateSpanText('amount', firstValue);
        updateSpanText('total-amount', -1 * firstValue);   
        document.getElementById('input-value1').value = "";
        let string = 'for famine - 2024 at Feni';
        // add section 
        addHistoryItem(firstValue,string);
        const modal = document.getElementById('my_modal_1');
   modal.showModal();
   document.getElementById('my_modal_1').classList.remove('hidden');
    }
   
   
})
// addEventListener on donate button - 2
document.getElementById('donate-btn2').addEventListener('click', function(){
    let secondValue = updateInputValue('second-input-value');
    const currentBalance = parseFloat(document.getElementById('total-amount').innerText) ;
    if(secondValue <= 0  || secondValue === "" || isNaN(secondValue)){
        document.getElementById('second-input-value').value = "";
        return alert('Please entry valid number');

    }else if(secondValue > currentBalance){
        document.getElementById('second-input-value').value = "";
        return alert('You cannot exceed your balance');
    }
    else{
        updateSpanText('second-amount', secondValue);
    updateSpanText('total-amount', -1 * secondValue);
    document.getElementById('second-input-value').value = "";
    let str = 'for Flood Relief in NoaKhali';
    addHistoryItem(secondValue,str);
    const modal = document.getElementById('my_modal_1');
   modal.showModal();
   document.getElementById('my_modal_1').classList.remove('hidden');
    }
})
// addEventListener on donate button - 3
document.getElementById('donate-btn3').addEventListener('click', function(){
    let thirdValue = updateInputValue('third-input-amount');
    const currentBalance = parseFloat(document.getElementById('total-amount').innerText) ;
    if(thirdValue <= 0  || thirdValue === "" || isNaN(thirdValue)){
        document.getElementById('third-input-amount').value = "";
        return alert('Please entry valid number');

    }else if(thirdValue > currentBalance){
        document.getElementById('third-input-amount').value = "";
        return alert('You cannot exceed your balance');
    }
    
    else{  
    updateSpanText('third-amount', thirdValue);
    updateSpanText('total-amount', -1 * thirdValue); 
    let sentence = 'for Aid for Injured in the Quota Movement';
    addHistoryItem(thirdValue,sentence);
    document.getElementById('third-input-amount').value = "";
    
   const modal = document.getElementById('my_modal_1');
   modal.showModal();
   document.getElementById('my_modal_1').classList.remove('hidden');
    }
    
})

const showDonation =  document.getElementById('show-donation');
showDonation.addEventListener('click', function(){
 addClassList('show-donation');
 removeHidden('donation-form');
})
const showHistory = document.getElementById('show-history');
showHistory.addEventListener('click', function(){
    addClassList('show-history');
    removeHidden('history-container');
})
