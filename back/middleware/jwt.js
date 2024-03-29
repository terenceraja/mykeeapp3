const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token === "null") {
    res.json({ auth: false, message: "No token available !" });
  } else {
    const jwtkey = process.env.JWT_SECRET_KEY;

    jwt.verify(token, jwtkey, (err, decoded) => {
      if (err) {
        res.json({
          auth: false,
          error: err,
        });
      }

      // DEFINES A REQ.VARIABLE = AVAILABLE VARIABLE INSIDE TOKEN FROM CREATION
      req.IdCtraCli = decoded.IdCtraCli;
      next();
    });
  }
};

module.exports = verifyJwt;
