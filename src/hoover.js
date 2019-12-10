function Hoover (){
    this.X = 0;
    this.Y = 0;
}

Hoover.prototype.north = function(){
    if(this.Y < 5){
        return this.Y++
    } else {
    return this.Y
    }
}
Hoover.prototype.south = function(){
    if(this.Y>0){
        return this.Y--
    } else {
    return this.Y
    }
}
Hoover.prototype.east = function(){
    if(this.X<5){
        return this.X++
    } else {
    return this.X
    }
}
Hoover.prototype.west = function(){
    if(this.X>0){
        return this.X--
    } else {
    return this.X
    }
}