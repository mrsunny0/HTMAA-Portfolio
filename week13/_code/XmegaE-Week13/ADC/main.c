// code taken from https://eewiki.net/display/microcontroller/ADC+Example+for+Xmega
#ifndef F_CPU
#define F_CPU 16000000UL
#endif
#include <avr/io.h>

void setupCLK()
{
	OSC.PLLCTRL = OSC_PLLSRC_RC2M_gc | OSC_PLLFAC3_bm; // 0x08 - select 2MHz RC as source, multiply by 8
	OSC.CTRL |= OSC_PLLEN_bm; // 0x10 - enable PLL
	while (0 == (OSC.STATUS & OSC_PLLRDY_bm)); // wait for PLL to stabilize
	CLK.CTRL = CLK_SCLKSEL2_bm; // 0x04 - select PLL as System Clock source	
}

void prescaleADC()
{
	CLK.PSCTRL = CLK_PSADIV0_bm; // this sets Clk_per4 = Clk_sys/2   =>   16MHz/2 = 8MHz
	// leaving PSBCDIV[1:0] with default value of '00' sets Clk_per2, Clk_per, and Clk_cpu equal to Clk_per4 (8MHz)
	
	// Set ADC clock to 125kHz: Clk_per/64   =>   8MHz/64 = 125kHz
	ADCA.PRESCALER = ADC_PRESCALER2_bm; // 0x04
}

void enableINTADC()
{	
	// Enable Conversion Complete Interrupt with high priority
	ADC.CH0.INTCTRL = ADC_CH_INTLVL1_bm | ADC_CH_INTLVL0_bm; // 0x03
	
	// Ensure the conversion complete flag is cleared
	ADC.INTFLAGS = ADC_CH0IF_bm; // 0x01
}

void modeADC() {
	// enable ADC
	ADC.CTRLA = ADC_ENABLE_bm; // 0x01
	
	// single conversion, signed mode, right justified
	// note that the msb is the sign, so the result is an 11 bit value
	ADC.CTRLB = ADC_CONMODE_bm; // 0x10
}


int main(void)
{
    /* Replace with your application code */
    while (1) 
    {
    }
}

