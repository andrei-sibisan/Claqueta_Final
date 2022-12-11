import dbConnect from "../../../../utils/dbConnect";
import User from "../../../../models/User";

import isAuthenticated from "../../../../isAuthenticated";

dbConnect();

let auth = false;

export default async (req, res) => {
  const {
    method,
    query: { id, pr_id },
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
          const currentProject = user.projects.find(
            (proj) => proj._id === pr_id
          );
          console.log(currentProject.shotlist);
          res
            .status(200)
            .json({ success: true, data: currentProject.shotlist });
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

          const currentProject = user.projects.find(
            (proj) => proj._id === pr_id
          );

          currentProject.shotlist.push(req.body.shot);
          user.save();
          res.status(201).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false, error: error });
        }

      case "DELETE":
        try {
          const user = await User.findById(id);
          if (!user.projects) {
            return res
              .status(400)
              .json({ success: false, message: "no projects array" });
          }

          const currentProject = user.projects.find(
            (proj) => proj._id === pr_id
          );
          let index = currentProject.shotlist.indexOf(req.body.shot.name);
          currentProject.shotlist.splice(index, 1);
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
