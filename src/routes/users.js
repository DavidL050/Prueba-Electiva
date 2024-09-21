const {Router} = require("express");

const router = Router();

router.get("/Username", (req, res) => {
  res.send("Este no es un archivo");
});

router.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("Profile page");
});

module.exports = router;
 