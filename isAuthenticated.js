import { verify } from "jsonwebtoken";

export default async (req) => {
  verify(req.cookies.auth, process.env.GUID, function (err, decoded) {
    if (!err && decoded) {
      return true;
    }
  });
};
