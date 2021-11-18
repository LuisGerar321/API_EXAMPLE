const chalk = require("chalk");
const exPress = require("express");
const router = exPress.Router();
const bodyParser = require("body-parser");
const raspberryActions =  require("../controllers/raspberryActions.js");


var jsonParser = bodyParser.json();
const myRaspberry  = new raspberryActions(36);



router.use(jsonParser);
//REST API CRUD


router.get("/ledOn", function (request, response) {
        response.json("ledOn!");
        myRaspberry.ledOn();
        console.log(chalk.yellow("Led turned on!"));

});

router.get("/ledOff",(req, res) => {
		res.json("ledOff!");
		myRaspberry.ledOff();
		console.log(chalk.yellow("Led turned off!"));
});


module.exports = router;

