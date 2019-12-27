#define F_CPU 32000000UL
#include <avr/io.h>
#include <util/delay.h>
#include <stdio.h>

#include "usart_driver.h"

// 9600 baud @2MHz
// #define BAUD_VALUE 1539
// #define BAUD_SCALE -7

// 9600 baud @32MHz
#define BAUD_VALUE 12
#define BAUD_SCALE 4

// 115200 baud @32Mhz
// #define BAUD_VALUE 1047
// #define BAUD_SCALE	-6

// PORTS
#define USART USARTD0

// LED
#define LED_PORT PORTA
#define LED_PIN PIN4_bm

// PWR
#define PWR_PORT PORTC
#define VCC_PIN PIN5_bm
#define GND_PIN PIN4_bm

void setClock32MHz()
{
	OSC.CTRL = OSC_RC32MEN_bm; // enable 32MHz clock
	while (!(OSC.STATUS & OSC_RC32MRDY_bm)); // wait for clock to be ready
	CCP = CCP_IOREG_gc; // enable protected register change
	CLK.CTRL = CLK_SCLKSEL_RC32M_gc; // switch to 32MHz clock
}

void setupPins() 
{
	LED_PORT.DIRSET |= LED_PIN;
	PWR_PORT.DIRSET |= VCC_PIN | GND_PIN;
	
	PWR_PORT.OUTCLR |= GND_PIN;
	PWR_PORT.OUTSET |= VCC_PIN;
}

void setupUART(uint8_t remap)
{
	// format USART
	USART_Format_Set(&USART, USART_CHSIZE_8BIT_gc, USART_PMODE_DISABLED_gc, 0);
	
	// set BAUDRATE
	USART_Baudrate_Set(&USART, BAUD_VALUE, BAUD_SCALE);
	
	// remap if necessary note: pins 2,3 are default
	USART_Tx_Disable(&USART);
	if (remap) {
		PORTD.REMAP |= PORT_USART0_bm;
		} else {
		PORTD.REMAP &= ~(PORT_USART0_bm);
	}
	
	// set USART pin
	PORTD.DIRSET = PIN3_bm;
	PORTD.DIRCLR = PIN2_bm;
	USART_Tx_Enable(&USART);
	USART_Rx_Enable(&USART);
}

void sendChar(char c)
{
	while ((USARTD0.STATUS & USART_DREIF_bm) == 0); // wait until buffer is empty
	USARTD0.DATA = c;
}

void sendString(char * text)
{
	while(*text) {
		sendChar(*text++);
	}
}

char getChar()
{
	if (USART.STATUS & USART_RXCIF_bm) {
		return USART.DATA;
	} else {
		return 0;
	}
}

void getString(char * str, int len)
{
	int index = 0;
	while (1)
	{
		str[index] = getChar();
		// if character is empty or end of line indicator
		if (str[index]=='\n') { break; }
		index++;
		// if read exceeds str buffer length
		if (index==len) { break; }
	}
}

int main(void) 
{
	setClock32MHz();
	setupUART(0);
	setupPins();

	static char receivedChar;
	static char outputString[10];
	
	while(1) {
		//receivedChar = getChar();
		//if (receivedChar == '\n') {
			//sendString("HELLO WORLD\n");
			//_delay_ms(250);
		//}
		
		receivedChar = getChar();
		if (receivedChar)
		{
			sendChar(receivedChar);
			
			if (receivedChar == '0')
			{
				LED_PORT.OUTCLR |= LED_PIN;
			}
			else if (receivedChar == '1')
			{
				LED_PORT.OUTSET |= LED_PIN;
			}
		}
		else
		{
			//sendChar('a');
			//_delay_ms(500);
			//sendChar('b');
			//_delay_ms(500);
		}
	}
}