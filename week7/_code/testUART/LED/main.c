#define F_CPU 20000000UL
#include <avr/io.h>
#include <util/delay.h>

int setup(void) {
	// set ports
	DDRA |= (1<<PORTA7); // make pinA7 output
	DDRB |= 0b0000; // make pinB2 an input pin
	PORTB |= 0x4; // make pinB2 a pullup resistor (0b0100)
	
	// set clocks
	CLKPR = (1 << CLKPCE);
	CLKPR = (0 << CLKPS3) | (0 << CLKPS2) | (0 << CLKPS1) | (0 << CLKPS0);
}

void pressButton() {
	while (1) {
		// check to see if its pressed
		// note, default is high, pressed is low
		if (PINB & (1<<PORTB2)) {
			PORTA &= ~(1<<PORTA7);
		}
		else {
			PORTA |= (1<<PORTA7);
		}
	}
}

void blink() {
	while(1) {
		// HIGH
		PORTA |= (1<<PORTA7);
		_delay_ms(1000);
		// LOW
		PORTA &= ~(1<<PORTA7);
		_delay_ms(1000);
	}
}

int main(void) {
	setup();
	// blink();
	pressButton();
}

