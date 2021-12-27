let express = require('express');
let router = express.Router();
const homeControlador = require("../controllers/mainController");

router.get("/", homeControlador.home);

module.exports = router;