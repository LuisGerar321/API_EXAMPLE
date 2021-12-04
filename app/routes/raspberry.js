const chalk = require("chalk");
const exPress = require("express");
const router = exPress.Router();
const bodyParser = require("body-parser");
const raspberryActions = require("../controllers/raspberryActions.js");


var jsonParser = bodyParser.json();
const myRaspberry = new raspberryActions(36);



router.use(jsonParser);
//REST API CRUD


router.get("/ledOn", function(request, response) {
    response.json("ledOn!");
    myRaspberry.ledOn();
    console.log(chalk.yellow("Led turned on!"));

});

router.get("/ledOff", (req, res) => {
    res.json("ledOff!");
    myRaspberry.ledOff();
    console.log(chalk.yellow("Led turned off!"));
});

router.get("/pinLed", (req, res) => {
    res.json(myRaspberry.pinLed)
});

router.post("/turnonntimes", (req, res) => {
    console.log(req.body.times);
    myRaspberry.ledOnNTimes(5);
})


module.exports = router;