// 115200 baud FTDI character echo, with flash string
// set lfuse to 0x5E for 20 MHz xtal
#ifndef F_CPU
	#define F_CPU 20000000UL
#endif
#include <stdio.h>
#include <avr/io.h>
#include <util/delay.h>
#include <avr/pgmspace.h>

#define BAUDRATE 115200
#define bit_delay_time 1000000/BAUDRATE
#define bit_delay() _delay_us(bit_delay_time) // RS232 bit delay
#define half_bit_delay() _delay_us(bit_delay_time/2) // RS232 half bit delay
#define char_delay() _delay_ms(10) // char delay

void setup() {
	// setup clock
	CLKPR = (1 << CLKPCE);
	CLKPR = (0 << CLKPS3) | (0 << CLKPS2) | (0 << CLKPS1) | (0 << CLKPS0);
	
	// set up PORTA for TX (-> RX pin) and LED	
	DDRA |= (1<<PORTA1) | (1 << PORTA7);
	// send HIGH byte to establish UART
	PORTA |= (1<<PORTA1);
	
	// set up PORTB for input, button press)
	// note, registerB is 4 bits
	DDRB |= 0x0;
	PORTB |= 0x4;  // set pull-up resistor	(ob0100)
}
/*
 * reverse byte
 * UART sends LSB first
 */
unsigned char reverseByte (unsigned char x) {
  x = ((x >> 1) & 0x55) | ((x << 1) & 0xaa);
  x = ((x >> 2) & 0x33) | ((x << 2) & 0xcc);
  x = ((x >> 4) & 0x0f) | ((x << 4) & 0xf0);
  return x;    
}

void put_char(volatile unsigned char *PORT, unsigned char PIN, char txchar) {
	// clear pin
	*PORT &= ~PIN;
	bit_delay();

	// unraveled for loop
	// note, for some reason putting this in for loop doesn't work for UART timing
	if (txchar & (1<<0)) {
		*PORT |= PIN;
	} else {
		*PORT &= ~PIN;
	}
	bit_delay();
	if (txchar & (1<<1)) {
		*PORT |= PIN;
		} else {
		*PORT &= ~PIN;
	}
	bit_delay();
	if (txchar & (1<<2)) {
		*PORT |= PIN;
		} else {
		*PORT &= ~PIN;
	}
	bit_delay();
	if (txchar & (1<<3)) {
		*PORT |= PIN;
		} else {
		*PORT &= ~PIN;
	}
	bit_delay();	
	if (txchar & (1<<4)) {
		*PORT |= PIN;
		} else {
		*PORT &= ~PIN;
	}
	bit_delay();
	if (txchar & (1<<5)) {
		*PORT |= PIN;
		} else {
		*PORT &= ~PIN;
	}
	bit_delay();	
	if (txchar & (1<<6)) {
		*PORT |= PIN;
		} else {
		*PORT &= ~PIN;
	}
	bit_delay();
	if (txchar & (1<<7)) {
		*PORT |= PIN;
		} else {
		*PORT &= ~PIN;
	}							
	bit_delay();	

	// stop bit
	*PORT |= PIN; // goes back to HIGH
	bit_delay();
	// char delay
	bit_delay();
}

void put_string(volatile unsigned char *PORT, unsigned char PIN, char *str) {
	static int index;
	index = 0;
	do {
		put_char(PORT, PIN, str[index]);
		++index;
	} 
	while (str[index] != 0);
}

int button_press(int prev_state) {
	// button presses
	static unsigned int PRESSES = 1;
	char OUT[4];
	sprintf(OUT, "%d", PRESSES);
	
	// pin is LOW (pressed) and state before was off (0) 
	if (!(PINB & (1<<PINB2))) {
		PRESSES++;
		PORTA |= (1<<PORTA7);
		put_string(&PORTA, (1<<PORTA1), "pressed button: ");
		put_string(&PORTA, (1<<PORTA1), OUT);
		put_string(&PORTA, (1<<PORTA1), " number of times\n");
		return 0;
	}
	else {
		PORTA &= ~(1<<PORTA7);
		return 1;
	}
}

int main(void) {	
	setup();
	int button_value=0; 
	while (1) {
		button_value = button_press(button_value);
		_delay_ms(200);
	}
}