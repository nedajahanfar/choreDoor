
// Access the html elements that we need , door 1,2,3 and start button
let doorImage1=document.getElementById('door1');
let doorImage2=document.getElementById('door2');
let doorImage3=document.getElementById('door3');
let startButton=document.getElementById('start');

//create a function so that clicking on already opened doors does not change the game
function isClicked(door){
  if(door.src === closedDoorPath){
    return true
  }else{
    return false;
  }
}

//checking if behind the door there is a bot or not
function isBot(door){
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
}

//changing the sentence inside the start button based on the game,when the game is finished
function gameOver(status){
if(status === 'win'){
  startButton.innerHTML='You win!play again?';
}else{
  startButton.innerHTML='Game over! Play again?'
}
currentlyPlaying=false;
}

//how can we win?if all doors are open we win.if chore door is open before that we lose
function playDoor(door){
numClosedDoors--;
if (numClosedDoors === 0){
  gameOver('win')
}else if(isBot(door)){
  gameOver();
 }
}

//where is the chorebot? we generate a random number based on the number of doors and put it somewhere everytime.
function randomChoreDoorGenerator(){
  let choreDoor=Math.floor(Math.random()*numClosedDoors);

  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 2){
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

//address of the pictures that we want to use,defining variables to put then into
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door
doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

//you can reset the game but only if you are dead....
startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

// Start a game round , refresh
const startRound = ()=>{
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML= 'good Luck!';
  randomChoreDoorGenerator();
 }

 startRound();
 
