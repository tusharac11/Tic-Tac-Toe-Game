let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset_btn");
let newGamebtn = document.querySelector("#newgamebtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#massage");

let turnO = true; // player X, Player O
let count = 0;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enabledBoxex();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    count++;
    if (turnO) {
        box.style.color = "white";
      box.innerText = "O";
      turnO = false;
    } else {
        box.style.color = "black";
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
   
    checkWinner(count);
    
    
    
  });
});

const disabledBoxex = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const enabledBoxex = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
reset.classList.remove("hide2");
const show_winner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxex();
  reset.classList.add("hide2");
};

const checkWinner = (count) => {
  for (const pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner = ", pos1Val);

        show_winner(pos1Val);
      }else{
        if(count == 9){
            drawFunc();
        }
      }
    }
  }
};

const drawFunc = ()=>{
    msg.innerText = `(No Result) DRAW `;
    msgContainer.classList.remove("hide");
}
newGamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
 