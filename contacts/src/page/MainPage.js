import { useState } from "react";
import { Link } from "react-router-dom";
import GameListFrame from "./GameLists/GameListFrame";
import Modal from "./component/Modal";

const MainPage =()=>{

    const [gameBet,setGameBet] = useState(false)
    const [game,setGame] = useState('')
    return(
        <div>
            {gameBet &&<Modal game={game}/>}
            <div>
                <h1 style={{margin:0}}>Title</h1>
            </div>
            <div>
                <p>게임 리스트</p>
                <div>
                    <GameListFrame setGame={setGame} gameBet={setGameBet}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;