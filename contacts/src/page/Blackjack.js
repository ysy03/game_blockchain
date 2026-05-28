import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProperty } from "../App";

const BlackJack = () =>{
    const [dealer,setDealer] = useState([]);
    const [gamePlayer,setGamePlayer] = useState([]);
    const [dealerscore,setDealerScore] = useState(0)
    const [gamescore,setGamescore] = useState(0);
    const [gameing,setGaming] = useState(true);
    const [GameResult,setGameResult] = useState("");
    const {money,betting,setProperty,setBetting} = UserProperty((state)=>state)
    const navigate = useNavigate()
    const randomNumber = () =>{
        return Math.ceil(Math.random()*13)
    }

    function getCard(number){
        switch (number){
            case 13:
                return 'K'
            case 12:
                return 'Q'
            case 11:
                return 'J'
            case 1:
                return 'A'
            default:
                return String(number)
        }
    }
    
    const getNumber = (getnumber) =>{
        if(getnumber >= 10){
            return 10;
        }
        else if(getnumber === 1){
            return 11
        }
        else{
            return getnumber;
        }
    }
    
    useEffect(()=>{
        const dealerNumber = randomNumber()
        const gamePlayerNumber = randomNumber()
        setDealer([...dealer,getCard(dealerNumber)])
        setGamePlayer([...gamePlayer,getCard(gamePlayerNumber)]);
        setDealerScore(getNumber(dealerNumber))
        setGamescore(getNumber(gamePlayerNumber))
    },[])

    function AddButton(){
        const gamePlayerNumber = randomNumber()
        let newScore = gamescore
        let DrowCard = gamePlayer
        DrowCard.push(getCard(gamePlayerNumber))
        setGamePlayer(DrowCard);
        setGamescore(gamescore + getNumber(gamePlayerNumber))
        newScore += getNumber(gamePlayerNumber)
        if(newScore > 21){
            setGameResult("패배")
            setBetting(0)
            setGaming(false)
        }

    }
    function Stop(){
        let Card = dealerscore
        let newdealer = [...dealer]
        let random = 0
        while(Card < gamescore){
            random = randomNumber();
            newdealer.push(getCard(random));
            Card += getNumber(random)
        }

        setDealer(newdealer)
        setDealerScore(Card);
        if(Card > 21){
            setGameResult("승리")
            setProperty(money+betting*2)
        }else if(Card === gamescore){
            setGameResult("무승부");
            setProperty(money+betting)
        }else{
            setGameResult("패배");
        }
        setBetting(0)
        setGaming(false)
    }
    return(
        <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
            <div>
                <h1>블랙잭</h1>
                    {!gameing && <h2>{GameResult}</h2>}
                    <div>
                        <p>딜러</p>
                        <p>점수{dealerscore}</p>
                        <div style={{display:'flex'}}>
                            {dealer.map((item,index)=>{
                                return<p key={index} style={{marginRight:"25px"}}>{item}</p>
                            })}
                        </div>
                    </div>
                    <div style={{height:'100px'}}>

                    </div>
                    <div>
                        <p>유저</p>
                        <p>점수{gamescore}</p>
                        <div style={{display:'flex'}}>
                            {gamePlayer.map((item,index)=>{
                                return<p key={index} style={{marginRight:"25px"}}>{item}</p>
                            })}
                        </div>
                    </div>
                    {gameing ? 
                    <div><button onClick={()=>AddButton()}>콜</button><button onClick={()=>Stop()}>스톱</button></div> : 
                    <div><button onClick={()=>navigate('/index')}>집으로 가기</button></div>} 
                    

            </div>
            
        </div>
    )
}

export default BlackJack