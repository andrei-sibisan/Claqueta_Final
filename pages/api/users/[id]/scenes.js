import dbConnect from "../../../../utils/dbConnect";
import User from "../../../../models/User";

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
          console.log(user.projects.shotlist);
          res.status(200).json({ success: true, data: user.projects.shotlist });
        } catch (error) {
          return res.status(400).json({ success: false });
        }
        break;
      case "POST":
        try {
          const user = await User.findById(id);
          if (!user) {
            return res.status(400).json({ success: false });
          }
          const index = user.projects
            .map((object) => object.name)
            .indexOf(req.body.projName);
          user.projects[index].push(req.body.shot);
          user.save();
        } catch (error) {
          return res.status(400).json({ success: false });
        }
        break;
      case "DELETE":
        try {
          const user = await User.findById(id);
          if (!user) {
            return res.status(400).json({ success: false });
          }
          const index = user.projects
            .map((object) => object.name)
            .indexOf(req.body.projName);

          const shotIndex = user.projects[index].shotlist
            .map((object) => object.name)
            .indexOf(req.body.shotName);
          user.projects[index].shotlist.splice(shotIndex, 1);
          user.save();
        } catch (error) {
          return res.status(400).json({ success: false });
        }
    }
  }
};
