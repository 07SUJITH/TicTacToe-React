import Icon from './../Icon/Icon.jsx';
import './Card.css'
function Card({onPlay , player, index,gameEnd}){

    let icon = <Icon />
    if(player == 'X')
        icon = <Icon name = {"cross"}/>
    else if(player == 'O')
        icon =  <Icon name = {"circle"}/>

    return(
        // if card is untouched (player == "") then onPlay(index)
        <div className="card" onClick={() => !gameEnd && player =="" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;
