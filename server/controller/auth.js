const { connect } = require("getstream");
const { bcrypt } = require("bcrypt");
const streamchat = require("stream-chat");
const crypto = require("crypto");
const { Message } = require("twilio/lib/twiml/MessagingResponse");

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  try {
    const { fullname, username, password, phonenumber } = req.body;

    const userId = crypto.randomBytes(16).toString("hex");
    const serverclient = connect(api_key, api_secret, app_id);
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverclient.createUserToken(userId);

    res
      .status(200)
      .json({ token, fullname, username, userId, hashedPassword, phonenumber });
  } catch (error) {
    console.log(error);

    res.status(500).json({ messgae: error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const serverclient = connect(api_key, api_secret, app_id);
    const client = streamchat.getinstance(api_key, api_secret);

    const { users } = await client.queryuser({ name: username });
    if (!users.length)
      return res.status(400).json({ Message: "user not found" });

    const sucess = await bcrypt.compare(password, users[0].hashedPassword);
    const token = serverclient.createUserToken(users[0].id);

    if (sucess) {
      res
        .status(200)
        .json({
          token,
          fullname: users[0].fullname,
          username,
          userId: users[0].id,
        });
    } else {
      res.status(500).json({ message: "incorrect password" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ messgae: error });
  }
};

module.exports = { signup, login };
