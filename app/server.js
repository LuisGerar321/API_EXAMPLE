const chalk = require("chalk");
const express = require("express");
const myRouters = require("./routes/raspberry");

const PORT = 3000;
const URL = "http://localhost";
const app = express();


app.use(myRouters);

app.get("/", (request, response) => {
    response.json("Hello world")
})


app.listen(PORT, () => {
    console.log(chalk.green(`server running at: ${URL}:${PORT}/`));
})