async function transfer(){
       const prodID = getCurrentGameId()

       let bodyContent = JSON.stringify({
         "op": "mega",
         "prod": prodID,
         "ref_no": "DEP000001",
         "amount": 10.00,
         "mem": "jy007",
         "pass": "ccc123",
         "sign": "d3abbdefec41e29018c537fb01271af2"
       });
       
       let response = await fetch("https://api.easytogo123.com/deposit", { 
         method: "POST",
         body: bodyContent,
       });
       
       let data = await response.text();
       console.log(data);
       alert("Deposit successful")
}

async function withdraw(){
       const prodID = getCurrentGameId()

       let bodyContent = JSON.stringify({
         "op": "mega",
         "prod": prodID,
         "ref_no": "WIT000001",
         "amount": 10.00,
         "mem": "jy007",
         "pass": "Abc123",
         "sign": "625ec28a0fc3607e046fdf6af4b19307"
       });
       
       let response = await fetch("https://api.easytogo123.com/withdraw", { 
         method: "POST",
         body: bodyContent,
       });
       
      // let data = await response.text();
      // console.log(data);
      alert("Withdraw successful")
}

function seeBalance(){

}

function getCurrentGameId(){
  const prodID = localStorage.getItem("prodID")
  return prodID
}


function loadImg(){
  const gameImg = document.getElementById("gameImg")
  const imgName = JSON.parse(localStorage.getItem("gameImg"))

  //console.log('non Parse data',localStorage.getItem("gameImg"))
  //console.log('Parsed data',JSON.parse(localStorage.getItem("gameImg")))
  
  gameImg.src = `../assets/${imgName}`
  gameImg.src = imgName

}