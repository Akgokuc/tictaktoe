console.log("Welcome to TicTacToe");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn ="X";
let isgameover = false;


// function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

// function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [1,4,7],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "" ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON!";
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="600px"
            gameover.play();
        }
    })
}

// game logic

music.play()

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText ==='')
            {
                boxtext.innerText = turn;
                turn = changeTurn();
                audioturn.play();
                checkWin();
                if(!isgameover){
                    document.getElementsByClassName("info")[0].innerText = 'Turn for ' + turn;
                }
                
            }
    })
})



