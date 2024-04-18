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
    
    


    function cardCreate(){
        let colors = randomizer(colorPresent)
        let cardStack = []
        let chosenCards = []
        for(let i=0; i < colors.length; i++){
            const card = document.createElement('div')
            card.classList.add('card');
            card.id = "card"
            card.style.backgroundColor= "#000000";
            

            const frontFace = document.createElement('div')
            frontFace.classList.add('face', 'front');
            frontFace.dataset.color = 'black'

            const backFace = document.createElement('div')
            backFace.classList.add('face', 'back');

            

            card.appendChild(frontFace) //how tf do i get it to show the front face bc rn its only showing a blank card bc its showing "card" which is blank
            card.appendChild(backFace)


            frontFace.style.backgroundColor= "#000000";
            backFace.style.backgroundColor = colors[i]

            
            console.log(card)
            gameBoard.appendChild(card)


            card.addEventListener('click', function() {
                console.log('Card clicked:', card);
                card.style.backgroundColor = "none"
                limit(card); // Call the check function whenever a card is clicked
            });
    
            cardStack.push(card);
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
                card.removeEventListener('click', function() {
                console.log('Card clicked:', card);
                card.style.backgroundColor = "none"
                limit(card); // Call the check function whenever a card is clicked
            });
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
        cardCreate()
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