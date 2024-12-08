//import './Expenses.css'

import SongItem from "./SongItem"
import ExpenseForm from './ExpenseForm'

function Songs(props) {

    return (

        <div >
            {/* <ExpenseForm /> */}
            {props.items.map((item, index) => (
                <SongItem

                name={item.name}
                image={item.img}
                duration={item.duration}
                    key={index}

                />
            ))}


        </div>

    )
}

export default Songs