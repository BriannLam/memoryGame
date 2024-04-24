let chosenCards = []
let finishCards = []

let currColor = ''
let afterColor = ''

let count = 0
let first_instance = -1 

document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    const colorExist = [
        "red", 
        "orange", 
        "yellow", 
        "green", 
        "blue", 
        "indigo", 
        "violet", 
        "white", 
        "maroon", 
        "purple", 
        "pink", 
        "brown", ]
    let colorPresent = [ ...colorExist, ...colorExist]

    function randomizer(originalArray){
        let array = [...originalArray];
        let shuffledArray = [];
        while (array.length > 0){
            const randomNumber = [Math.floor(Math.random() * array.length)];
            shuffledArray.push(array[randomNumber]);
            array.splice(randomNumber , 1);
        }
        return shuffledArray;
    }
    
    function gameCreate(){     // Create the game function 
        let colors = randomizer(colorPresent)   
        let colorCardStack = []

        for(let i=0; i < colors.length; i++){
            const colorCard = document.createElement('div')     // Creates all the cards
            colorCard.classList.add('colorCard');
            colorCard.id = i    // ID of the color 
            colorCard.style.backgroundColor = colors [i] // Sets background color to color of the card

            chosenCards[i] = colors[i] // Puts all colors (IN ORDER) into an array, thats UNAFFECTED by the for loop

            colorCard.style.zIndex = 0;
            colorCard.style.backgroundColor = "#000000" // Sets background to black 
                     
            gameBoard.appendChild(colorCard)
            colorCardStack.push(colorCard);
        }
        console.log(chosenCards)
        console.log(colorCardStack)

        for (let i = 0; i < colorCardStack.length; i++) {
                colorCardStack[i].addEventListener("click", function() {
                    changeColor(i)
                });
        }
        
        function winCondition(index){
            if(finishCards.length == 1 ){
                colorCardStack[index].style.backgroundColor = chosenCards[index]
                alert('You won')
            }
        }
        

        function changeColor(index) {
            if(count == 0){ // Count = 0, WHICH IS ----> 
                colorCardStack[index].style.backgroundColor = chosenCards[index]
                currColor = chosenCards[index] // TELLS the computer what the next card should be 
                first_instance = index; // Logs the index of the first card in the pair
                console.log(currColor)
            }
            if(count == 1){ // This checks if the card youre clicking on is the second card in the pair
                if(index != first_instance){
                    colorCardStack[index].style.backgroundColor = chosenCards[index]
                    afterColor = chosenCards[index] // Another version of currColor except that it is for the second card being clicked
                    console.log(afterColor)
                }
            }

            count++

            // CHECK LOGIC
            if(count == 2 && currColor !== afterColor){ //If they do not match they wull go back to the color black

                // Set timeout for reveal, before going black

                // SET TIMEOUT FUNCION BEFORE RUNNING THIS    
                setTimeout(function(){ 
                    colorCardStack[first_instance].style.backgroundColor = "#000000"  
                    colorCardStack[index].style.backgroundColor = "#000000"
                 }, 500);
      
                console.log("TEST")
                count = 0
            }
            if(count == 2 && currColor === afterColor){ //If they match then it resets the count and instance and should do win thing
                if(index != first_instance){
                    console.log("TEST")
                    finishCards.push(chosenCards[index])
                    console.log(finishCards)
                    setTimeout(function(){ 
                        winCondition(index)
                     }, 500);
                    first_instance = -1; // Basically tells the computer that youre on a new color
                    count = 1
                    //win thingy
                }
                count = 1
            }
        }

    }   

    function game(){
        gameCreate()
    }
    game()
    });

    // BUGS TO FIX //
    // 1. Clicking the SAME card and it still resets count // HARDEST BUG