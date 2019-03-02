# C O N N E C T &nbsp;  F O U R

Link: https://kv-n.github.io/connectFour/

## GAME DESCRIPTION

**If your looking for a simple strategy game that can be played with just about anyone, including young children, Connect Four is for you. Connect Four is a simple game similar to Tic-Tac-Toe. Only instead of three in a row, the winner must connect four in a row.**


## TECHNOLOGIES USED

- [x] HTML
- [x] CSS
- [x] JavaScript

My approach to making this game was to see if I can code it using just JavaScript and no added libraries.


## GETTING STARTED

![Alt Text](https://i.imgur.com/xIcAYrh.png)

>Object: Connect four of your checkers in a row while preventing your opponent from doing the same. But, look out -- your opponent can sneak up on you and win the game!
>
>  — Milton Bradley, Connect Four "Pretty Sneaky, Sis" television commercial, 1977

Four in a Row, Four in a Line, Drop Four, and Gravitrips (in Soviet Union)) is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column.


![Alt Text](https://upload.wikimedia.org/wikipedia/commons/a/ad/Connect_Four.gif)



## NEXT STEPS

 
 
#### UNSOLVED PROBLEMS

- [ ] If column is full, alert user that it is full and a disk cannot be droped
- [ ] Changing the color of players name during turn switch
- [ ] Disc doesnt drop if clicking in a div with a disc already there

#### FUTURE PLANS

- [ ] Drop disc animation
- [ ] Refactor code
- [ ] Additional Animation
- [ ] Enter player names
- [ ] Make it responsive

 
## SUMMARY
Coding my first game was an emotional rollercoaster of frustration, stress and most importantly excitement. At the beginning of the week, I didn't even know where to begin, so I began to wirefrime useing good ol' pen and paper!

![Image of pen and paper wireframe](https://i.imgur.com/hRv1PJK.jpg)
 
As I was coding, it was pointed out that I had the numbers of the column and rows backwards and I had to think about it as a **column index**! So I was off to wire frame again. 

I started off using the created board using html and css as my actual wireframe for my javascript. 

![Image of wireframe](https://i.imgur.com/LHuyBsF.png)
 
The most difficult for me was getting the win condition and initializing it.

The win logic was a tough one, I thought I had to use a dozen or more if statements! However, after mulling for an hour and beating myself up, I mustered the courage to ask for help and lo' and behold, I learned an easier way to doing things! I wont bother with the entire code but here is the bread and butter: 

```
for (let rowIdx = 0; rowIdx < colArr.length; rowIdx++) {
        //check if disc is part of win
        winner = checkUp(colIdx, rowIdx) || checkRight(colIdx, rowIdx) || checkDiagUp(colIdx, rowIdx) || checkDiagDn(colIdx, rowIdx);
        if (winner) return;
```

It gets better! the checkRight function looks just as sweet!

```
function checkRight(colIdx, rowIdx) {
    if (colIdx > 3) return null;
    return Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] + board[colIdx + 2][rowIdx] + board[colIdx + 3][rowIdx]) === 4 ? board[colIdx][rowIdx] : null;
}
```

So after seeing a pattern with the win condition, I was able to finally understand what was going on and apply it to the rest of the game!

In summary, this was a fun and insightful first project that really helped me understand how important patterns are, with the game and with code! Though Connect Four is a simple game and there isnt much complexity in it, from my prespective it has helped me solidify the knowledge base I've gained so far and how to apply it to real life applications.

I wouldn't have been able to complete this project successfully as I did, without the help of my cohort and my instructors! 

So sit back, grab a friend and enjoy a game of Connect Four!