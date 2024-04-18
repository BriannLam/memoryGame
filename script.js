document.addEventListener("DOMContentLoaded", () => {
    
    const gameBoard = document.getElementById("game-board");
    

    const colorExist = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "maroon", "purple", "pink", "brown", ]

    let colorPresent = [ ...colorExist, ...colorExist]

    let chosen = [];

    // console.log(colorPresent)


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
    
    


    function colorCardCreate(){
        let colors = randomizer(colorPresent)
        let colorCardStack = []
        let chosenCards = []
        for(let i=0; i < colors.length; i++){
            const colorCard = document.createElement('div')
            colorCard.classList.add('colorCard');
            colorCard.id = "colorCard"
            colorCard.style.backgroundColor = colors [i]
            colorCard.style.zIndex = 0;
                     
            console.log(colorCard)
            gameBoard.appendChild(colorCard)

            colorCardStack.push(colorCard);
        }
    }   

    
    function coverCardCreate(){
        let colors = randomizer(colorPresent)
        let coverCardStack = []
        let chosenCards = []
        for(let i=0; i < colors.length; i++){
            const coverCard = document.createElement('div')
            coverCard.classList.add('coverCard');
            coverCard.id = "coverCard"
            coverCard.style.backgroundColor= "black";
            coverCard.style.zIndex = 1;
 
            coverCard.addEventListener('click', function() {
                console.log('Card clicked:', coverCard);
                limit(card); // Call the check function whenever a card is clicked
            });
    
            coverCardStack.push(coverCard);
        }
        
       function limit(clickedCard){
        if (chosenCards.length < 2){
            chosenCards.push(clickedCard); // Push the clicked card into the chosenCards array
        }
        if (chosenCards.length == 2){
            flipped()
            check()
            stopClick()
            
        }
        console.log(chosenCards);
    } 

    function stopClick(){
        cardStack.forEach(function(card) {
                console.log('something')
            });
    }


    function check(){
        
    }
    function flipped(){
        
    }
    function clickHandler(){
        console.log('limit reached')
    }
    }


    function game(){
        coverCardCreate()
        colorCardCreate()
        
    }

        // 1st: Make if statement to check that there isn't already two cards flipped
        // 2nd: if two cards don't have flipped class then add flipped class to selected cards 
        // 3rd make a array that hold all of the selected cards 
        // 4th else: if less than two cards are flipped then add flipped class and save to new array 
        // if not run check function to check of two cards in array are the same color 
        // if not the same color 


function flipped(card){
        card.classList.add('flipped');
        

        // chosen.appendChild(card)
        // console.log(chosen)

    
}

function check(){
    //get array of two cards from flipped()
    // make a if statemt that says if color date of card 1 matches teh card data of card 2 AKA if they equal 
    // if they match then add a matched class that takes away the event listener and display and also empty the array 
    // if they do not match remove the flipped class and they flip back

}



    game()
    });




//createElement()