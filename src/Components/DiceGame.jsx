import { useState } from "react";
import Dice from "./Dice";
import '../Styles/DiceGame.css'

function DiceGame(){
    const [dice1, setDice1] = useState(1)
    const [dice2, setDice2] = useState(2)
    const [rolling, setRolling] = useState(false);

    function handleClick(){
        const num1 = Math.floor(Math.random()*6)+1  
        const num2 = Math.floor(Math.random()*6)+1  
        setDice1(num1)
        setDice2(num2)

        setRolling(true)

        // We have to set the rooling state back to false after sometime
        setTimeout(() => {
            setRolling(false)
        }, 1000)
     }
    return (
        <div className="DiceGame center">
            <div className="center">
            <Dice num = {dice1} rolling = {rolling}/>
            <Dice num = {dice2} rolling = {rolling}/>
            </div>
            <button onClick={handleClick} disabled={rolling}>{ rolling === true ? 'Rolling...' : 'Roll' }</button>
        </div>
    )
}

export default DiceGame