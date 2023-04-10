import {useState} from 'react'
import "./ExpenseItem.css"
import Date from "./Date"
import Card from "./Card"

const ExpenseItem = (props) =>{ 

    const [title, setTitle] = useState(props.title);
    
    let clickHandler = () =>{
         setTitle('hello')
        
    }
    return(
        <Card className="expense-item"> 

            <Date info = {props.date}/>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <h2 className="expense-item__price">${props.amount}</h2>
            </div>
            <button onClick = {clickHandler}>Edit Title</button>
          
        </Card>
    )
}
export default ExpenseItem