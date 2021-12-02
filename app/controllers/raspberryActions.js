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

			setTimeout(() =>{
				this.ledOn();	
			}, 1000);
			
			setTimeout(() =>{
				this.ledOff();
			}, 1000);
			
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

