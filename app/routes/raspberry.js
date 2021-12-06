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

// Endpoint Tech storie
router.put("/ledOn_N_times", (request, response) => { // Here we create the endpoint
	response.json("Led on num times"); 
	const n = request, body, ledOn; // We use the parameter ledOn to indicate the value of 'n'
	console.log(request,body);
	myRaspberry.turn_OnLedNtimes(n); // We call the function of the RaspberryPi to do execute the code
	console.log(chalk.yellow("The Led was turned off")); // Notify the end of the code

	
});

router.get("/pinLed", (req, res) => {
    res.json(myRaspberry.pinLed)
});

router.post("/turnonntimes", (req, res) => {
    console.log(req.body.times);
    myRaspberry.ledOnNTimes(5);
})


module.exports = router;