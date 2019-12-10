console.log("hello from app.js")
const input = document.querySelector('input[type="file"]')
let output;
let newData;
let sizeRectangleX;
input.addEventListener('change', function(e){
const reader = new FileReader()
reader.onload = function(){
    output = reader.result
    newData = output.split("")
    sizeRectangleX = newData[0]
    console.log("inputTXT = "+ output)
    console.log("newData = "+ newData)
    console.log("size X = " + sizeRectangleX)

}
reader.readAsText(input.files[0])
},false)


MIN_COORDINATE = 0;
MAX_COORDINATE = sizeRectangleX;
DIRT_PATCHES = 0;
STARTING_COORDINATE_X = 1;
STARTING_COORDINATE_Y = 2;


function Hoover (){
    this.X = STARTING_COORDINATE_X;
    this.Y = STARTING_COORDINATE_Y;
    this.dirtCount = DIRT_PATCHES;
    this.dirtPresence = false;
    this.MAX_COORDINATE = sizeRectangleX;
}

Hoover.prototype.clean = function(){
    if(this.dirtPresence == true){
        this.dirtCount++;
        this.dirtPresence = false;
    }
    console.log(this.dirtCount) 
}
Hoover.prototype.north = function(){
    if(this.Y < MAX_COORDINATE){
        this.Y++
    } 
    console.log(`${this.X} ${this.Y}`)
}
Hoover.prototype.south = function(){
    if(this.Y > MIN_COORDINATE){
        this.Y--
    } 
    console.log(`${this.X} ${this.Y}`)
}
Hoover.prototype.east = function(){
    if(this.X < MAX_COORDINATE){
        this.X++
    }
    console.log(`${this.X} ${this.Y}`)
}
Hoover.prototype.west = function(){
    if(this.X > MIN_COORDINATE){
        this.X--
    } 
    console.log(`${this.X} ${this.Y}`)
}
Hoover.prototype.dirt = function(){
    this.dirtPresence = true;
    console.log(this.dirtPresence)
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