import dbConnect from "../../../../../../../utils/dbConnect";
import User from "../../../../../../../models/User";

import isAuthenticated from "../../../../../../../isAuthenticated";

dbConnect();

let auth = false;

export default async (req, res) => {
  const {
    method,
    query: { id, pr_id, sh_id },
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
          console.log(sh_id);
          const currentProject = user.projects.find(
            (proj) => proj._id.toString() === pr_id
          );
          const currentShot = currentProject.shotlist.find((shot) => {
            console.log(shot._id.toString);
            return shot._id.toString() === sh_id;
          });
          //   console.log("current project is: ", currentProject);
          console.log("current shot is: ", currentShot);
          res.status(200).json({ success: true, data: currentShot });
        } catch (error) {
          res.status(400).json({ success: false, data: currentShot });
        }
        break;
      case "PUT":
        try {
          const user = await User.findById(id);
          if (!user) {
            return res.status(400).json({ success: false, message: "no user" });
          }
          const currentProject = user.projects.find(
            (proj) => proj._id.toString() === pr_id
          );
          const currentShot = currentProject.shotlist.find((shot) => {
            return shot._id.toString() === sh_id;
          });

          console.log("current shot is: ", currentShot);
          currentShot.name = req.body.name;
          currentShot.scene = req.body.scene;
          currentShot.dayNight = req.body.dayNight;
          currentShot.interiorExterior = req.body.interiorExterior;
          currentShot.Characters = req.body.Characters;
          console.log(req.body);
          user.save();
          res.status(200).json({ success: true, data: currentShot });
        } catch (error) {
          res.status(400).json({ success: false, data: currentShot });
        }
    }
  }
};
