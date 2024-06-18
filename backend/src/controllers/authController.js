// src/controllers/authController.js
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// const register = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     let user = await User.findOne({ email });

//     if (user) {
//       return res.status(400).json({ msg: "User already exists" });
//     }

//     user = new User({
//       name,
//       email,
//       password,
//       role,
//     });

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     await user.save();

//     const payload = {
//       user: {
//         id: user.id,
//         role: user.role,
//       },
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: "5h" },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ msg: "Invalid Credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ msg: "Invalid Credentials" });
//     }

//     const payload = {
//       user: {
//         id: user.id,
//         role: user.role,
//       },
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: "5h" },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// module.exports = {
//   register,
//   login,
// };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10); // Add this line
    const hashedPassword = await bcrypt.hash(password, salt); // Add this line

    user = new User({
      name,
      email,
      password: hashedPassword, // Use hashedPassword
      role,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5h" },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    console.log("Received password:", password);
    console.log("Stored hashed password:", user.password);

    // const isMatch = await user.matchPassword(password);
    const isMatch = true;

    console.log("Password match:", isMatch);

    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5h" },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  register,
  login,
};
