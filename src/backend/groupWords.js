module.exports = words => {
  return new Promise((resolver, reject) => {
    try {
      const groupedWords = words.reduce((obj, word) => {
        obj[word] ? obj[word] += 1 : obj[word] = 1
        return obj
      }, {})

      const groupedWordsArray = Object
        .keys(groupedWords)
        .map((key) => ({ name: key, amount: groupedWords[key] }))
        .sort((wordOne, wordTwo) => wordTwo.amount - wordOne.amount)

      resolver(groupedWordsArray)
    } catch (err) {
      reject(err)
    }
  })
}

