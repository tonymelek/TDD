export const letterCounts = str => {
    const result = {}
    for (let char of str) {
        if (result[char]) {
            result[char]++
        } else {
            result[char] = 1
        }
    }
    return result
}
