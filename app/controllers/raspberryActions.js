const rpio = require("rpio")


class RaspberryPi {
	constructor(led) {
		this.led = led
		//Initial commands//
		rpio.open(this.led, rpio.OUTPUT);
		rpio.write(this.led, rpio.LOW);
	};
	ledOn(){
		rpio.write(this.led, rpio.HIGH)
	};
	ledOff(){
		rpio.write(this.led, rpio.LOW)
	};
	get	pinLed() {
		return this.led;
	};
	set pinLed(led) {
		this.led = led;
	};
};

module.exports = RaspberryPi;

