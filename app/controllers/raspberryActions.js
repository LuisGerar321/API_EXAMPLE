const rpio = require("rpio")


class RaspberryPi {
	constructor(led) {
		this.led = led
		//Initial commands//
		rpio.open(this.led, rpio.OUTPUT);
		rpio.write(this.led, rpio.LOW);
	};

	ledOn(){
		console.log("On.");
		rpio.write(this.led, rpio.HIGH)
	};

	ledOff(){
		console.log("Of.");
		rpio.write(this.led, rpio.LOW)
	};

	turnOnLedNtimes(n) {
		for (let i = 0; i < n; i++) {
			this.ledOn();
			rpio.msleep(1000);
			this.ledOff();
		};
	}
	get	pinLed() {
		return this.led;
	};
	set pinLed(led) {
		this.led = led;
	};
};

module.exports = RaspberryPi;

