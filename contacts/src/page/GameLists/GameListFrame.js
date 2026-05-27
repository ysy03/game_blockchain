import GameBlock from "./GameBlock"


const GameListFrame = ({gameBet,setGame}) =>{
    const GameList = ['Blackjack']
    return(
        <div>
            <div>
                {GameList.map((value,index)=>{
                    console.log(value)
                    return(
                        <div key={index}>
                            <GameBlock setGame={setGame} gameName={value} gameBet={gameBet}/>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}

export default GameListFrame;