describe("Hoover", function(){
    let henry;
    let STARTING_COORDINATE_X;
    let STARTING_COORDINATE_Y;
    let MIN_COORDINATE;
    let MAX_COORDINATE;
    let DIRT_PATCHES;
    beforeEach(function(){
        henry = new Hoover()
        STARTING_COORDINATE_X = 1;
        STARTING_COORDINATE_Y = 2;
        MIN_COORDINATE = 0;
        MAX_COORDINATE = 5;
        DIRT_PATCHES = 0;
    })
    it("describes making a new hoover at starting position X = 1", function(){      
        expect(henry.X).toEqual(STARTING_COORDINATE_X)
    })
    it("describes making a new hoover at starting position Y = 2", function(){     
        expect(henry.Y).toEqual(STARTING_COORDINATE_Y)
    })
    it("describes the North instruction moves hoover 1 place up", function(){     
        henry.north()
        expect(henry.Y).toEqual(STARTING_COORDINATE_Y + 1)
    })
    it("describes the South instruction moves hoover 1 place down", function(){
        henry.Y = 4
        henry.south()
        expect(henry.Y).toEqual(3)
    })
    it("describes the East instruction moves hoover 1 place right", function(){
        henry.east()
        expect(henry.X).toEqual(STARTING_COORDINATE_X + 1)
    })
    it("describes the West instruction moves hoover 1 place left", function(){
        henry.X = 4
        henry.west()
        expect(henry.X).toEqual(3)
    })
    it("describes the hoover cannot move beyond X = 5", function(){
        henry.X = MAX_COORDINATE
        henry.east()
        expect(henry.X).toEqual(MAX_COORDINATE)
    })
    it("describes the hoover cannot move beyond Y = 5", function(){
        henry.Y = MAX_COORDINATE
        henry.west()
        expect(henry.Y).toEqual(MAX_COORDINATE)
    })
    it("describes the hoover cannot move lower than Y = 0", function(){
        henry.Y = MIN_COORDINATE
        henry.south()
        expect(henry.Y).toEqual(MIN_COORDINATE)
    })
    it("describes the hoover cannot move lower than X = 0", function(){
        henry.X = MIN_COORDINATE
        henry.west()
        expect(henry.X).toEqual(MIN_COORDINATE)
    })
    it("describes the hoover picking up a patch of dirt", function(){
        henry.dirt()
        henry.clean()
        expect(henry.dirtCount).toEqual(DIRT_PATCHES + 1)
    })
    it("describes the presence of dirt", function(){
        henry.dirt()
        expect(henry.dirtPresence).toEqual(true)
    })
})