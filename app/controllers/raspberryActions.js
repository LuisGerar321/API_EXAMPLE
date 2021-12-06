const rpio = require("rpio")


class RaspberryPi {
    constructor(led) {
        this.led = led
            //Initial commands//
        rpio.open(this.led, rpio.OUTPUT);
        rpio.write(this.led, rpio.LOW);
    };
    ledOn() {
        rpio.write(this.led, rpio.HIGH)
    };
    ledOff() {
        rpio.write(this.led, rpio.LOW)
    };
    ledOnNTimes(times) {

        for (var i = 0; i < times; i++) {
            //prende el led 1 segundo
            rpio.write(16, rpio.HIGH);
            rpio.sleep(1);

            /* apaga el led 1 segundo */
            rpio.write(16, rpio.LOW);
            rpio.msleep(1000);
        }
    }
    get pinLed() {
        return this.led;
    };
    set pinLed(led) {
        this.led = led;
    };
};

module.exports = RaspberryPi;