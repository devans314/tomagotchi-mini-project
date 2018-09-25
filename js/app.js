
class Tamagotchi {
	constructor(name) {
		this.name = name;
		this.stamina = 2;
		this.boredom = 2;
		this.age = 0;
		this.hunger = 2;
		this.affection = 2;
    }
}
	
let seconds = 0;
// const timePassing = setInterval(() => {
//     seconds++;
//     // inside timer: hunger, age, tiredness
//     if(seconds > 10){
//         clearInterval(timePassing);
//         console.log("Done");
//     }
   
// }



const newPet = new Tamagotchi(BertBert);