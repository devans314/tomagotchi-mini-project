let seconds = 0;
let newPet;
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.tiredness = 0;
        this.boredom = 0;
        this.age = 0;
        this.hunger = 0;
    }
}
newPet = new Tamagotchi();

$('button').on('click', () => {
    const $nameInput = $('input').val();
    newPet.name = $nameInput;
    $('.name').text(newPet.name)
    // When the user clicks the button, the game starts
    startGame();
    
  });


const startGame = () => {
$(".start-game").empty();

// const newPet = new Tamagotchi();
const movePet = () => {
    console.log('Please move tama!');
    $("#tama").velocity({"translateX": "400px"}, 1000, () => { 
        $("#tama").velocity({"translateX": "100px"}, 1000) 
     })
};
  
  const timePassing = () => {
    seconds++;
    // $('.time').text(`${seconds}`);
    if (seconds%2 === 0){
        newPet.hunger++;
        $('.hunger').text('Hunger ' + newPet.hunger);
    }
    if (seconds%2 === 0){
        $('.tiredness').text('tiredness ' + newPet.tiredness);
        newPet.tiredness++;
    }
    if (seconds%2 === 0){
        $('.boredom').text('Boredom ' + newPet.boredom);
        newPet.boredom++;
    }
    if (seconds%5 === 0){
        newPet.age++;
        $('.age').text('Age ' + newPet.age);
    }
    // console.log(`${seconds}`);   
    
}
$('#button').append('<button onclick = rest(); id = rest>Rest</button>')
$('#button').append('<button onclick = feed(); id = hunger>Feed</button')
$('#button').append('<button onclick = play(); id = boredom>Play</button')
setInterval(timePassing, 1000);

    $('.tiredness').text(`tiredness ${newPet.tiredness}`);
    $('.hunger').text(`Hunger ${newPet.hunger}`);
    $('.boredom').text(`Boredom ${newPet.boredom}`);
    $('.age').text(`Age ${newPet.age}`);

    const morph = () => {
        if(newPet.age === 2){
            $('#tama').attr('src',"assets/morph.gif")
        }
    }
    
    const death = () => {
        if(newPet.tiredness >= 10 || newPet.hunger >= 10 || newPet.boredom >= 10){

            const retry = confirm("Retry?")
            document.location.reload();
            if (retry === true) {
            } 
        }    
    }
        setInterval(movePet, 1000);
        setInterval(morph, 1000);
        setInterval(death, 1000);
}
       


const rest = () => {
    newPet.tiredness -= 3
}

const feed = () => {
    newPet.hunger -= 3
}

const play = () => {
    newPet.boredom -= 3
}

