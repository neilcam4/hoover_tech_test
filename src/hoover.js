     

function Hoover (){
    this.X = MIN_COORDINATE;
    this.Y = MIN_COORDINATE;
    this.dirt = DIRT_PATCHES;
}
MIN_COORDINATE = 0;
MAX_COORDINATE = 5;
DIRT_PATCHES = 0;

Hoover.prototype.clean = function(){
    this.dirt++;
}
Hoover.prototype.north = function(){
    if(this.Y < MAX_COORDINATE){
        this.Y++
    } 
    return `Position (${this.X}, ${this.Y})`
}
Hoover.prototype.south = function(){
    if(this.Y > MIN_COORDINATE){
        this.Y--
    } 
    return `Position (${this.X}, ${this.Y})`
}
Hoover.prototype.east = function(){
    if(this.X < MAX_COORDINATE){
        this.X++
    }
    return `Position (${this.X}, ${this.Y})`
}
Hoover.prototype.west = function(){
    if(this.X > MIN_COORDINATE){
        this.X--
    } 
    return `Position (${this.X}, ${this.Y})`
}