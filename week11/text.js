var text1 = 
"I wanted to go back and re-investigate the hardware architecture of the ATtiny series, specifically one of \
the simpler models, the ATtiny85V. Like in the previous <a href='../_week9/index.html#Xmega'>week</a>, I \
designed a breakout board exposing all the pins for the ATtiny85V with the obligatory LED and FTDI cable."

var text2 = 
"The goal of this project is to sense an external analog signal, convert that to a numerical value that \
modulates the brightness of the LED using PWM. To set up the PWM requires adjusting the timer/counter \
controler register (TCCR0A), specifically the compare on match bits and the waveform generation bits."

var text3 = 
"You can tell that I am initiating two PWMs and two analog input signals, as a future project requires \
sensing two signals and modulated two PWMs, respectively. So the ADMUX register must be initialized to \
a particular pin (which will then toggle between the two pins), and for simplicity left shifted to convert \
the 10 bit ADC to 8 bit which is easier to process as a byte value. Finally the ADCSRA and B define the \
characteristic of the ADC such as triggering events, interrupts, prescaling, <a href='http://www.avrfreaks.net/forum/difference-between-single-adc-conversion-and-free-running'>\
free-running</a> mode, etc. During the interrupt, the ADC needs to toggle to the other pin, which simply requires \
changing the bit field of the ADMUX register to (1&lt;&lt;MUX1) or (1&lt;&lt;MUX2)."

var text4 = 
"A potentiometer with a knob was used to test the code. The voltage changes from VCC to 0, with the \
analog input reading the knob's intermediate value. During the interrupt <a href='http://www.nongnu.org/avr-libc/user-manual/group__avr__interrupts.html'>\
ISR</a> function which watches the ADC_vect (when conversion is complete), the ADC is read from the ADCH register \
and put into the OCR0A or OCR0B (Output Compare Register) which changes when the TCCR0A compares against and toggles its signal, \
thereby generating a PWM. "

var text5 = 
"V<sup>+/-</sup> = power supply<br>\
R<sub>div</sub> = voltage divider<br>\
V<sub>sig</sub> = signal lead"

var text6 = 
"I used <a href='http://www.kobakant.at/DIY/?p=381'>velostat</a> as a pressure sensitive material for the input signal. \
A modification from traditionally made velostat sensors is putting the signal and vcc/gnd traces on the same \
layer. For this to work is to have interlocking traces that are close enough to sense the resistive changes \
in the velostat. The left video is a demonstration of this working."

var TEXT = [text1, text2, text3, text4, text5, text6]