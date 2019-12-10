function Hoover (){
    this.X = MIN_COORDINATE;
    this.Y = MIN_COORDINATE;
    this.dirtCount = DIRT_PATCHES;
    this.dirtPresence = false;
}
MIN_COORDINATE = 0;
MAX_COORDINATE = 5;
DIRT_PATCHES = 0;

Hoover.prototype.clean = function(){
    this.dirtCount++;
    return this.dirtCount;
}
Hoover.prototype.north = function(){
    if(this.Y < MAX_COORDINATE){
        this.Y++
    } 
    return `${this.X} ${this.Y}`
}
Hoover.prototype.south = function(){
    if(this.Y > MIN_COORDINATE){
        this.Y--
    } 
      return `${this.X} ${this.Y}`
}
Hoover.prototype.east = function(){
    if(this.X < MAX_COORDINATE){
        this.X++
    }
    return `${this.X} ${this.Y}`
}
Hoover.prototype.west = function(){
    if(this.X > MIN_COORDINATE){
        this.X--
    } 
    return `${this.X} ${this.Y}`
}
Hoover.prototype.dirt = function(){
    this.dirtPresence = true;
}