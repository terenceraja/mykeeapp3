const jwt = require("jsonwebtoken");

const createToken = (IdCtraCli) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ IdCtraCli }, jwtkey, { expiresIn: "3d" }); // Set expiration time to 10 seconds
};
module.exports = createToken;
