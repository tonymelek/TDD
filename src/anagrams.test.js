import { anagrams } from './anagrams';
import { expect } from 'chai'

describe('Anagrams -basic functionality', () => {

    it('returns false when length of the two strings not the same', () => {
        const expected = false
        const actual = anagrams("test", "tes ts")
        expect(actual).to.deep.equal(expected);
    })

    it('returns true when given "state" and "Taste"', () => {
        const expected = true
        const actual = anagrams('state', 'Taste')
        expect(actual).to.deep.equal(expected);
    })

    it('returns false when given "states" and "Taste"', () => {
        const expected = false
        const actual = anagrams('states', 'Taste')
        expect(actual).to.deep.equal(expected);
    })
    // it('', () => {
    //     const expected = 
    //     const actual =
    //         expect(actual).to.deep.equal(expected);
    // })

})