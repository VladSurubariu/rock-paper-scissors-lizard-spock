document.addEventListener('DOMContentLoaded', ()=>{

    const menu=document.querySelector('.menu')
    const rock=document.querySelector('#item1')
    const paper=document.querySelector('#item2')
    const scissors=document.querySelector('#item3')
    const lizard=document.querySelector('#item4')
    const spock=document.querySelector('#item5')
    const menuOptions=document.querySelectorAll('.item')

    var index=0;

    var countClicks=0;

    let options=['rock','paper','scissors','lizard','spock']
    
    var userItems=document.getElementsByClassName("user")
    
    function pop(){
        if(index==0){
            document.getElementById("item1").style.transform='translate(-150px,-50px)'
            document.getElementById("item2").style.transform='translate(0, -190px)'
            document.getElementById("item3").style.transform='translate(150px, -50px)'
            document.getElementById("item4").style.transform='translate(-75px, 90px)'
            document.getElementById("item5").style.transform='translate(75px, 75px)'
            menuOptions.forEach(option => {
                option.style.pointerEvents="auto"
            });
            index=1
            return
        }
        else{
            document.getElementById("item1").style.transform='translate(0, -50px)'
            document.getElementById("item2").style.transform='translate(0, -50px)'
            document.getElementById("item3").style.transform='translate(0, -50px)'
            document.getElementById("item4").style.transform='translate(0, -50px)'
            document.getElementById("item5").style.transform='translate(0, -50px)'
            menuOptions.forEach(option => {
                option.style.pointerEvents="none"
            });
            index=0;
            return
        }
    }
    
    function randomChoice(){
        var computerChoiceIndex=Math.floor(Math.random() * 5);
        console.log(options[computerChoiceIndex], computerChoiceIndex)
    }
    
    function disableAll(){
        
    }
    
    function userEndTurn(){
        randomChoice()
        index=1
        pop()
        disableAll()
    
    }

    function rockOption(){

    }



    menu.addEventListener('click',pop)
    rock.addEventListener('click', rockOption)
    paper.addEventListener('click', paperOption)
    scissors.addEventListener('click', scissorsOption)
    lizard.addEventListener('click', lizardOption)
    spock.addEventListener('click', spockOption)
})

