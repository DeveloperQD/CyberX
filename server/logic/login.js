const bcrypt = require("bcrypt");

module.exports = {
  generateHashedPassword: async function (password) {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt)
      return hashedPassword;
    } catch (e) {
      throw e;
    }
  },  
  comparePasswords: async function (passwordUser, passwordDatabase) {
    try {
      const isEqual = await bcrypt.compare(passwordUser, passwordDatabase)
      return isEqual;
    } catch (e) {
      throw e;
    }
  }
}