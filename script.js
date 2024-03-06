document.addEventListener("DOMContentLoaded", () => {
    
    const gameBoard = document.getElementById("game-board");
    

    const colorExist = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "maroon", "purple", "pink", "brown", "gray", "cyan", "magenta", "teal", "gold", "silver" ]

    let colorPresent = [ ...colorExist, ...colorExist]

    console.log(colorPresent)

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
            cards.dataset.color = colors[i]

            const frontFace = document.createElement('div')
            frontFace.classList.add = 'front'
            frontFace.classList.add = 'face'
            cards.dataset.color = 'black'

            const backFace = document.createElement('div')
            backFace.classList.add = 'back'
            backFace.classList.add = 'face'
            cards.dataset.color = ''

            cards.appendChild(frontFace,backFace)
            console.log(cards)


            gameBoard.appendChild(cards)
            
            console.log(cards)
        }
    }


    game()
    });




//createElement()