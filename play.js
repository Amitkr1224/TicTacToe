let turn = "X";
let gameFinish = false;
//! Change turn 

const changeTurn = () =>{
    return turn === "X"?"O":"X";
}

//! Function to check Win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let winner =[ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
]
    winner.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            gameFinish = true;
        }
    })
}

//! Game Logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameFinish){
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
            }
        }
    })
})

//! resest
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameFinish = false;
    if(!gameFinish){
        document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
    }
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
})