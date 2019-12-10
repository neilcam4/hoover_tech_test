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
    })
}
