import { letterCounts } from "./letterCounts"
const formatString = str => {
    return str.split(' ').join('').toLowerCase()
}
export const anagrams = (str1, str2) => {
    str1 = formatString(str1)
    str2 = formatString(str2)
    if (str1.length !== str2.length) return false
    // if (str1.length === 0) return true
    const result1 = letterCounts(str1)
    const result2 = letterCounts(str2)
    for (let key in result1) {
        if (result1[key] !== result2[key]) return false
    }
    return true
}