import './main.css';

const boardList = document.querySelector('.boardList');

const boardListArr = [
    {
        name: 'John: 100',
        Index: 0,
    },
    {
        name: 'Tom: 20',
        Index: 1,
    },
    {
        name: 'Mark: 50',
        Index: 2,
    },
    {
        name: 'Rita: 78',
        Index: 3,
    },
    {
        name: 'Nat: 125',
        Index: 4,
    },
    {
        name: 'Ben: 77',
        Index: 5,
    },
    {
        name: 'Pat: 42',
        Index: 6,
    },
];

function showScores() {
    for (let i = 0; i < boardListArr.length; i += 1) {
        boardList.innerHTML += ` <div class="score-board">
        <p class="scores">${boardListArr[i].name}</p>
      </div>
        `
    }
}

showScores();