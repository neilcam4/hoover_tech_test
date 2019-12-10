console.log("hello from app.js")
document.getElementById("button1").addEventListener('click', getInput);

function getInput(){
    fetch('input.txt')
    .then(function(res){
        console.log(res.clone().text())
        return res.clone().text();
    })
    .then(function(data){
        document.getElementById('output').innerHTML = data
        // let output = data.split('/n').join("")
        let output = data.replace(/(\r\n|\n|\r)/gm,"").split(" ")
        let instructions = output[output.length - 1]
        console.log("instructions " + instructions)
        console.log("output " + output)
        // output.replace(/(\r\n|\n|\r)/gm,"");
        let sizeRectangleX = output[0]
        document.getElementById('sizeRectangleX').innerHTML = `Size of Rectangle X Value = ${sizeRectangleX}`
        let sizeRectangleY = output[1]
        document.getElementById('sizeRectangleY').innerHTML = `Size of Rectangle Y Value =  ${sizeRectangleY}`
        let startingPositionX = output[3]
        let startingPositionY = output[4]
        
        console.log("sizeX " + sizeRectangleX)
        console.log("sizeY " + sizeRectangleY)
        console.log("startingPositionX " + startingPositionX)
        console.log("startingPositionY " +startingPositionY)
    })
    
}

