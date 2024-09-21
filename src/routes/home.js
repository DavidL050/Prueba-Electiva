const { Router } = require("express");

const router = Router();

router.all("/about", (req, res) => {
  const title = "mi pagina express 2 ";

  res.render("index", { title: title });
});

router.all("/dashboard", (req, res) => {
  res.render("index");
});

module.exports = router;
