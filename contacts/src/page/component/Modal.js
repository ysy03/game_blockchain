import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserProperty } from "../../App"



const Modal = ({game}) =>{

    const {money,betting,setProperty,setBetting} = UserProperty((state)=>state)
    const navigate = useNavigate()
    
    function Betting(betMoney){
        let BettingMoney = betMoney;
        if(BettingMoney > money){
            BettingMoney = money;
        }
        setBetting(BettingMoney)
    }


    function goGame(gameName){
        setProperty(money-betting)
        navigate(`/${gameName}`)
    }
    return(
        <div style={{display:'flex',position:'absolute',width:'100%',height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)'}}>
            <div style={{width:'30%',height:'30%',backgroundColor:'white'}}>
                <h1>{game}</h1>
                <label for='betting'>베팅 금액</label>
                <input type="number" id="betting" value={betting} onChange={(e)=>{Betting(Number(e.target.value))}}/>
                <button onClick={()=>{goGame(game)}}>게임 시작</button>
            </div>
        </div>
    )
}

export default Modal;