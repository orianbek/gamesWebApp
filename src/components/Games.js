import GameItem from "./GameItem"

function Songs(props) {

    return (
        <div >
            {props.items.map((item, index) => (
                <GameItem
                    key={index}
                    name={item.name}
                    image={item.img}
                    realesDate={item.realesDate}
                />
            ))}


        </div>

    )
}

export default Songs