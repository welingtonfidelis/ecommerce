const bcrypt = require('bcryptjs');

const saltRounds = 10;

const createHash = async (word) => {
  const result = bcrypt.hashSync(word, saltRounds);

  return result;
}

const validateHash = async (wordToCompare, hashToCompare) => {
  const result = bcrypt.compareSync(wordToCompare, hashToCompare);

  return result;
}

module.exports = {
  createHash, validateHash
}