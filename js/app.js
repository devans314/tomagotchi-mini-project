let seconds = 0;
let newPet;
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.tiredness = 0;
        this.boredom = 0;
        this.age = 0;
        this.hunger = 0;
        this.experience = 0
    }
}
newPet = new Tamagotchi();
// console.log(newPet.experience);

$('button').on('click', () => {
    const $nameInput = $('input').val();
    newPet.name = $nameInput;
    $('.name').text(newPet.name)
    startGame();
  }
);


const startGame = () => {
$(".start-game").empty();

const movePet = () => {
    //console.log('Please move tama!');
    
    $("#tama").velocity({"translateX": "-150px"}, 2000, () => { 
        $('#tama').velocity({"rotateY": "180"})
        $("#tama").velocity({"translateX": "800px"}, 3000) 
        $('#tama').velocity({"rotateY": "360"})
     })
};
  
  const timePassing = () => {
    seconds++;
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
$('#button').append('<button onclick = train(); id = train>Train</button')

setInterval(timePassing, 1000);

    $('.tiredness').text(`tiredness ${newPet.tiredness}`);
    $('.hunger').text(`Hunger ${newPet.hunger}`);
    $('.boredom').text(`Boredom ${newPet.boredom}`);
    $('.age').text(`Age ${newPet.age}`);

    const morph = () => {
        if(newPet.age === 4){
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
    if(newPet.tiredness <= 2){
    alert(`${newPet.name} is not tired!`)
   } else{
       newPet.tiredness -= 3
   }
}

const feed = () => {
    if(newPet.hunger <= 2){
    alert(`${newPet.name} is not hungry!`)
    } else{
    newPet.hunger -= 3
    }
}

const play = () => {
    if(newPet.boredom <= 2)
    alert(`${newPet.name} is not bored!`)
    newPet.boredom -= 3
}

// const train = () => {
//     if('#train' === true){
//     newPet.experience += 1
//     }
// }

// console.log(newPet.experience);

