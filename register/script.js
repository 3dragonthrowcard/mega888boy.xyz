// Initialize USER_DATABASE from local storage or use the default array
let USER_DATABASE = JSON.parse(localStorage.getItem('USER_DATABASE')) || [
    {id: 1, username: "jy007", password: "Abc123"},
    {id: 2, username: "Kktan88", password: "596596"}
];


async function register(){
    const phone = document.getElementById("phoneInput").value
    const username = document.getElementById("usernameInput").value
    const password = document.getElementById("passwordInput").value
    const newID = USER_DATABASE.length + 1

    const newUser = {
        id:newID, 
        phone:phone, 
        username:username, 
        password:password
    }

    // check phone number
    const userExist = USER_DATABASE.find((data)=>data.phone == phone)
    console.log(userExist)

    if(userExist){
        alert("Phone number already exists")
    } else{
        USER_DATABASE.push(newUser)
    
        // Save updated USER_DATABASE to local storage
        localStorage.setItem('USER_DATABASE', JSON.stringify(USER_DATABASE));
        
        await createPlayer(username,password)
    
        console.log('Updated database =>',USER_DATABASE)
        alert('New user register successfully')
    }
}



async function createPlayer(username, password) {
    console.log('creating player');
    
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    };
    
    let bodyContent = JSON.stringify({
        "op": "mega",
        "mem": username,
        "pass": password,
        "sign": "0f6e1245ac25133cdfe3255a4b5a7760"
    });
    
    let response = await fetch("https://api.easytogo123.com/createplayer", { 
        method: "POST",  // Changed method to POST
        body: bodyContent,
        headers: headersList,
    });
    
    let data = await response.json();
    console.log(data);
}

//createPlayer("jc007", "123456");

async function getAppUsername(){
    console.log('get app username')
       
       let bodyContent = JSON.stringify({
         "op": "mega",
         "mem": "Kktan88",
         "prod": 16,
         "sign": "1d35929c1ceb0dca06caf3b01d486393"
       });
       
       let response = await fetch("https://api.easytogo123.com/getappusername", { 
         method: "POST",
         body: bodyContent
       });
       
       let data = await response.json();
       console.log(data);
       
}

//getAppUsername()