const { addExpense, getExpense, deleteExpense } = require('../Controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../Controllers/income');

// router.get('/',(req,res)=>{
//     res.send("hello world")
// })

 
const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router