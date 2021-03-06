const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');

//@route        POST /api/user/signin
//@access       Public
//@desc         Sign the user in
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'Admin user already registered' });
    } else {
      if (user.authenticate(req.body.password) && user.role === 'admin') {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          _id,
          firstName,
          lastName,
          email,
          role,
          fullName,
        });
      } else {
        res.status(400).json({ message: 'invalid Password' });
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went Wrong' });
    console.log(err);
  }
};

//@route        POST /api/user/signup
//@access       Public
//@desc         Register Users
exports.signup = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist)
      return res.status(400).json({ message: 'User with email already exist' });

    const { firstName, lastName, email, password } = req.body;

    const user = await new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
      role: 'admin',
    }).save();
    res.status(201).json({ message: 'Admin User Created Successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Something went Wrong' });
    console.log(err);
  }
};
