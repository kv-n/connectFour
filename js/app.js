/*----- constants -----*/

const playerColors = {
    '1': '#D92119',
    '-1': '#FBDA67',
};

/*----- app's state (variables) -----*/

let board;
let turn;
let winner;

/*----- cached element references -----*/

const turnMsgEl = document.querySelector('h3');

const playAgainBtn = document.querySelector('button');

//to use array methods we use querySelectorAll because 
//element by id gived us an object and cant run array methods
const highlight = document.querySelectorAll(".dropToken");

/*----- event listeners -----*/

document.getElementById('cboard').addEventListener('click', clickEvt)
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/

init();

function init() {
    board = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    turn = 1;
    winner = null;

    //since its now a nodelist we can run forEach setting each style to ''(empty)
    //selecting all the elements since its setting by style were setting their style to blank
    //when the game is being rendered or reset.
    highlight.forEach(function(el){el.style=''})

    render();
}

function render() {

    if (winner) {
        if (winner === "T") {
            turnMsgEl.textContent = "Congrats! You both lose!";
        } else {
            let name = '';
            //hard coding name: Yellow and name: Red
            turn === 1 ? name = 'Yellow' : name = 'Red';
            turnMsgEl.textContent = `${name} Wins!`;
        }
    } else {
        let name = '';
        turn === 1 ? name = 'Red' : name = 'Yellow';
        turnMsgEl.textContent = `${name}'s Turn`;
    }
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';

}

function clickEvt(e) {
    //if what you clicked had the id cboard or if there is a value to the background color, exit out of the function.
    if ((e.target).getAttribute('id') === 'cboard' || (e.target).style.backgroundColor || winner) return
    //col is selecting the column which we gave the custom name to represent column number
    //charAt(num) is selecting the column number.
    let col = e.target.id.charAt(1);
    board[col].push(turn);

    //it selects the col we want to be coloring in for playerTurn
    //board[col].length is always number based. 
    //To get the index of the last element in the array we would minus board[col].length by 1 (-1).
    let row = board[col].length - 1

    //changing the background color to the playercolor we specified to the chosen column and 
    //adding it to the last index of that nested array
    //setting style of the just background
    document.getElementById(`c${col}r${row}`).style.backgroundColor = playerColors[turn];
    
    turn *= -1;
    checkWin();
    //in responser to user interaction(such as a click)
    //update all relevant state
    //call render()
    render();
}

function checkWin() {
    winner = null;
    for (let colIdx = 0; colIdx < board.length; colIdx++) {
        checkCol(colIdx);
        if (winner) return;
    }
}

function checkCol(colIdx) {
    //set winner to (1 or -1), 'T' for a tie, or null if no winner or tie  
    winner = null;
    //obtain column array
    let colArr = board[colIdx];
    //itterate through each disc
    for (let rowIdx = 0; rowIdx < colArr.length; rowIdx++) {
        //check if disc is part of win
        winner = checkUp(colIdx, rowIdx) || checkRight(colIdx, rowIdx) || checkDiagUp(colIdx, rowIdx) || checkDiagDn(colIdx, rowIdx);
        if (winner) return;
    }
    //get tie: using .reduce to go through the board and the column index to check for discs and storing it to the acc. in the variable numDiscs
    //if the number of discs is 42 it will return a tie, if not, it will return
    let numDiscs = board.reduce(((acc, colArr) => acc + colArr.length), 0);
    //if winner = the number of disc of 42 taken circles on the board it will return a Tie otherwise it will just go back to null
    winner = numDiscs === 42 ? 'T' : null;
}

function checkUp(colIdx, rowIdx) {
    if (rowIdx > 3) return null;
    let colArr = board[colIdx];
    //goes through the columns array in the board array and checking if theres a match of 4 in every row going up if not return null
    return Math.abs(colArr[rowIdx] + colArr[rowIdx + 1] + colArr[rowIdx + 2] + colArr[rowIdx + 3]) === 4 ? colArr[rowIdx] : null;
}

function checkRight(colIdx, rowIdx) {
    if (colIdx > 2) return null;
    //goes through the board array, using column index and row index checking for a match of 4 in every row going right and checking up to 4
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] + board[colIdx + 2][rowIdx] + board[colIdx + 3][rowIdx]) === 4 ? board[colIdx][rowIdx] : null;
}

function checkDiagUp(colIdx, rowIdx) {
    if (colIdx > 3 || rowIdx > 2) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + 1] + board[colIdx + 2][rowIdx + 2] + board[colIdx + 3][rowIdx + 3]) === 4 ? board[colIdx][rowIdx] : null;
}

function checkDiagDn(colIdx, rowIdx) {
    if (colIdx > 3 || rowIdx < 3) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx - 1] + board[colIdx + 2][rowIdx - 2] + board[colIdx + 3][rowIdx - 3]) === 4 ? board[colIdx][rowIdx] : null;
}

//MOVEOVER AND MOUSEOUT EFFECTS

for (var i = 0; i < highlight.length; i++) {
    highlight[i].addEventListener("mouseover", highlightThem)
    highlight[i].addEventListener("mouseout", DontHighlightThem);
}

function highlightThem(evt) {
    //had split them because there was moe then one class name on the element and we wanted to grab the col
    const columName = evt.target.className.split(' ')[1]
    const eles = document.getElementsByClassName(columName)
    for (var i = 0; i < eles.length; i++) {
        eles[i].classList.add("lit")
    }
}

function DontHighlightThem() {
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].classList.remove("lit")

    }
}