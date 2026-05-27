import { useState } from "react"
import { useNavigate } from "react-router-dom";


const GameBlock = ({gameName,gameBet,setGame}) =>{
    function setModal(){
        gameBet(true);
        setGame(gameName);
    }
    return(
        <div>
            <h3>{gameName}</h3>
            <button onClick={()=>{setModal()}}>게임 시작</button>
        </div>
    )
}

export default GameBlock;