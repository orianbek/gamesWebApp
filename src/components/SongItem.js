import './SongItem.css'

import ExpenseDate from "./ExpenseDate"

function SongItem(props) {


    return (
        <div className='expense-item'>
             <img src={props.image} alt={props.name} />
            <div className='expense-item__description'> {props.name}</div>
            <div className='expense-item__price'> {props.duration} </div>
        </div>
    )
}

export default SongItem