var text1 =  
"I used <a href='http://fab.cba.mit.edu/classes/863.16/doc/projects/ftsmin/index.html'>Brian's</a> and \
<a href='http://fab.cba.mit.edu/classes/863.11/people/valentin.heun/2.htm'>Valentin's</a> schematic \
for making the tinyUSB programmer. Brian's layout uses the attiny45/85\
board while Valentin's uses the attiny44a which has an external clock (20MHZ osc) and a few additional components\
that go with the additional microcontroller pins (16 instead of 8). There are personal preference \
pros and cons about each. Brian's board has LEDs indicating power and programming status. While Valentin's \
board conviently has a 'snap-away' piece that eliminates the need to de-solder the reset pins once the GPIOs \
get irreversibly programmed."

var text2 = 
"The boards were cut using <a href=http://mods.cba.mit.edu>MODS</a> on the Modela MDX-20. \
Traces were cut first with a 1/64'' drill bit. Afterwards the outline was milled through with a 1/32'' bit. \
There wasn't a hassle adjusting drill bits and calibrating height of the FR-1 board, and thankfully \
the boards were cutout nicely."

var text3 = 
"Before soldering, boards were cleaned with isopropanol to remove any finger grease stains that could \
accidentally etch the copper. During soldering, the majority of time spent was looking for components \
and double checking the schematic for correct layout. Soldering was made easier for the larger components \
by using adhesive putty. For the smaller components such as resistors and capacitors, a pad was first tinned \
and was then resoldered onto the pad. The adjacent pad was soldered and finally the first pad was reflowed once \
again to remove any soldering defects."

var text4 = "Instead of programming an attiny45 illustrated on Brian's board, \
I instead used the attiny85; the only difference is the larger memory space \
(8Kb, <i>attiny<b>8</b>5</i> versus 4Kb, <i>attiny<b>4</b>5</i>). Therefore, before compiling, the Makefile was \
modified by adjusting the '<i>Programmer?=</i> line from <i>attiny45</i> \
to <i>attiny85</i>. After compiling the board was flushed with <i><b>make flush</b></i> and then <i><b>make flash</b></i>'d' \
to load the programmer instructions. To check if the board instructions were set correctly the command <i><b>make fuses</b></i> was sent \
which ultimately sets the clock source for the board allowing the board to be recognizable to external hardware. \
So to check, the board was plugged in to my computer's USB port. The board was recognized, with USB name as 'Multiple Vendors USBtiny'. \
Once this was confirmed the reset pin was blown to actually change its reset pin to a \
GPIO pin for programming by running <i><b>make rstdisbl</b></i>."

var TEXT = [text1, text2, text3, text4]