#define F_CPU 32000000UL
#include <avr/io.h>
#include <util/delay.h>
#include <stdio.h>

#include "usart_driver.h"
#include "clock_driver.h"

// 9600 baud @2MHz
// #define BAUD_VALUE 1539
// #define BAUD_SCALE -7

// 152000 baud @32Mhz
#define BAUD_VALUE 1047
#define BAUD_SCALE	-6

// PORTS
#define USART USARTD0

void setClock32MHz()
{
	OSC.CTRL = OSC_RC32MEN_bm; // enable 32MHz clock
	while (!(OSC.STATUS & OSC_RC32MRDY_bm)); // wait for clock to be ready
	CCP = CCP_IOREG_gc; // enable protected register change
	CLK.CTRL = CLK_SCLKSEL_RC32M_gc; // switch to 32MHz clock
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

int main(void) 
{
	setClock32MHz();
	setupUART(0);

	char receivedChar;
	char outputString[100];

	while(1) {
		//receivedChar = getChar();
		//if (receivedChar) {
			//sprintf(outputString, "You just typed: %c\n", receivedChar);
			//sendString(outputString);
		//}
		receivedChar = getChar();
		if (receivedChar == '\n') {
			sendString("HELLO WORLD\n");
			_delay_ms(250);
		}
	}
}