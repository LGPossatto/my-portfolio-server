const { secretKey } = require("./config");

const checkAuth = (auth) => {
  const authKey = auth.split(" ")[1];

  return secretKey === authKey;
};

module.exports = { checkAuth };
