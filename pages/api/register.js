import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import { hash } from "bcrypt";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});

        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    case "POST":
      try {
        hash(req.body.password, 10, async function (err, hash) {
          const user = await User.create({
            userName: req.body.username,
            password: hash,
          });

          res.status(201).json({ success: true, data: user });
          console.log({ success: true, data: user });
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
