document.addEventListener("DOMContentLoaded", () => {
    
    const gameBoard = document.getElementById("game-board");
    

    const colorExist = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "maroon", "purple", "pink", "brown", "gray", "cyan", "magenta", "teal", "gold", "silver" ]

    let colorPresent = [ ...colorExist, ...colorExist]

    console.log(colorPresent)

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
        cards = randomizer(colorPresent)
        console.log(cards)
    }



    game()
    });




//createElement()