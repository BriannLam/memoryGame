document.addEventListener("DOMContentLoaded", () => {
    
    const gameBoard = document.getElementById("game-board");
    

    const colorExist = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "maroon", "purple", "pink", "brown", "gray", "cyan", "magenta", "teal", "gold", "silver" ]

    let colorPresent = [ ...colorExist, ...colorExist]

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
    
    function game(){
        let colors = randomizer(colorPresent)
        for(let i=0; i < colors.length; i++){
            const cards = document.createElement('div')
            cards.classList.add = 'card'
            

            const frontFace = document.createElement('div')
            frontFace.classList.add = ('face', 'front')
            cards.dataset.color = 'black'

            const backFace = document.createElement('div')
            backFace.classList.add = ('face', 'back')
            cards.dataset.color = colors[i]

            

            cards.appendChild(frontFace)
            cards.appendChild(backFace)


            frontFace.style.backgroundColor= "#000000";
            cards.style.backgroundColor = colors[i]
            // cards.style.height = '7vh';
            // cards.style.width = '7vw';

            
            console.log(cards)


            gameBoard.appendChild(cards)
            
            // console.log(cards)
        }
    }


    game()
    });




//createElement()