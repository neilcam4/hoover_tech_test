describe("Hoover", function(){
    let henry;
    beforeEach(function(){
        henry = new Hoover()
    })
    it("describes making a new hoover at default position X =0", function(){      
        expect(henry.X).toEqual(0)
    })
    it("describes making a new hoover at default position Y =0", function(){     
        expect(henry.Y).toEqual(0)
    })
    it("describes the North instruction moves hoover 1 place up", function(){     
        henry.north()
        expect(henry.Y).toEqual(1)
    })
    it("describes the South instruction moves hoover 1 place down", function(){
        henry.Y = 4
        henry.south()
        expect(henry.Y).toEqual(3)
    })
    it("describes the East instruction moves hoover 1 place right", function(){
        henry.east()
        expect(henry.X).toEqual(1)
    })
    it("describes the West instruction moves hoover 1 place left", function(){
        henry.X = 4
        henry.west()
        expect(henry.X).toEqual(3)
    })
    it("describes the hoover cannot move beyond X = 5", function(){
        henry.X = 5
        henry.east()
        expect(henry.X).toEqual(5)
    })
    it("describes the hoover cannot move beyond Y = 5", function(){
        henry.Y = 5
        henry.west()
        expect(henry.Y).toEqual(5)
    })
    it("describes the hoover cannot move lower than Y = 0", function(){
        henry.Y = 0
        henry.south()
        expect(henry.Y).toEqual(0)
    })
    it("describes the hoover cannot move lower than X = 0", function(){
        henry.X = 0
        henry.west()
        expect(henry.Y).toEqual(0)
    })
})