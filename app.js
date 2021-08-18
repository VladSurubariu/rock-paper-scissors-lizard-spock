document.addEventListener('DOMContentLoaded', ()=>{

    const menuUser=document.querySelector('.menu.user')
    
    const rockUser=document.querySelector('#item1.user')
    const paperUser=document.querySelector('#item2.user')
    const scissorsUser=document.querySelector('#item3.user')
    const lizardUser=document.querySelector('#item4.user')
    const spockUser=document.querySelector('#item5.user')

    const menuOptionsUser=document.querySelectorAll('.item.user')
    const userOptions=document.querySelectorAll('.user')

    const menuComputer=document.querySelector('.menu.computer')
    
    const rockComputer=document.querySelector('#item1.computer')
    const paperComputer=document.querySelector('#item2.computer')
    const scissorsComputer=document.querySelector('#item3.computer')
    const lizardComputer=document.querySelector('#item4.computer')
    const spockComputer=document.querySelector('#item5.computer')

    const menuOptionsComputer=document.querySelectorAll('.item.computer')
    const computerOptions=document.querySelectorAll('.computer')

    var computerChoiceIndex;

    var losesAgainst=[
        ["spock", "paper"], //rock
        ["scissors","lizard"], //paper
        ["rock","spock"], //scissors
        ["rock","scissors"], //lizard
        ["paper", "lizard"] //spock
    ];

    var index=0;

    let options=['rock','paper','scissors','lizard','spock']
    
    var chosenOption
    
    function pop(){
        if(index==0){
            document.getElementById("item1").style.transform='translate(-150px,-50px)'
            document.getElementById("item2").style.transform='translate(0, -190px)'
            document.getElementById("item3").style.transform='translate(150px, -50px)'
            document.getElementById("item4").style.transform='translate(-75px, 90px)'
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

    function settleScore(){

    }
    
    function userEndTurn(){
        index=1
        pop()
        returnChosenOption()
        computerChoice()
        settleScore()

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

