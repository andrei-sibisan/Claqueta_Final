import dbConnect from "../../../../utils/dbConnect";
import User from "../../../../models/User";

import isAuthenticated from "../../../../isAuthenticated";

dbConnect();

let auth = false;

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  auth = isAuthenticated(req);

  if (auth) {
    switch (method) {
      case "GET":
        try {
          const user = await User.findById(id);
          if (!user) {
            return res.status(400).json({ success: false });
          }
          console.log(user.projects);
          console.log(user.userName);
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;

      case "PUT":
        try {
          const user = await User.findById(id);
          if (!user.projects) {
            return res
              .status(400)
              .json({ success: false, message: "no projects array" });
          }

          user.projects.push(req.body.project);
          user.save();
          res.status(201).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false, error: error });
        }

      case "DELETE":
        try {
          const user = await User.findById(id);
          const index = user.projects
            .map((object) => object.name)
            .indexOf("test");
          console.log(index);
          user.projects.splice(index, 1);
          user.save();
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
    }
  } else {
    res.status(400).json({ success: false, message: "not authenticated" });
  }
};
