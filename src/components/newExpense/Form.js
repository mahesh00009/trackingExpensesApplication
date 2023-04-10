import { useState } from "react"

import "./Form.css"


const Form = (props) =>{

    const[enteredTitle , setEnteredTitle] = useState();
    const[amount , setAmount] = useState();
    const[date , setDate] = useState();


    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value )
    }

    const amountHandler = (event) =>{
        setAmount(event.target.value)
    }    
    
    const dateHandler = (event) =>{
        setDate(event.target.value)
    }    

    const submitHandler = (event) =>{
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount : amount,
            date : new Date(date)
 
        } 
        props.onSaveExpenseData(expenseData);


        setEnteredTitle("")
        setAmount("");
        setDate("");
        console.log(expenseData)
    }

    return (
        <form onSubmit ={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value = {enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step = "0.01" value = {amount} onChange={amountHandler}/>
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2023-05=30" value = {date} onChange={dateHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit" >Submit</button>
            </div>
        </form>
    )

}

export default Form;