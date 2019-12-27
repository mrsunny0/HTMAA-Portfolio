var text1 = 
"Straight forward replication of the attiny44 <a href='http://academy.cba.mit.edu/classes/embedded_programming/index.html#echo'>\
Hello World Board</a> provided by the FAB class. While making it, I was impressed how efficient the \
board was laid out with under component routes."

var text2 = 
"A push button was added to pin PB2 without a pull-up resistor, as the board already contains an \
interal pull-up resistor. The second was to add an LEB with a 1KOhm current limiting resistor. \
I made the LEB blue, as I wanted to make red/green LEB indicators for TX and RX."

var text3 = 
"Red (TX) and green (RX) LEDs (with 1KOhm resistor) were added \
to the FTDI TX and RX pins. As TX and RX are normally HIGH, and LOW when providing signal, the LEDs were \
oriented from VCC->TX/RX. A better, and more conforming to spec, schematic would be to use a <a href='https://en.wikipedia.org/wiki/Buffer_amplifier'>\
voltage follower</a> amplifier configuration instead."

var text4 = 
"The <a href='http://academy.cba.mit.edu/classes/embedded_programming/hello.ftdi.44.echo.c'>hello world</a> \
code was flashed onto the board and to check, a TTL (transistor-transistor logic) USB cable was hooked up, to \
monitor the <i>echo 'hello world'</i> response. Additionally, an oscilliscope was hooked onto the TX and RX pins to \
measure the voltage line on the serial communication. The <a href='https://www.arduino.cc/en/Main/Software'>\
Arduino IDE</a> bundles the firmware with the IDE to allow serial communication, otherwise one can write a python \
script to decode the serial port directly using <a href='https://pypi.python.org/pypi/pyserial'>pyserial</a>. \
You can download my code here: <a href=./serial_readwrite.py download style='color:black'>\
	<b>script</b>\
</a>"

var text5 = 
"Peculiarly, depending on the specs of the probe, the probe measuring at 200MHz/sec (black, top figures) \
measures more bits than the 100MHz/sec (grey, bottom figures) probe. A possibility is that the \
extra bits from the faster probe come from triggering or display artifacts from the oscilliscope."

var text6 = 
"I looked up <a href='http://www.asciitable.com/''>ASCII tables</a> for letter symbols to hex codes and \
then <a href='http://www.scadacore.com/tools/programming-calculators/online-hex-converter/'>\
converted</a> them into 8-bit."

var text7 = 
"Surprisingly, the first 8 significant bits of each symbol match with the measured signal using the gray (less \
bit) probe. However, the measurements have random big switches for the remaining 8 bits, reasons still \
unknown."

var TEXT = [text1, text2, text3, text4, text5, text6, text7]