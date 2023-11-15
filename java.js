
let score=JSON.parse(localStorage.getItem('score'))||{
    Wins:0,
    Lose:0,
    Tie:0
};
updateScore();

function restartScore(){
        score.Wins=0;
        score.Lose=0;
        score.Tie=0;
        localStorage.removeItem('score');
        updateScore();
        /*alert(`Wins:${score.Wins}, Lose:${score.Lose}, Ties:${score.Tie}`); localStorage.removeItem('score'); */
    }

function computerMove(){
    const compMove=Math.random();
    let move='';
    if(compMove>=0 && compMove<=1/3){
        move='rock';
    }
    else if (compMove>=1/3 && compMove<=2/3){
        move='paper';

    }
    else{
        move='scissors';
    }
    return move;
    
}

function gamePlay(yourChoice){
    let res='';
    if(yourChoice==="rock"){
        if(move==='rock'){
            res='Tie';
        }
        else if(move==='paper'){
            res='You Lose';
        }
        else if(move==='scissors'){
            res='You Win';
        }
    }
    else if(yourChoice==="paper"){
        if( move==='paper'){
            res='Tie';
        }
        else if( move==='rock'){
            res='You Win';
        }
        else if( move==='scissors'){
            res='You Lose';
        }
    }
    else if(yourChoice==="scissors"){
        if(move==='scissors'){
            res='Tie';
        }
        else if(move==='rock'){
            res='You Lose';
        }
        else if(move==='paper'){
            res='You Win';
        }
    }

    if(res==='You Win'){
        score.Wins+=1;
    }
    else if(res==='You Lose'){
        score.Lose+=1;
    }
    else if(res==='Tie'){
        score.Tie+=1;
    }

   
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('.ress').innerHTML=res;
    document.querySelector('.show').innerHTML=`You 
    <img src="${yourChoice}-emoji.png" alt="rock" class="move-icon">
    <img src="${move}-emoji.png" alt="scissors" class="move-icon">
    Computer`;


}


function updateScore() {
        document.querySelector('.result').innerHTML = `Wins:${score.Wins}, Lose:${score.Lose}, Ties:${score.Tie}`;
    }









