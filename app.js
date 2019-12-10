console.log("hello from app.js")
const input = document.querySelector('input[type="file"]')
let output;
let newData;
let sizeRectangleX;
let startingPositionX;
let startingPositionY;
let dirt1X;
let dirt1Y;
let dirt2Y;
let dirt2X;
let dirt3Y;
let dirt3X;
let array;
let instructions;
let instructionsArray;
input.addEventListener('change', function(e){
const reader = new FileReader()
reader.onload = function(){
    output = reader.result
    newData = output.split("")
    array = output.split(" ")
    sizeRectangleX = parseInt(newData[0]);
    startingPositionX = parseInt(newData[4]);
    startingPositionY = parseInt(newData[6]);
    dirt1X = parseInt(newData[8]);
    dirt1Y = parseInt(newData[10]);
    dirt2X = parseInt(newData[12]);
    dirt2Y = parseInt(newData[14]);
    dirt3X = parseInt(newData[16]);
    dirt3Y = parseInt(newData[18]);
    instructions = array[array.length - 1]
    instructionsArray = instructions.replace(/(\r\n|\n|\r)/gm,"").split("")
    console.log("output = "+ output)
    console.log("newData = "+ newData)
    console.log(`second dirt = ${dirt2X}, ${dirt2Y}`)
    console.log(`third dirt = ${dirt3X}, ${dirt3Y}`)
    console.log(`instructions = ${instructions}`)
    console.log(instructionsArray)
}
reader.readAsText(input.files[0])
},false)


MIN_COORDINATE = 0;
DIRT_PATCHES = 0;

function Hoover (){
    this.X = startingPositionX;
    this.Y = startingPositionY;
    this.dirtCount = DIRT_PATCHES;
    this.dirtPresence = false;
}

Hoover.prototype.checkForDirt1 = function(){
    if(this.X == dirt1X && this.Y == dirt1Y) {
        this.dirtPresence = true;
        this.clean()
        dirt1X += 0.5
        dirt1Y += 0.5
        console.log(this.dirtPresence)
    } 
    return this.dirtPresence = false;
}
Hoover.prototype.checkForDirt2 = function(){
    if(this.X == dirt2X && this.Y == dirt2Y) {
        this.dirtPresence = true;
        this.clean()
        dirt2X += 0.5
        dirt2Y += 0.5
        console.log(this.dirtPresence)
    } 
    return this.dirtPresence = false;
}
Hoover.prototype.checkForDirt3 = function(){
    if(this.X == dirt3X && this.Y == dirt3Y) {
        this.dirtPresence = true;
        this.clean()
        dirt3X += 0.5
        dirt3Y += 0.5
        console.log(this.dirtPresence)
    } 
    return this.dirtPresence = false;
}


Hoover.prototype.clean = function(){
    if(this.dirtPresence == true){
        this.dirtCount++;
        this.dirtPresence = false;
    } 
    console.log("clean occurred")
}
Hoover.prototype.north = function(){
    if(this.Y < sizeRectangleX){
        this.Y++
    } 
    this.checkForDirt1()
    this.checkForDirt2()
    this.checkForDirt3()
    console.log(`${this.X} ${this.Y}`)
    console.log(this.dirtCount)
}
Hoover.prototype.south = function(){
    if(this.Y > MIN_COORDINATE){
        this.Y--
    } 
    this.checkForDirt1()
    this.checkForDirt2()
    this.checkForDirt3()
    console.log(`${this.X} ${this.Y}`)
    console.log(this.dirtCount)
}
Hoover.prototype.east = function(){
    if(this.X < sizeRectangleX){
        this.X++
    }
    this.checkForDirt1()
    this.checkForDirt2()
    this.checkForDirt3()
    console.log(`${this.X} ${this.Y}`)
    console.log(this.dirtCount)
}
Hoover.prototype.west = function(){
    if(this.X > MIN_COORDINATE){
        this.X--
    } 
    this.checkForDirt1()
    this.checkForDirt2()
    this.checkForDirt3()
    console.log(`${this.X} ${this.Y}`)
    console.log(this.dirtCount)
}
document.getElementById("button2").addEventListener('click', startHoover)

function startHoover(){
    let hoover = new Hoover()
    instructionsArray.forEach(function(item){
        if (item == 'N'){
            hoover.north()
        } else if (item == 'E'){
            hoover.east()
        } else if (item == 'S'){
            hoover.south()
        } else if (item == 'W'){
            hoover.west()
        }
    })
    console.log(`${hoover.X} ${hoover.Y}`)
    console.log(hoover.dirtCount)
}
