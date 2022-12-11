import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from "cookie";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({
          userName: req.body.username,
        });

        compare(req.body.password, user.password, function (err, result) {
          if (!err && result) {
            const claims = { sub: user._id };
            const jwt = sign(claims, process.env.GUID, { expiresIn: "1h" });
            res.setHeader(
              "Set-Cookie",
              cookie.serialize("auth", jwt, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                sameSite: "strict",
                maxAge: 3600,
                path: "/",
              })
            );
            res.status(201).json({
              success: true,
              data: user,
              authToken: jwt,
            });
          } else {
            res.status(400).json({ success: false });
            console.log("failed in else statement");
          }
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
        console.log("failed in catch error");
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
