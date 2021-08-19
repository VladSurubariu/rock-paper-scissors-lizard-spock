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
        if(popUpIndex==0){ //if the menu is closed each option is moved to a specific position 
            document.getElementById("item1").style.transform='translate(-150px,-70px)' //the rock moves to the left
            document.getElementById("item2").style.transform='translate(0, -205px)' //the paper goes up
            document.getElementById("item3").style.transform='translate(150px, -70px)' //the scissors go right
            document.getElementById("item4").style.transform='translate(-75px, 75px)' //the lizard goes to the south-west
            document.getElementById("item5").style.transform='translate(75px, 75px)' //and spock goes to the south-east
            menuOptionsUser.forEach(option => { //for each of those options
                option.style.pointerEvents="auto" //they become clickable
            });
            popUpIndex=1 //and now the variable popUpIndex takes value 1 because the menu is opened
            return 
        }
        else{ //if the menu is opened every element goes back to the center
            document.getElementById("item1").style.transform='translate(0, -60px)' 
            document.getElementById("item2").style.transform='translate(0, -60px)'
            document.getElementById("item3").style.transform='translate(0, -60px)'
            document.getElementById("item4").style.transform='translate(0, -60px)'
            document.getElementById("item5").style.transform='translate(0, -60px)'
            menuOptionsUser.forEach(option => { //for each option
                option.style.pointerEvents="none" //they become unclickable
            });
            popUpIndex=0; //the variable popUpIndex takes value 0 because the menu is closed
            return
        }
    }
    
    //the function generates a random number and uses it in order to make the computer choice 
    function computerChoice(){
        computerChoiceIndex=Math.floor(Math.random() * 5); //generating the random number
        switch (computerChoiceIndex) { //depeding on the random number a certain image is brought in the foreground by updating the zIndex
            case 0: //case rock 
                rockComputer.style.zIndex="3"
                break;
            case 1: //case paper
                paperComputer.style.zIndex="3"
                break;
            case 2: //case scissors
                scissorsComputer.style.zIndex="3"
                break;
            case 3: //case lizard
                lizardComputer.style.zIndex="3"
                break;
            case 4: //case spock
                spockComputer.style.zIndex="3"
                break;
        }
    }

    //the function makes every element unclickable and brings forward the user's choice
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

    //every object's is brought back in the background
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

    //the function is used to update the score variables by using the losesAgainst matrix
    function settleScore(){
        if(losesAgainst[chosenOption][0]==computerChoiceIndex || losesAgainst[chosenOption][1]==computerChoiceIndex){ //chosenOption is an index with values from
            //0 to 4, each value matching an element. if the chosenOption has value 0 it means that the user chose ROCK and it will search for rock's enemies, stored on
            //first and second column of the matrix. if the any of the values found in the columns match the value of computerChoice, it means that the user lost the 
            //round 
            computerScore++ //and the computer score goes up by one
        }
        else if (losesAgainst[computerChoiceIndex][0]==chosenOption || losesAgainst[computerChoiceIndex][1]==chosenOption){ //if the values found in the columns don't 
            //match the value of computerChoice it means that the player could have won. we search of the row of computerChoice to see if the option chosen by the user
            //matches with any of the numbers in the columns, and if so it means that the user won the round
            userScore++
        }
        else{ //else it was a draw and the number of rounds played stays the same
           numberOfRoundsPlayed--
        }
        numberOfRoundsPlayed++
    }

    //the function updates the score visually by modifying the innerHTML in the scoreboard
    function updateScore(){
        const userText="User ";
        const computerText=" Computer"
        const dashText="-"
        scoreboardText=userText.concat(userScore).concat(dashText).concat(computerScore).concat(computerText)
        scoreBoard.innerHTML=scoreboardText
    }

    //function resets the element so that the next round can be played
    function reset(){
        popUpIndex=0 //the popUpIndex goes back to 0
        computerChoiceIndex=[] //computerChoice is deinitialised
        chosenOption=[] //user choice is deinitialised
        menuOptionsUser.forEach(option => { //every option becomes clickable
            option.style.pointerEvents="auto"
        });
        setTimeout(function(){ //after 3 seconds
            menuUser.classList.remove('hidden') //the pop-up menu can be used 
            resetMenuButtons()
            checkIfGameContinues() //check if anyone won
        }, 3000);
        
    }
    
    //the function checks if the game should end
    function checkIfGameEnded(){
        if(numberOfRoundsPlayed==11 || computerScore==6 || userScore==6)
            return 1
        else 
            return 0
    }

    //the function checks if the game should continue or not
    function checkIfGameContinues(){
        if(checkIfGameEnded()==0){ //if the game doesnt have to end 
            pop() //the pop-up menu is opened
        }
        else{ //if the game has to end 
            if(computerScore>userScore) //if the computer won more rounds than the user the page changes
                document.location ="file:///D:/Proiecte/Web%20Dev/Rock-Paper-Scissors-Lizzard-Spock/splashGameOverLose.html";
            else if(computerScore<userScore) //if the user won more rounds than the computer the page changes
                document.location ="file:///D:/Proiecte/Web%20Dev/Rock-Paper-Scissors-Lizzard-Spock/splashGameOverWin.html";
        }
    }
    
    //the function is called after the user made his choice
    function userEndTurn(){
        popUpIndex=1 //popUpIndex is forced to 1 and the menu is closed
        pop()
        returnChosenOption() //the choice of the user is shown 
        computerChoice() //the choice of the computer is generated and shown
        settleScore() //the score is settled
        updateScore() //the score is updated visually
        reset() //the next round starts
    }


    function rockOption(){ //when the rock is clicked
        chosenOption=0 
        userEndTurn()
    }

    function paperOption(){ //when the paper is clicked
        chosenOption=1
        userEndTurn()
    }
    
    function scissorsOption(){ //when the scissors is clicked
        chosenOption=2
        userEndTurn()
    }

    function lizardOption(){ //when the lizard is clicked
        chosenOption=3
        userEndTurn()
    }

    function spockOption(){ //when the spock is clicked
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

