const UserServices = require("../services/user.services");

exports.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await UserServices.registerUser(email, password);

    res.json({ status: true, success: "User Register Successfully" });
  } catch (error) {
    throw error;
  }
};
