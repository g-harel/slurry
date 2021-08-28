const index = require("./index")
// @ponicode
describe("index", () => {
    test("0", () => {
        let callFunction = () => {
            index(1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index(0, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index(-5.48, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index(0, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index(-5.48, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
