/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const header = req.get("Authorization");
  if (!header) return res.status(400).json("No header provided !");

  const token = header.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'thisisalongjwtphrasethatissupposedtobekeptsecretandnotsharedtoanyone');
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500;
    next(error);
  }
  if (!decodedToken) return res.status(401).json("not authentificated !");

  req.authentificatedUser = decodedToken;
  console.log("decoded token", decodedToken)
  next();
};
