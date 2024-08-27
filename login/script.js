// Build user login
const USER_DATABASE = [
    {id:1,username:"jy007",password:"Abc123"},
    {id:2,username:"Kktan88",password:"596596"}
]

// Initialize the empty user
let loggedInUser = null

function login(){

    const username = document.getElementById("usernameInput").value
    const password = document.getElementById("passwordInput").value

    // check if username exist
    const userExist = USER_DATABASE.find((data)=>data.username == username)
    console.log(userExist)

    // if username = {id:2,username:"Kktan88",password:"596596"} | false
    // if username = undefined | true
    
    if(userExist){
        if(password == userExist.password){
            // store logged in user into the local storage
            loggedInUser = userExist
            
            console.log('user login successfully')
            //loggedInUser = {id:1,username:"jy007",password:"Abc123"}
        } else{
            console.log('incorrect password')
        }
    }
    else{
        console.log('username not recognized')
    }

}

// Upon login, make a fetch API

// When click on the game, make a deposit into the game

// Play the game on phone

// After user session ends, do the withdraw

