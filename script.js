// Click on the game they want to play

// 1. Get player balance (create user profile in the game database)
// 2. Deposit money into the player game
// 3. Get game username OR Launch the game (if relevant)
// 4. Withdraw money from the game

function launchGame(prodID,gameImg){
    //alert(`Game product ${prodID} has been selected`)
    localStorage.setItem('prodID', JSON.stringify(prodID));
    localStorage.setItem('gameImg', JSON.stringify(gameImg));
    //window.location.replace("http://127.0.0.1:5500/mega888%20website/current-game/index.html")
}
