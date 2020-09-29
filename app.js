//factories: players
//modules: gameboard, display
//X = 1, O = 0;

const player = (name)=>{
    const getName = ()=> name;
};

const gameBoard = (()=>{
    const getArr = () => GB = [];

    const squares = (id, status) =>{
        const getID = () => id;
        const getStatus = () => status;
        
        return{
            getID,
            getStatus
        };
    }

    const makeGrid = () =>{
        
        for(let i=0;i<9;i++){
            let newSquare = squares(i, null);
            GB.push(newSquares);
        }
    }

    const createBoard = item =>{
        const board = document.querySelector('#Game-container');
        const tile = document.getElementById('div');

        tile.classList.add('tile');
        tile.setAttribute('id', GB.indexOf(item));

        status.textContent = "status" + item.status;
        status.classList.add('status');
        tile.appendChild(status);

        board.appendChild(tile);
    }
    const getTile = () =>a;
    const winCheck = () =>a;
    const isEmpty = (tile) =>a;
    const makeX = () =>{
        let curr = getTile();
        if(isEmpty(curr)){
            curr = 1; //make tile x
        }
    }
    const makeO = () =>{
        let curr = getTile();
        if(isEmpty(curr)){
            curr = 0; //make tile o
        }
    }

    return{
        getArr,
        makeGrid,
        createBoard,
        getTile,
        winCheck,
        isEmpty,
        makeX,
        makeO,
    };

})();

const display = (()=>{
    const game = document.getElementById('Game-container');
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => game.removeChild(tile));

    for(let i=0;i<9;i++){
        gameBoard.createBoard(gameBoard.getArr[i]);
    }

})();
gameBoard.makeGrid();
display();