#ifndef CLOCK_DRIVER_H_
#define CLOCK_DRIVER_H_

#include <avr/io.h>

void setClock2MHzPLL(uint8_t multiplier_bm);

void setClock32MHz();

#endif /* CLOCK_DRIVER_H_ */