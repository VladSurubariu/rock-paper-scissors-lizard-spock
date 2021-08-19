document.addEventListener('DOMContentLoaded', ()=>{

    //objects and variables are initialised

    const menuUser=document.querySelector('.menu.user') //the question-mark button
    
    const rockUser=document.querySelector('#item1.user') //the rock image that appeares when the menu pops-up
    const paperUser=document.querySelector('#item2.user') //the paper image that appeares when the menu pops-up
    const scissorsUser=document.querySelector('#item3.user') //the scissors image that appeares when the menu pops-up
    const lizardUser=document.querySelector('#item4.user') //the lizard image that appeares when the menu pops-up
    const spockUser=document.querySelector('#item5.user') //the spock image that appeares when the menu pops-up

    const menuOptionsUser=document.querySelectorAll('.item.user') //the options that can be selected by the user
    const userOptions=document.querySelectorAll('.user') //everything that can be clicked by the user
    
    const rockComputer=document.querySelector('#item1.computer') //the rock image that appears when the computer choice is shown
    const paperComputer=document.querySelector('#item2.computer') //the paper image that appears when the computer choice is shown
    const scissorsComputer=document.querySelector('#item3.computer') //the scissors image that appears when the computer choice is shown
    const lizardComputer=document.querySelector('#item4.computer') //the rock image that appears when the computer choice is shown
    const spockComputer=document.querySelector('#item5.computer') //the rock image that appears when the computer choice is shown

    const scoreBoard=document.querySelector(".scoreboard") //the scoreboard

    var computerChoiceIndex; //the index of the option chosen by the computer

    var losesAgainst=[ //the matrix that contains the enemies of every element
        [4, 1], //the enemies of  number 0(rock): number 4(spock) and number 1 (paper)
        [2, 3], //the enemies of  number 1(paper): number 2(scissors) and number 3 (lizard)
        [0, 4], //the enemies of  number 2(scissors): number 0(rock) and number 4 (spock)
        [0, 2], //the enemies of  number 3(lizard): number 0(rock) and number 2 (scissors)
        [1, 3] //the enemies of  number 4(spock): number 1(paper) and number 3 (lizard)
    ];

    var popUpIndex=0; //the index that takes value 0 if the pop-up menu is closed and value 1 if the menu is opened

    let options=['rock','paper','scissors','lizard','spock']
    
    var chosenOption //the variable used to store the index of the option chosen by user

    var userScore=0 //the variable used to store the number of rounds won by the user

    var computerScore=0 //the variable used to store the number of rounds won by the computer

    var numberOfRoundsPlayed=-1 //the variable used to store the number of rounds played
    
    //function used to animate the pop-up menu where the user can choose what he desires to use
    function pop(){
        if(popUpIndex==0){
            document.getElementById("item1").style.transform='translate(-150px,-70px)'
            document.getElementById("item2").style.transform='translate(0, -205px)'
            document.getElementById("item3").style.transform='translate(150px, -70px)'
            document.getElementById("item4").style.transform='translate(-75px, 75px)'
            document.getElementById("item5").style.transform='translate(75px, 75px)'
            menuOptionsUser.forEach(option => {
                option.style.pointerEvents="auto"
            });
            popUpIndex=1
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
            popUpIndex=0;
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
           numberOfRoundsPlayed--
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
        popUpIndex=0
        computerChoiceIndex=[]
        chosenOption=[]
        menuOptionsUser.forEach(option => {
            option.style.pointerEvents="auto"
        });
        setTimeout(function(){
            menuUser.classList.remove('hidden') 
            resetMenuButtons(); 
            checkIfAnyoneWon()
        }, 3000);
        
    }

    function checkIfGameEnded(){
        if(numberOfRoundsPlayed==11 || computerScore==6 || userScore==6)
            return 1
        else 
            return 0
    }

    function checkIfAnyoneWon(){
        if(checkIfGameEnded()==0){
            pop()
        }
        else{
            if(computerScore>userScore)
            document.location ="file:///D:/Proiecte/Web%20Dev/Rock-Paper-Scissors-Lizzard-Spock/splashGameOverLose.html";
            else if(computerScore<userScore)
            document.location ="file:///D:/Proiecte/Web%20Dev/Rock-Paper-Scissors-Lizzard-Spock/splashGameOverWin.html";
        }
    }
    
    function userEndTurn(){
        popUpIndex=1
        pop()
        returnChosenOption()
        computerChoice()
        settleScore()
        updateScore()  
        reset()
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

