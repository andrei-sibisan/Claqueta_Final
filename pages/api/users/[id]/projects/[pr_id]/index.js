import dbConnect from "../../../../../../utils/dbConnect";
import User from "../../../../../../models/User";

import isAuthenticated from "../../../../../../isAuthenticated";

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
            return res.status(400).json({ success: false, message: "no user" });
          }
          // console.log(user.projects[0]._id.toString());
          const currentProject = user.projects.find(
            (proj) => proj._id.toString() === pr_id
          );
          // console.log(currentProject);
          res
            .status(200)
            .json({ success: true, data: currentProject.shotlist });
        } catch (error) {
          res.status(400).json({ success: false, message: "in catch", error });
        }
        break;

      case "POST":
        try {
          const user = await User.findById(id);
          if (!user) {
            return res
              .status(400)
              .json({ success: false, message: "no projects array" });
          }

          const currentProject = user.projects.find(
            (proj) => proj._id.toString() === pr_id
          );
          // console.log(currentProject);
          // console.log(req.body);
          currentProject.shotlist.push(req.body);
          user.save();
          res
            .status(200)
            .json({ success: true, message: currentProject.shotlist });
        } catch (error) {
          res.status(400).json({ success: false, error: error });
        }
        break;
      case "DELETE":
        try {
          const user = await User.findById(id);
          if (!user.projects) {
            return res
              .status(400)
              .json({ success: false, message: "no projects array" });
          }

          const currentProject = user.projects.find(
            (proj) => proj._id.toString() === pr_id
          );
          // console.log(currentProject.shotlist);
          let currentShot = currentProject.shotlist.find((shot) => {
            console.log("in find shot");
            console.log("in find shot");
            return shot._id.toString() === req.body._id;
          });
          const index = currentProject.shotlist.indexOf(currentShot);
          console.log("current shot is: ", currentShot);
          console.log("current shot index is: ", index);
          // console.log("request looks like: ", req.body._id);
          currentProject.shotlist.splice(index, 1);
          user.save();
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
        } catch (error) {}
        break;
    }
  } else {
    res.status(400).json({ success: false, message: "not authenticated" });
  }
};
