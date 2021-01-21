const balance = $('#balance');
const money_plus = $('#money-plus');
const money_minus = $('#money-minus');
const list = $('#list');
const form = $('#form');
const text = $('#text');
const amount = $('#amount');

const dummyTransactions = [
{ id: 1, text: 'Flower', amount: -20 },
{ id: 2, text: 'Salary', amount: 300 },
{ id: 3, text: 'Book', amount: -10 },
{ id: 4, text: 'Camera', amount: 150 }
];

let transactions = dummyTransactions;

//add transactions to DOM list

function addtransactionDOM (transaction){
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');
  
    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  
    item.innerHTML= `
      ${transaction.text} <span>${sign}${Math.abs(
      transaction.amount
    )}</span> <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })">x</button>`
    ;
  
    // item update to list
    list.append(item);
  }


// init app to clear list

function init (){
    list.html('');
    // Make sure every value runs through the function
    transactions.forEach(addtransactionDOM);
}

// reset
init();
