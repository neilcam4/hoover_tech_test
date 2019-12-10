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
    // console.log("size X = " + sizeRectangleX)
    // console.log("starting X = " + startingPositionX)
    // console.log("starting Y = " + startingPositionY)


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
Hoover.prototype.checkForDirt = function(){
    if(this.X == dirt1X && this.Y == dirt1Y || 
        this.X == dirt2X && this.Y == dirt2Y ||
        this.X == dirt3X && this.Y == dirt3Y){
        this.dirtPresence = true;
        this.clean()
        console.log(this.dirtPresence)
    } 
    return this.dirtPresence = false;
}

Hoover.prototype.clean = function(){
    if(this.dirtPresence == true){
        this.dirtCount++;
        this.dirtPresence = false;
    }
    // console.log(this.dirtCount) 
    console.log("clean occurred")
}
Hoover.prototype.north = function(){
    if(this.Y < sizeRectangleX){
        this.Y++
    } 
    this.checkForDirt()
    console.log(`${this.X} ${this.Y}`)
    console.log(this.dirtCount)
}
Hoover.prototype.south = function(){
    if(this.Y > MIN_COORDINATE){
        this.Y--
    } 
    this.checkForDirt()
    console.log(`${this.X} ${this.Y}`)
    console.log(this.dirtCount)
}
Hoover.prototype.east = function(){
    if(this.X < sizeRectangleX){
        this.X++
    }
    this.checkForDirt()
    console.log(`${this.X} ${this.Y}`)
    console.log(this.dirtCount)
}
Hoover.prototype.west = function(){
    if(this.X > MIN_COORDINATE){
        this.X--
    } 
    this.checkForDirt()
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
// document.getElementById("button1").addEventListener('click', getInput);
// var instructions;
// var sizeRectangleX;
// let startingPositionX;
// function getInput(){
//     fetch('input.txt')
//     .then(function(res){
//         console.log(res.clone().text())
//         return res.clone().text();
//     })
//     .then(function(data){
//         console.log("data " + data)
//         document.getElementById('output').innerHTML = data
//         let dataSplit = data.split('/n').join(" ")
//         console.log("dataSplit " + dataSplit)
//         let output = data.replace(/(\r\n|\n|\r)/gm,"").split(" ")
//         instructions = output[output.length - 1]
       
//         console.log("output " + output)
//         let array = output.slice(0,-1)
//         console.log(data.split(""))
//         let newData = data.split("")
//         console.log(newData)
//         console.log("array " + array) 
//         sizeRectangleX = newData[0]
//         document.getElementById('sizeRectangleX').innerHTML = `Size of Rectangle X Value = ${sizeRectangleX}`
//         let sizeRectangleY = newData[2]
//         document.getElementById('sizeRectangleY').innerHTML = `Size of Rectangle Y Value =  ${sizeRectangleY}`
//         startingPositionX = newData[4]
//         document.getElementById('startingPositionX').innerHTML = `Starting Position X Value =  ${startingPositionX}`
//         let startingPositionY = newData[6]
//         document.getElementById('startingPositionY').innerHTML = `Starting Position X Value =  ${startingPositionY}`
//         let dirt1X = newData[8]
//         let dirt1Y = newData[10]
//         document.getElementById('dirt1').innerHTML = `Dirt found at =  (${dirt1X},${dirt1Y})`
//         let dirt2X = newData[12]
//         let dirt2Y = newData[14]
//         document.getElementById('dirt2').innerHTML = `Dirt found at =  (${dirt2X},${dirt2Y})`
//         let dirt3X = newData[16]
//         let dirt3Y = newData[18]
//         document.getElementById('dirt3').innerHTML = `Dirt found at =  (${dirt3X},${dirt3Y})`
//         let instructionsSplit = instructions.split("")
//         console.log(instructionsSplit)
//         document.getElementById('instructionsSplit').innerHTML = `Instructions = ${instructionsSplit}`
//     }) 
// }