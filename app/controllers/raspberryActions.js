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

	turn_OnLedNtimes(n){
		for (let i = 1; i<= n; i++){ // We execute a for-loop with 'n' as a limit
			this.ledOn(); // Turn the led on
			rpio.msleep(1000); // Wait 1000ms
			this.ledOff(); // Turn the led Off
			rpio.msleep(1000); // Wait 1000ms
		}; // Repeat until i=5
	}

	get	pinLed() {
		return this.led;
	};
	set pinLed(led) {
		this.led = led;
	};
};

module.exports = RaspberryPi;

