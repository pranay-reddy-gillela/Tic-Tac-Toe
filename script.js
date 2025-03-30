let boxes = document.querySelectorAll(".box");
let res = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-game-btn");

let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")
let turnO = true;

const wins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let i of wins){

        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
        }
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableAll();
}
const resetGame = () =>{
    turnO = true;
    enableAll();
    msgContainer.classList.add("hide");
}


const disableAll= ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableAll= ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

newGamebtn.addEventListener("click",resetGame);
res.addEventListener("click",resetGame);