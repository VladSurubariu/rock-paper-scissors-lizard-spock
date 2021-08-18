document.addEventListener('DOMContentLoaded', ()=>{

    const menuUser=document.querySelector('.menu.user')
    
    const rockUser=document.querySelector('#item1.user')
    const paperUser=document.querySelector('#item2.user')
    const scissorsUser=document.querySelector('#item3.user')
    const lizardUser=document.querySelector('#item4.user')
    const spockUser=document.querySelector('#item5.user')

    const menuOptionsUser=document.querySelectorAll('.item.user')
    const userOptions=document.querySelectorAll('.user')
    
    const rockComputer=document.querySelector('#item1.computer')
    const paperComputer=document.querySelector('#item2.computer')
    const scissorsComputer=document.querySelector('#item3.computer')
    const lizardComputer=document.querySelector('#item4.computer')
    const spockComputer=document.querySelector('#item5.computer')

    const scoreBoard=document.querySelector(".scoreboard")

    var computerChoiceIndex;

    var losesAgainst=[
        [4, 1], //rock-0
        [2, 3], //paper-1
        [0, 4], //scissors-2
        [0, 2], //lizard-3
        [1, 3] //spock-4
    ];

    var index=0;

    let options=['rock','paper','scissors','lizard','spock']
    
    var chosenOption

    var userScore=0

    var computerScore=0

    var numberOfRoundsPlayed=-1
    
    function pop(){
        if(index==0){
            document.getElementById("item1").style.transform='translate(-150px,-70px)'
            document.getElementById("item2").style.transform='translate(0, -205px)'
            document.getElementById("item3").style.transform='translate(150px, -70px)'
            document.getElementById("item4").style.transform='translate(-75px, 75px)'
            document.getElementById("item5").style.transform='translate(75px, 75px)'
            menuOptionsUser.forEach(option => {
                option.style.pointerEvents="auto"
            });
            index=1
            return
        }
        else{
            document.getElementById("item1").style.transform='translate(0, -60px)'
            document.getElementById("item2").style.transform='translate(0, -60px)'
            document.getElementById("item3").style.transform='translate(0, -60px)'
            document.getElementById("item4").style.transform='translate(0, -60px)'
            document.getElementById("item5").style.transform='translate(0, -60px)'
            menuOptionsUser.forEach(option => {
                option.style.pointerEvents="none"
            });
            index=0;
            return
        }
    }
    
    function computerChoice(){
        computerChoiceIndex=Math.floor(Math.random() * 5);
        switch (computerChoiceIndex) {
            case 0:
                rockComputer.style.zIndex="3"
                break;
            case 1:
                paperComputer.style.zIndex="3"
                break;
            case 2:
                scissorsComputer.style.zIndex="3"
                break;
            case 3:
                lizardComputer.style.zIndex="3"
                break;
            case 4:
                spockComputer.style.zIndex="3"
                break;
        }
    }

    function returnChosenOption(){
        userOptions.forEach(option => {
            option.style.pointerEvents="none"
        });

        menuUser.classList.add('hidden')

        switch (chosenOption) {
            case 0:
                rockUser.style.zIndex="3"
                break;
            case 1:
                paperUser.style.zIndex="3"
                break;
            case 2:
                scissorsUser.style.zIndex="3"
                break;
            case 3:
                lizardUser.style.zIndex="3"
                break;
            case 4:
                spockUser.style.zIndex="3"
                break;
        }
    }

    function resetMenuButtons(){
        rockUser.style.zIndex="1"
        paperUser.style.zIndex="1"
        scissorsUser.style.zIndex="1"
        lizardUser.style.zIndex="1"
        spockUser.style.zIndex="1"

        rockComputer.style.zIndex="1"
        paperComputer.style.zIndex="1"
        scissorsComputer.style.zIndex="1"
        lizardComputer.style.zIndex="1"
        spockComputer.style.zIndex="1"
    }

    function settleScore(){
        if(losesAgainst[chosenOption][0]==computerChoiceIndex || losesAgainst[chosenOption][1]==computerChoiceIndex){
            computerScore++
        }
        else if (losesAgainst[computerChoiceIndex][0]==chosenOption || losesAgainst[computerChoiceIndex][1]==chosenOption){
            userScore++
        }
        else{
           computerScore++
           userScore++
        }
        numberOfRoundsPlayed++
    }

    function updateScore(){
        const userText="User ";
        const computerText=" Computer"
        const dashText="-"
        scoreboardText=userText.concat(userScore).concat(dashText).concat(computerScore).concat(computerText)
        scoreBoard.innerHTML=scoreboardText
    }

    function reset(){
        index=0
        computerChoiceIndex=[]
        chosenOption=[]
        menuOptionsUser.forEach(option => {
            option.style.pointerEvents="auto"
        });
        updateScore()
        setTimeout(function(){
            menuUser.classList.remove('hidden') 
            resetMenuButtons(); 
            pop()
        }, 3000);
        
    }

    function checkIfGameEnded(){
        if(numberOfRoundsPlayed==10 || computerScore==6 || userScore==6)
            return 1
        else 
            return 0
    }

    function checkWhoWon(){
        console.log(userScore, computerScore, numberOfRoundsPlayed)
        if(computerScore>userScore)
            alert("Computer won")
        else if(computerScore<userScore)
            alert("User won")
        else if(computerScore==userScore)
            alert("Tie")
    }
    
    function userEndTurn(){
        index=1
        pop()
        returnChosenOption()
        computerChoice()
        settleScore()
        if(checkIfGameEnded()){
            console.log("end")
            console.log(userScore, computerScore, numberOfRoundsPlayed)
            checkWhoWon()
        }
        else{
            reset()
            console.log(userScore, computerScore, numberOfRoundsPlayed)
            console.log("reset")
        }
    }

    function rockOption(){
        chosenOption=0
        userEndTurn()
    }

    function paperOption(){
        chosenOption=1
        userEndTurn()
    }
    
    function scissorsOption(){
        chosenOption=2
        userEndTurn()
    }

    function lizardOption(){
        chosenOption=3
        userEndTurn()
    }

    function spockOption(){
        chosenOption=4
        userEndTurn()
    }


    menuUser.addEventListener('click',pop)
    rockUser.addEventListener('click', rockOption)
    paperUser.addEventListener('click', paperOption)
    scissorsUser.addEventListener('click', scissorsOption)
    lizardUser.addEventListener('click', lizardOption)
    spockUser.addEventListener('click', spockOption)
})

