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
    if(!email || !password) {
      return res.status(400).json("Veuillez remplir tous les champs!");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("mail invalide!");
    }

    const pwdValidated = await bcrypt.compare(password, user.password);
    if (!pwdValidated) {
      return res.status(400).json("mdp invalide!");
    }

    const { password: _, ...others } = user._doc; // Using _ as a placeholder variable

    const accessToken = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ userInfo: others, accessToken });

  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json("Internal server error");
  }
};


module.exports = { register, login };
