import "./Date.css"

const Date = ({info}) =>{
    
    const month = info.toLocaleString('en-US', {month: 'long'})
    const day = info.toLocaleString('en-US', {day: '2-digit'})
    const year = info.getFullYear();
 
    return(
        <div className="expense-date">

        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>

        </div>

    )
    
}

export default Date;