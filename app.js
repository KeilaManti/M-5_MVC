const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("public"));

let homeRouter = require("./routes/main");
app.use("/", homeRouter);

app.listen(3000, () => {
	console.log("Servidor funcionando");
});