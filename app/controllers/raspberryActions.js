const rpio = require("rpio")


class RaspberryPi {
	constructor(led) {
		this.led = led
		rpio.open(this.led, rpio.OUTPUT);
		rpio.write(this.led, rpio.LOW);
		console.log("Constructor");
	};
	deviceInit() {
		rpio.open(this.led, rpio.OUTPUT);
		rpio.write(this.led, rpio.LOW);
	}
	ledOn(){
		rpio.write(this.led, rpio.HIGH)
	};
	ledOff(){
		rpio.write(this.led, rpio.LOW)
	}
};

module.exports = RaspberryPi;

