#include <avr/io.h>

void setClock2MHzPLL(uint8_t multiplier_bm)
{
	OSC.PLLCTRL = OSC_PLLSRC_RC2M_gc | multiplier_bm; // select 2MHz RC as source, multiply by X_bm
	OSC.CTRL |= OSC_PLLEN_bm; // 0x10 - enable PLL
	while (0 == (OSC.STATUS & OSC_PLLRDY_bm)); // wait for PLL to stabilize
	CLK.CTRL = CLK_SCLKSEL2_bm; // 0x04 - select PLL as System Clock Source
}

void setClock32MHz()
{
	OSC.CTRL = OSC_RC32MEN_bm; // enable 32MHz clock
	while (!(OSC.STATUS & OSC_RC32MRDY_bm)); // wait for clock to be ready
	CCP = CCP_IOREG_gc; // enable protected register change
	CLK.CTRL = CLK_SCLKSEL_RC32M_gc; // switch to 32MHz clock
}