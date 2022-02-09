const User = require("../models/user");

class userController {
  async createUser(req, res) {
    const user = new User(req.body);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      res.status(200).json({ message: "Success", user });
    } catch (e) {
      res.status(200).json({ error: "Tài khoản đã tồn tại!" });
    }
  }
  //login
  async loginUser(req, res) {
    try {
      const user = await User.findByCredentials(
        req.body.taiKhoan,
        req.body.matKhau
      );
      // const token = await user.generateAuthToken();
      res.status(200).json({ message: "Logged in!", user });
    } catch (e) {
      res.status(500).json("Sai tên đăng nhập/mật khẩu");
    }
  }
  async getProfile(req, res) {
    res.send(req.user);
  }
}

module.exports = new userController();
