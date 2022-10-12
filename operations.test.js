const operations  = require('./operations.js')

describe("Addition", ()=>{
//Arrange
const addition = new operations()
//Assert
    test('is sum' ,() =>{        
        expect(addition.add(10,15)).toBe(25)
    })
    test('is sum' ,() =>{        
        expect(addition.add(1,1)).toBe(2)
    })
    test('is sum' ,() =>{        
        expect(addition.add(1,6)).toBe(7)
    })
})

describe("Substracting", ()=>{
//Arrange
    const substract = new operations()
//Assert
        test('substract 10 - 5 must be 5' ,() =>{        
            expect(substract.substract(10,5)).toBe(5)
        })
        test('substract 1 - 1 must be 0' ,() =>{        
            expect(substract.substract(1,1)).toBe(0)
        })
        test('substract 8 - 6 must be 2' ,() =>{        
            expect(substract.substract(8,6)).toBe(2)
        })
    })

    describe("Divide", ()=>{
//Arrange
        const divide = new operations()
//Assert
            test('10 / 5 must be 5' ,() =>{        
                expect(divide.divide(10,5)).toBe(2)
            })
            test('30 / 3 must be 0' ,() =>{        
                expect(divide.divide(30,3)).toBe(10)
            })
            test('16 / 8 must be 2' ,() =>{        
                expect(divide.divide(16,8)).toBe(2)
            })
        })

        describe("Multiply", ()=>{
//Arrange
            const multiply = new operations()
//Assert
                test('10 * 5 must be 50' ,() =>{        
                    expect(multiply.multiply(10,5)).toBe(50)
                })
                test('30 * 3 must be 90' ,() =>{        
                    expect(multiply.multiply(30,3)).toBe(90)
                })
                test('16 * 8 must be 128' ,() =>{        
                    expect(multiply.multiply(16,8)).toBe(128)
                })
            })
