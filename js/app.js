console.log("ready")

/*----- constants -----*/

const maxRow = 7;
const maxCol = 6;
const curCount = 0;

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
    if ((e.target).getAttribute('id') === 'cboard' || (e.target).style.backgroundColor) return
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

    // checkWinner();

    render();
}



let colIdx = 6;
let rowIdx = 7;

// let matchVert =
// let matchHorz =

// let matchDiagUp =
// let matchDiagDown =


function checkWin() {

    winner = checkUp(colIdx, rowIdx)

    while (winner === false) {
        // winner = checkColWinner(colidx)
        winner = checkUp(colIdx);
    }
    return winner;
}

function checkColWinner() {
    //loop through each cell until winner
    //looping through each of the columns
    let matchVert = 0;
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            matchVert += board[i][j]
        } if (matchVert = 4) {
            return winner;
        } else if (colIdx > 2) {
            return null;
        }
        winner = checkUp(colIdx, rowIdx) || checkRow(colIdx, rowIdx) || checkDiagUp(colIdx, rowIdx) || checkDiagDown(colIdx, rowIdx)
    }
}

function checkUp(colIdx) {
    for (i = 0; i < board.length; i++) {
        for (j = 0; i < board[j].length; j++)
            if (colIdx > 2) return null;
        //boundary check, if its greater than two it will not check past it
    }
}




function checkRow(colIdx, rowIdx) {
   for (colIdx = 0; colIdx <= 3; colIdx++) {
        for (rowIdx = 0; rowIdx <= 5 ; rowIdx++) {
            if (board[rowIdx][colIdx] == i){
                if ((board[rowIdx][colIdx+1] == i) && (gameboard[rowIdx][colIdx+2] == i) && (gameboard[rowIdx][colIdx+3] == i)) {
                }
            }
        }
   }
}

// function checkRowWinner(idx) {
//     // for (i = 0; i < maxCol; i++) {}
//     //loop through each cell until winner
// }

// function checkDiagUp(idx) {
//     // for (i = 0; i < maxCol; i++) {}
//     if (rowIdx > 3) return null;
//     //loop through each cell until winner
// }

// function checkDiagDown(idx) {
//     // for (i = 0; i < maxCol; i++) {}
//     if (rowIdx > 3) return null;
//     //loop through each cell until winner
// }



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
