const User = require("../models/model");

exports.homePage = (req, res) => {
    res.render("index", {title: "Express MVC Pattern"});
}
exports.createUser = async (req, res) => {
  const user = await new User(req.body);
  user
    .save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.loginUser = async (req, res) => {
  const user = await User.findOne(req.body).select({
    userName: 1,
    _id: 1,
    email: 1,
    mobileNumber: 1,
  });
  return res.status(200).json({
    status: true,
    message: "Login Successful",
    data: user,
  });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findOne(req.params);
  res.json(user);
};

exports.deleteUserById = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params);
  res.send(user);
};
