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
        if (sum == 7) {
            confettiAnimation();
            Swal.fire({
                title: "The Message is clear!!! <br> Thala for a Reason",
                text: "Thala For A Reason!",
                html: '<video autoplay loop class="text-center"><source src="/dist/assests/correct.mp4" type="video/mp4"></video>',       
                 showCloseButton: true,
                focusConfirm: true,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'OK',
            });
        } 

        else {
            Swal.fire({
                title: "Wrong!",
                text: "Not Thala For A Reason!",
                imageUrl: "/dist/assests/gg.jpg",
                imageWidth: 400,
                imageHeight: 250,
                imageAlt: "Not Thala"
            });
            
        }
    }
    
    function confettiAnimation() {
        let duration = 5 * 1000;
        let animationEnd = Date.now() + duration;
        let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }
    
        let interval = setInterval(function() {
            let timeLeft = animationEnd - Date.now();
    
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }
    
            let particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
    