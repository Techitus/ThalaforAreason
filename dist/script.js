function checkThala() {
   
    //Fetch the input
    let userInput = document.getElementById('inputField').value.trim();

//Convert the input into string 
    let inputString = String(userInput)

//To get array of inividual digits
    let digitArray = inputString.split('').map(Number);

    //To calculate the sum of the digits
    let sum = digitArray.reduce((a , b) => a + b, 0)
    
    //To check condition
    if(sum === 7){
        alert('Thala for a reason')

    }
   else  if(userInput.length === 7 || userInput === "7"){
        alert("Thala for a reason")
    }
       
    else{
alert("ufs")

    }
    //To reset the user input
    inputField.value = "";
    }
