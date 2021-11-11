const chalk = require("chalk");
const exPress = require("express");
const router = exPress.Router();
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json();


router.use(jsonParser);
//REST API CRUD
router.get("/raspberry", function (request, response) {
        console.log(request);
        response.json("Led On!");
        // response.send("Hihi!");
        console.log(chalk.red("Led On!"));
});


router.get("/home", function (request, response) {
        console.log(request);
        response.json("Welcome Home!");
        console.log(chalk.red("Welcome Home!"));
});

router.post("/raspberry",(req, res) => {
        res.send(req.body);

        const { ledIntensity } = req.body;

        console.log( ledIntensity );
        console.log(req.body);
})


module.exports = router;

