
function SongItem(props) {


    return (
        <div className='expense-item'>
            <img src={props.image} alt={props.name} />
            <div className='game-item__name'> {props.name}</div>
            <div className='game-item__price'> {props.realesDate} </div>
            <br></br>
        </div>
    )
}

export default SongItem