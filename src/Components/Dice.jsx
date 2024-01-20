import '../Styles/Dice.css'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa6";

function Dice(props){
    const { num, rolling } = props // Destructing

    return(
        <div className={rolling === true ? 'Dice center rolling' : 'Dice center'}>
            {
                num === 1 ? <FaDiceOne /> : 
                num === 2 ? <FaDiceTwo /> :
                num === 3 ? <FaDiceThree /> :
                num === 4 ? <FaDiceFour /> :
                num === 5 ? <FaDiceFive /> :
                <FaDiceSix />
            }
        </div>
    )
}

export default Dice