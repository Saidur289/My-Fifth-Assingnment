// addEventListener on blog button 
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html';
})
// global variable 
const totalAmount = document.getElementById('total-amount');
// update input value 
function updateInputValue(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
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
function updateSpanText(id, firstValue){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = currentNumber + firstValue;
    document.getElementById(id).innerText = totalBalance;
}
// addEventListener on donate button -1
document.getElementById('donate-btn1').addEventListener('click', function(){
    let firstValue = updateInputValue('input-value1');
    updateSpanText('amount', firstValue);
    updateSpanText('total-amount', -1 * firstValue);   
    document.getElementById('input-value1').value = "";
    let string = 'for famine - 2024 at Feni';
    // add section 
//     const item = document.createElement('div');
//     item.className = "border-2 rounded-lg shadow-lg p-6 space-y-3";
//     item.innerHTML = ` <p class = "font-bold text-black">${firstValue} Taka is donated for famine - 2024 at Feni , Bangladesh</p>
//                         <p>${new Date().toLocaleString('en-US', { 
//     timeZone: 'Asia/Dhaka', 
//     weekday: 'long', 
//     year: 'numeric', 
//     month: 'long',  
//     day: '2-digit', 
//     hour: '2-digit', 
//     minute: '2-digit', 
//     second: '2-digit', 
//     hour12: false 
// })} GMT +06.00(Bangladesh Standard Time)</p>`
//                       itemContainer = document.getElementById('history-container');
//                       itemContainer.appendChild(item);
  addHistoryItem(firstValue,string);
   
})
// addEventListener on donate button - 2
document.getElementById('donate-btn2').addEventListener('click', function(){
    let secondValue = updateInputValue('second-input-value');
    updateSpanText('second-amount', secondValue);
    updateSpanText('total-amount', -1 * secondValue);
    document.getElementById('second-input-value').value = "";
    let str = 'for Flood Relief in Feni';
    addHistoryItem(secondValue,str);
})
// addEventListener on donate button - 3
document.getElementById('donate-btn3').addEventListener('click', function(){
    let thirdValue = updateInputValue('third-input-amount');
    updateSpanText('third-amount', thirdValue);
    updateSpanText('total-amount', -1 * thirdValue);
    document.getElementById('third-input-amount').value = "";
    let sentence = 'for Aid for Injured in the Quota Movement';
    addHistoryItem(thirdValue,sentence);
})