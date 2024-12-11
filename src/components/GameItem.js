import  "./GameItem.css"
function GameItem(props) {


    return (
        <div className='game-item'>
            <img src={props.image} alt={props.name} />
            <div className='game-item__name'> {props.name}</div>
            <div className='game-item__releaseDate'> {props.realesDate} </div>
            <br></br>
        </div>
    )
}

export default GameItem