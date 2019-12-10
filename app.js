console.log("hello from app.js")
document.getElementById("button1").addEventListener('click', getInput);

function getInput(){
    fetch('input.txt')
    .then(function(res){
        console.log(res.clone().text())
        return res.clone().text();
    })
    .then(function(data){
        console.log("data " + data)
        document.getElementById('output').innerHTML = data
        let dataSplit = data.split('/n').join(" ")
        console.log("dataSplit " + dataSplit)
        let output = data.replace(/(\r\n|\n|\r)/gm,"").split(" ")
        let instructions = output[output.length - 1]
        document.getElementById('instructions').innerHTML = `Instructions = ${instructions}`
        console.log("instructions " + instructions)
        console.log("output " + output)
        let array = output.slice(0,-1)
        console.log(data.split(""))
        let newData = data.split("")
        console.log(newData)
        console.log("array " + array) 
        let sizeRectangleX = newData[0]
        document.getElementById('sizeRectangleX').innerHTML = `Size of Rectangle X Value = ${sizeRectangleX}`
        let sizeRectangleY = newData[2]
        document.getElementById('sizeRectangleY').innerHTML = `Size of Rectangle Y Value =  ${sizeRectangleY}`
        let startingPositionX = newData[4]
        document.getElementById('startingPositionX').innerHTML = `Starting Position X Value =  ${startingPositionX}`
        let startingPositionY = newData[6]
        document.getElementById('startingPositionY').innerHTML = `Starting Position X Value =  ${startingPositionY}`
        let dirt1X = newData[8]
        let dirt1Y = newData[10]
        document.getElementById('dirt1').innerHTML = `Dirt found at =  (${dirt1X},${dirt1Y})`
        let dirt2X = newData[12]
        let dirt2Y = newData[14]
        document.getElementById('dirt2').innerHTML = `Dirt found at =  (${dirt2X},${dirt2Y})`
        let dirt3X = newData[16]
        let dirt3Y = newData[18]
        document.getElementById('dirt3').innerHTML = `Dirt found at =  (${dirt3X},${dirt3Y})`
        let instructionsSplit = instructions.split("")
        console.log(instructionsSplit)
        document.getElementById('instructionsSplit').innerHTML = `Instructions = ${instructionsSplit}`
    })
    
}

