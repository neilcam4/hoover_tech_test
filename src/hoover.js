console.log("hello from hoover.js")
// const input = document.querySelector('input[type="file"]')
// input.addEventListener('change', function(e){
// console.log("input files = " + input.files)
// const reader = new FileReader()
// reader.onload = function(){
//     console.log(reader.result)
// }
// reader.readAsText(input.files[0])
// },false)

// MIN_COORDINATE = 0;
// MAX_COORDINATE = 5;
// DIRT_PATCHES = 0;
// STARTING_COORDINATE_X = 1;
// STARTING_COORDINATE_Y = 2;


// function Hoover (){
//     this.X = STARTING_COORDINATE_X;
//     this.Y = STARTING_COORDINATE_Y;
//     this.dirtCount = DIRT_PATCHES;
//     this.dirtPresence = false;
// }

// Hoover.prototype.clean = function(){
//     if(this.dirtPresence == true){
//         this.dirtCount++;
//         this.dirtPresence = false;
//     }
//     console.log(this.dirtCount) 
// }
// Hoover.prototype.north = function(){
//     if(this.Y < MAX_COORDINATE){
//         this.Y++
//     } 
//     console.log(`${this.X} ${this.Y}`)
// }
// Hoover.prototype.south = function(){
//     if(this.Y > MIN_COORDINATE){
//         this.Y--
//     } 
//     console.log(`${this.X} ${this.Y}`)
// }
// Hoover.prototype.east = function(){
//     if(this.X < MAX_COORDINATE){
//         this.X++
//     }
//     console.log(`${this.X} ${this.Y}`)
// }
// Hoover.prototype.west = function(){
//     if(this.X > MIN_COORDINATE){
//         this.X--
//     } 
//     console.log(`${this.X} ${this.Y}`)
// }
// Hoover.prototype.dirt = function(){
//     this.dirtPresence = true;
//     console.log(this.dirtPresence)
// }