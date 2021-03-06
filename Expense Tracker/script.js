const balance = $('#balance');
const money_plus = $('#money-plus');
const money_minus = $('#money-minus');
const list = $('#list');
const form = $('#form');
const text = $('#text');
const amount = $('#amount');


// Update local storage transactions
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };
const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
  );
  
  let transactions =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];


//add transactions to DOM list
function addTransactionDOM (transaction){
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

// update total values and - + valuse
  function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
  
    balance.text(`$${total}`);
    money_plus.text(`$${income}`);
    money_minus.text(`$${expense}`);
    
  }
  


// init app to clear list

function init (){
    list.html('');
    // Make sure every value runs through the function
    transactions.forEach(addTransactionDOM);
    updateValues();
}

// reset
init();


// submit function give object 'ID' and push data to transactions
form.submit(function (e) { 
    e.preventDefault();
  
    if (text.val().trim() === '' || amount.val().trim() === '') {
      alert('Please add a text and amount');
    } else {
      const transaction = {
        id: generateID(),
        text: text.val(),
        amount: +amount.val()
      };

      transactions.push(transaction);
      addTransactionDOM(transaction);
      updateLocalStorage();
      updateValues();
  
      text.val('');
      amount.val('');
    }
});

// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  // Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage()
    init();
  };



