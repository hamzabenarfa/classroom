const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, password,role } = req.body;
  console.log("🚀 ~ register ~ role:", role)
  try {
    const userExist = await User.findOne({ email });
    userExist && res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();
    res.status(201).json({ message: "user created successful" });
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    !user && res.status(400).json("Wrong credentials!");

    const pwdValidated = await bcrypt.compare(password, user.password);
    !pwdValidated && res.status(400).json("Wrong credentials!");

    const { password: undefined, ...others } = user._doc;

    const accessToken = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    pwdValidated
      ? res.status(200).json({ user: others, accessToken })
      : res.status(400).json("Wrong credentials!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { register, login };
