const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");
const  bcrypt  = require("bcrypt");

const prisma = new PrismaClient();
//fuction to handle user signup
exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  

  try {
    const { username, email, password } = req.body;


    // Check if client already exists
    const existingClient = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    }); 

    if (existingClient) {
      return res.status(400).json({ message: "Client already exists" });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new client
    const User = await prisma.User.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    // Generate JWT token
    const token = jwt.sign(
      {
        id: User.id,
        email: User.email,
        username: User.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log(token);
    

    // Send response with token and details of user
    res.status(201).json({
      message: "Client registered successfully",
      token: token,
      client: {
        id: User.id,
        username: User.username,
        email: User.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//fuction to handle user login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //login logic to be implemented
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: error });
  }
};
