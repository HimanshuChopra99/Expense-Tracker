//arrow btn animation
let arrow = document.querySelector('.arrow')
let footer = document.querySelector('.footer')
arrow.addEventListener('click', function() {
    if(footer.classList.length == 1){
        footer.classList.add('active')
        arrow.classList.add('arrowActivate')
        transactionList.style = 'height: 32rem;'
    } else{
        footer.classList.remove('active')
        arrow.classList.remove('arrowActivate')
        transactionList.style = 'height: 18rem;'
    }
})


//income or expense animation 
const incomeBtn = document.querySelector('.incomeBtn');
const expenseBtn = document.querySelector('.expenseBtn')
let transactionType = "income";
function transactionBtn(e){
    if(e.target.classList[0] == 'incomeBtn'){
        transactionType = "income";
        expenseBtn.classList.remove('test')
        incomeBtn.classList.remove('check')
    }else if(e.target.classList == 'expenseBtn'){
        transactionType = "expense";
        expenseBtn.classList.add('test')
        incomeBtn.classList.add('check')
    }
}
incomeBtn.addEventListener('click', transactionBtn)
expenseBtn.addEventListener('click', transactionBtn)

//add transaction
const addBtn = document.querySelector('.addBtn')
const transactionName = document.querySelector('#transactionName')
const transactionAmount = document.querySelector('#transactionAmount')
const transactionDate = document.querySelector('#transactionDate')
const transactionList = document.querySelector('.transaction-list')

//total balance
const totalMoney = document.querySelector('#total-money')
let total = parseInt(totalMoney.textContent)
//total income
const incomeAmount = document.querySelector('.incomeAmount')
let totalIncome = parseInt(incomeAmount.textContent);
//total expense
const expenseAmount = document.querySelector('.expenseAmount');
let totalExpense = parseInt(expenseAmount.textContent);

addBtn.addEventListener('click', function() {
    const name = transactionName.value;
    const amount = parseFloat(transactionAmount.value);
    const date = transactionDate.value;

    //check if field is invalid
    if(name.trim() === '' || isNaN(amount) || amount <= 0 || date === ''){
        alert('Please fill all field with valid data');
        return;
    }

    //format date
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}/${month}/${year}`

    // Create a new transaction element
    const transactionContainer = document.createElement('div');
    transactionContainer.classList.add('transaction-container');

    const transactionData = document.createElement('div');
    transactionData.classList.add('transaction-data');

    const transactionNameElement = document.createElement('h3');
    transactionNameElement.classList.add('transaction-name');
    transactionNameElement.textContent = name;

    const transactionDateElement = document.createElement('div');
    transactionDateElement.classList.add('date');
    transactionDateElement.textContent = formattedDate;

    transactionData.appendChild(transactionNameElement);
    transactionData.appendChild(transactionDateElement);

    const amountTransaction = document.createElement('div');
    amountTransaction.classList.add('amount-transaction');

    //check income or expanse
    if(transactionType === 'income'){
        amountTransaction.textContent ='+' + amount;
        //add to total balance
        total = total + amount
        totalMoney.textContent = total
        //add to total income
        totalIncome = totalIncome + amount;
        incomeAmount.textContent = `+${totalIncome}`

    }else{
        amountTransaction.textContent ='-' + amount;
        amountTransaction.classList.add('add');
        //deduct from total balance
        total = total - amount;
        totalMoney.textContent = total;
        //add to total expense
        totalExpense = totalExpense + amount;
        expenseAmount.textContent = `-${totalExpense}`;
    }

    transactionContainer.appendChild(transactionData);
    transactionContainer.appendChild(amountTransaction);

    // Append the new transaction to the transaction list
    transactionList.appendChild(transactionContainer);


    // Clear input fields
    transactionName.value = "";
    transactionAmount.value = "";
    transactionDate.value = "";
}) 