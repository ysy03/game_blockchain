

contract GameBetting{

    enum GameResult{
        win,
        lose,
        draw
    }
    struct User{
        uint betting;
        uint property;
    }
    struct Player{
        uint[] gameCard;
    }
    struct GameInfo{
        uint betting;
        GameResult gameresult;
        Player Dealer;
        Player player;
    }

    mapping (address => User) public User;

    constructor(){
        User[msg.sender].property = 50000;
    }

    function setBetting(uint bettingMoney) public{
        User[msg.sender].betting = bettingMoney
        User[msg.sender].property -= bettingMoney
        GameInfo[msg.sender].betting = bettingMoney
    }

    function setPlayerCard(uint memory cardNumber) public{
        GameInfo[msg.sender].player.gameCard.push(cardNumber)
    }
    function setDealerCard(uint memory cardNumber) public {
        GameInfo[msg.sender].Dealer.gameCard.push(card)
    } 

    function getPlayerInfo() public view returns (GameInfo memory){
        return GameInfo[msg.sender]
    }

    function win() public{
        GameInfo[msg.sender].gameresult = GameResult.win
        User[msg.sender].property += User[msg.sender].betting * 2
        User[msg.sender].betting = 0 
    }
    function lose() public{
        GameInfo[msg.sender].gameresult = GameResult.lose
        User[msg.sender].betting = 0 
    }
    function draw() public{
        GameInfo[msg.sender].gameresult = GameResult.draw
        User[msg.sender].property += User[msg.sender].betting 
        User[msg.sender].betting = 0 
    }
}