// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

export default async (req, res) => {
  const token =
    "SkFabTZibXE1aE14ckpQUUxHc2dnQ2RzdlFRTTM2NFE2cGI4d3RQNjZmdEFITmdBQkE=";
  const bearerHeader = req.headers["authorization"];
  console.log(req.headers);
  if (typeof bearerHeader == "undefined") {
    return res
      .status(403)
      .json({ message: "You are not authorized to perfrom this action." });
  }
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];
  if (bearerToken !== token) {
    return res
      .status(403)
      .json({ message: "Invalid Authorization token supplied." });
  }
  return res.json({ message: "Player Deleted" });
};
