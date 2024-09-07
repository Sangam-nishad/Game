let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let newgamebtn = document.querySelector("#new-gamebtn");
let msgcontainer = document.querySelector(".msgcontainer ");
let msg = document.querySelector("#msg");
let turnO = true;

let winpatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];


let resetgame = () => {
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {

            box.innerText = "O";
            //box.style.color = "blue";
            turnO = false;
        }
        else {
            box.innerText = "X";
            // box.style.color = "yellow";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

let disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
let showwinner = (winner) => {
    msg.innerText = `congrats,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
let checkwinner = () => {
    for (let pattern of winpatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);