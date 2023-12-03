describe('Test to see if dealer should draw', () => {
    it('Should determine if dealer should draw', () => {
        const hand = [
            {displayVal: '10', val :10, suit: 'hearts'},
            {displayVal: '9', val :9, suit: 'hearts'}
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toBe(false)
    }) 
})


describe('Test to see if dealer should draw', () => {
    it('Should determine if dealer should draw', () => {
        const hand = [
            {displayVal: 'Ace', val :1, suit: 'hearts'},
            {displayVal: '6', val :6, suit: 'hearts'}
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toBe(true)
    }) 
})


describe('Test to see if dealer should draw', () => {
    it('Should determine if dealer should draw', () => {
        const hand = [
            {displayVal: '10', val :10, suit: 'hearts'},
            {displayVal: 'Ace', val : 1, suit: 'hearts'},
            {displayVal: '6', val : 6, suit: 'hearts'}
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toBe(false)
    }) 
})


describe('Test to see if dealer should draw', () => {
    it('Should determine if dealer should draw', () => {
        const hand = [
            {displayVal: '2', val :2, suit: 'hearts'},
            {displayVal: '4', val : 4, suit: 'hearts'},
            {displayVal: '2', val : 2, suit: 'hearts'},
            {displayVal: '5', val : 5, suit: 'hearts'}
        ]
        const result = dealerShouldDraw(hand)
        expect(result).toBe(true)
    }) 
})
