var text1 = 
"This is a description of bit manipulation and mask usage, written concisely by Eric Weddington via c macros. <br>\
<ul class='mt-4'>\
<li><i>p</i> = register (8 bit), whether that is the clock or pin ports. </li>\
<li><i>m</i> = bit mask, e.g. 0xFF, or a byte that is used to logically manipulate the register port.</li>\
<li><i>x</i> = bit index, e.g. PORTA7, or a value specifying the index in the register.</li>\
</ul>\
Some simplifying take aways are\
<ul class='mt-4'>\
<li>&=, used with a ~ (not) mask to clear bits</li>\
<li>|=, used with a mask to turn bits high</li>\
<li>^=, used with a mask to toggle a bit</li>\
"

var text2 =
"Fuses are configurable bits that initialize the state of the AVR, even before programming. \
Some examples are setting up memory access, clock source and divider, start-up options etc. \
Overall, there are 3 registers for the attiny44 fuse bytes.\
<ul class='mt-4'>\
<li>Extended Bytes (not used, except for SELFPRGEN)</li>\
<li>High Bytes (general AVR functionality)</li>\
<li>Low Bytes (setting up clock)</li>\
</ul>"

var text3 = 
"Looking at the spec sheet we can decide how to set the low fuse byte. Typically CKSEL3:1 are used to \
determine the use and frequency rate of an external clock. Since we are using a 20MHz external clock (>8MHz) \
we need to set CKSEL3:1 to 111. Choosing CKSEL0, however, is tied to what kind of external oscillator we are using \
<a href='https://electronics.stackexchange.com/questions/36308/crystals-oscillators-and-resonators-what-the-difference'>\
(resonator vs. crystal)</a> and SUT1:0 are determined by the startup time and delay we want for the oscillator. \
<br>\
CKSEL0 is set to 0 since the design uses a 20 MHz external resonator, therefore SUT1:0 can only be the top half of \
Table 6-10. As a process of elimination, fast rising power is not necessary for this project, and BOD is not enabled by default \
in the high fuse byte. Therefore SUT1:0 should be 01.\
<br>\
Overall, keeping the first two bits as default (CKDIV8:CKOUT=01) the low fuse byte is now <br>"

var text4 =
"Alternatively you can calculate the fuse bytes using a GUI interface which provides clickable options for fuses \
rather than looking at a datasheet. <a href='http://www.engbedded.com/fusecalc/'>Fuse Calculator</a>"

var text5 =
"<ul>\
  <li>1 start bit</li>\
  <li>8 bits (char data)</li>\
  <li>1 bit parity (optional, typically low)</li>\
  <li>2 bits stop</li>\
  <li>BPS (bits per second) = 1/BAUDRATE</li>\
</ul>"

var text6 =
"reading datasheets for HC-05 and BLEgiga"

var TEXT = [text1, text2, text3, text4, text5, text6]