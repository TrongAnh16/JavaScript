let a = document.getElementById("tictactoe");
let board = [];
let data = "";
var h = 1;
for (let i = 0; i < 5; i++) {
    board[i] = new Array(".", ".", ".", ".", ".");
}
for (let i = 0; i < 5; i++) {
    data += "<br>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;";
    }
}
a.innerHTML = data;

function changeValue() {
    data = "";
    let positionX = prompt("Enter the position of x:");
    let positionY = prompt("Enter the position of y:");
    
    if (h % 2 == 0) {
        board[positionX][positionY] = "x";
    }else{
        board[positionX][positionY] = "o";
    }
    h++;
    for (let i = 0; i < 5; i++){
        data += "<br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;";
        }
    }
    a.innerHTML = data;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (board[i][j] === "x" && board[i][j+1] === "x" && board[i][j+2] === "x" ||
                board[i][j] === "x" && board[i+1][j] === "x" && board[i+2][j] === "x"){
                    alert("x thắng");
                }else if(board[i][j] === "o" && board[i+1][j] === "o" && board[i+2][j] === "o" ||
                       board[i][j] === "o" && board[i+1][j] === "o" && board[i+2][j] === "o"){
                        alert("o thắng");
                       }
        }
    }
    a.innerHTML = "<hr>" + data;}