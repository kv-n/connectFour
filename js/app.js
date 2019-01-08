console.log("ready")

/*----- constants -----*/

const curCount = 0;
let colMax = 6;
let rowMax = 7;

const playerColors = {
    '1': "red",
    '-1': 'yellow',
};

/*----- app's state (variables) -----*/

let board;
let turn;
let winner = false;


/*----- cached element references -----*/

const turnMsgEl = document.querySelector('h3');

const playAgainBtn = document.querySelector('button');


/*----- event listeners -----*/

document.getElementById('cboard').addEventListener('click', clickEvt)
playAgainBtn.addEventListener('click', init);

// document.getElementById('cboard').addEventListener('click', colFull)


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
    //board = new Array(9).fill(null)
    turn = 1;
    winner = null;
    render();
}


function render() {
    // render whos turn it is on DOM how many games won

    if (winner) {
        if (winner === "T") {
            turnMsgEl.textContent = "Rats, another Tie!";
        } else {
            turnMsgEl.textContent = `${playerColors[winner].toUpperCase()} Wins!`;
        }
    } else {
        turnMsgEl.textContent = `${playerColors[turn].toUpperCase()}'s Turn`;
    }
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';

}

function clickEvt(e) {
    //if what you clicked had the id cboard or if there is a value to the background color, exit out of the function.
    if ((e.target).getAttribute('id') === 'cboard' || (e.target).style.backgroundColor || winner) return
    console.log(e.target);

    //col is selecting the column which we gave the custom name to represent column number
    //charAt(num) is selecting the column number.
    let col = e.target.id.charAt(1);

    //in the board array, col is selecting the correct array that correpsond to the column we clicked on
    // let col = e.target.getAttribute('data-col');
    // console.log(col + ' this is the column');

    //check if the column is full before you push turn

    board[col].push(turn);

    //it selects the row we want to be coloring in for playerTurn
    //board[col].length is always number based. 
    //To get the index of the last element in the array we would minus board[col].length by 1 (-1).
    let row = board[col].length - 1
    // console.log(row + ' this is the row');

    //changing the background color to the playercolor we specified to the chosen column and 
    //adding it to the last index of that nested array
    document.getElementById(`c${col}r${row}`).style.backgroundColor = playerColors[turn];
    console.log(turn)

    turn *= -1;

    checkWin();

    render();
}

// let matchVert =
// let matchHorz =

// let matchDiagUp =
// let matchDiagDown =


function checkWin() {
    winner = null;
    for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
        checkRow(rowIdx)
        if (winner) return;
    }
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
        winner = checkUp(colIdx, rowIdx) || checkRight(colIdx, rowIdx)
        if (winner) return;
    }
    // TODO: check for tie
}

function checkRow(rowIdx) {
    //set winner to (1 or -1), 'T' for a tie, or null if no winner or tie  
    winner = null;
    //obtain column array
    let rowArr = board[rowIdx];
    //itterate through each disc
    for (let colIdx = 0; colIdx < rowArr.length; colIdx++) {
        //check if disc is part of win
        winner = checkUp(colIdx, rowIdx) || checkRight(colIdx, rowIdx)
        if (winner) return;
    }
    // TODO: check for tie
}

function checkUp(colIdx, rowIdx) {
    if (rowIdx > 2) return null;
    let colArr = board[colIdx];
    return Math.abs(colArr[rowIdx] + colArr[rowIdx + 1] + colArr[rowIdx + 2] + colArr[rowIdx + 3]) === 4 ? colArr[rowIdx] : null;
}

function checkRight(colIdx, rowIdx) {
    if (colIdx > 4) return null;
    let rowArr = board[rowIdx];
    return Math.abs(rowArr[colIdx] + rowArr[colIdx + 1] + rowArr[colIdx + 2] + rowArr[colIdx + 3]) === 4 ? rowArr[colIdx] : null;

}



// //not working...
// // function colFull() {
// //     for (i = 0; i < maxCol; i++) {
// //         if (board[i].length == maxCol) {
// //             alert("GO AWAY!")
// //             return
// //         }
// //     }
// // }


// //in responser to user interaction(such as a click)
// //update all relevant state
// //render()


// //recursion is when a function calls itself


















var highlight = document.getElementsByClassName("col0");

for (var i = 0; i < highlight.length; i++) {
    highlight[i].addEventListener("mouseover", highlightThem);
    highlight[i].addEventListener("mouseout", DontHighlightThem);
}

function highlightThem() {
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].classList.add("lit");
    }
}
function DontHighlightThem() {
    for (var i = 0; i < highlight.length; i++) {
        highlight[i].classList.remove("lit");
    }
}