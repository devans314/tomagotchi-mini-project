let seconds = 0;

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.stamina = 0;
        this.boredom = 0;
        this.age = 0;
        this.hunger = 0;
        this.affection = 0;
    }
}
$('button').on('click', () => {
    console.log('click works');
    // When the user clicks the button, the game starts
    startGame();
  
  });
const startGame = () => {

const newPet = new Tamagotchi();
// const timePassing = () => {
//     // $('.time').text(`${seconds}`);
//     if (seconds%10 === 0){
//         newPet.hunger++;
//     }
//     if (seconds%10 === 0){
//         newPet.sleepiness++;
//     }
//     if (seconds%10 === 0){
//         newPet.boredom++;
//     }
//     if (seconds%10 === 0){
//         newPet.age++;
//     }
//     seconds++;   
// }

// setInterval(timePassing, 1000);
// }



$('.stamina').text(`Stamina ${newPet.stamina}`);
$('.hunger').text(`Hunger ${newPet.hunger}`);
$('.boredom').text(`Boredom ${newPet.boredom}`);
$('.affection').text(`Affection ${newPet.affection}`);
$('.age').text(`Age ${newPet.age}`);



}
