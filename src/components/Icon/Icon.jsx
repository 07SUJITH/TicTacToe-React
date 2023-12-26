import { FaTimesCircle,FaRegCircle,FaSquare} from "react-icons/fa";

function Icon({name}){
    const size = 40;// set the size of icons
    if(name == "cross")    return <FaTimesCircle size={size}/>
    else if (name == "circle") return <FaRegCircle size={size}/>
    else return <span></span>

}

export default Icon ;