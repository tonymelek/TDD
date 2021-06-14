import { letterCounts } from './letterCounts';
import { expect } from 'chai'

describe('letterCount -basic functionality', () => {

    it('returns an empty object when given empty string', () => {
        const expected = {}
        const actual = letterCounts('');
        expect(actual).to.deep.equal(expected);
    })
    it('returns {b:1,e:2,t:2,r:1} object when given "better"', () => {
        const expected = { "b": 1, "e": 2, "t": 2, "r": 1 }
        const actual = letterCounts('better');
        expect(actual).to.deep.equal(expected);
    })
})