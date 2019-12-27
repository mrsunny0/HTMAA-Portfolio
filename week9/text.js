var text1 = 
"The purpose of this project is to design the logic and controller for driving a motor, specifically a \
stepper motor, which distinguishes itself from a <a href='https://en.wikipedia.org/wiki/DC_motor'>DC</a>, \
<a href='https://en.wikipedia.org/wiki/Brushless_DC_electric_motor'>BLCD</a>, \
and <a href='https://en.wikipedia.org/wiki/Servomotor'>servo</a> motors because of the ability to encode \
position (more precisely, angular rotation in number of rotational steps).\
<br>\
<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>That being said, I graduated from using the ATtiny series and moved \
on to the <a href='http://www.atmel.com/products/microcontrollers/avr/avr_xmega.aspx'>ATXMega</a> familiy of microcontrollers. \
The purpose is to learn how to build a breakout board from scratch and become familiar with the different \
AVR controller architectures.From the breakout board, a dual \
<a href='https://www.digikey.com/products/en?keywords=620-1428-1-ND'>\
H-Bridge</a> daughter board was made to interface and control the stepper motors. A single H-bridge is needed \
for each coil on the bi-polar stepper motor used. Finally, the inlet interface of the daughter board requires \
a VCC input, an external DC power supply (>8V), and four pins to control the pair of H-Bridges."

var text2 =
"The usual designing and milling process, pretty fun. Overall the boards and pads turned our nicely."

var text3 = 
"Assembling the components and soldering was straight forward as well. The only difficulty is avoiding \
solder bridges in the low 0.8mm pitch Xmega32E5 IC. A few wipes of the solder wick removed the bridges, \
but overall it is an unavoidable hassle. "

var text4 = 
"These are software notes to remind me, personally, or for anyone curious. <br>\
A initial note is that the Xmegas have a different software paradigm. Registers with similar features are \
bundled in memory into modules. Each register is accessed via module structs and manipulated with too-long-to-memorize \
predefined bit maps (<i>_bm</i>) and group configuration masks (<i>_gc</i>)."

var text5 = 
"Unlike ATtiny's and megas, the Xmega series do not necessarily require fuses to establish bit defaults \
and performance characteristics. What is done instead is software manipulation of fuses, so to change clocks \
simply require calls to the OSC and CLK modules (specifically the CTRL register)."

var text6 = 
"Stepper motors require on/off logic on each coil. The speed at which each coil is turned on or off is via \
pulse width modulation (<a href='https://en.wikipedia.org/wiki/Pulse-width_modulation'>PWM</a>)"

var text7 = 
"In order to make the sequence of on/off modular, a function called <i>bitBangPWM</i> accepts a PORT, and the \
appropriate logic pins (A1:2, B1:2) and literally bit bangs the PWM to move the motor. The first is to turn \
off the appropriate pins, and PWM using a fixed for loop on the pins that need to turn on."

var text8 = 
"Oscilliscope to check the PWM signals, a AC to DC generator for the external power supply, and finally the \
correct hook ups, and we got a moving motor. The <a href='http://reprap.org/wiki/NEMA_Motor'>NEMA</a> motors \
(large motor in the video below) are typically used to precisely control bots for 3D printing and milling. \
Alternatively, I got my hands on some small 'micro' stepper motors. They are as wide as a penny, and are \
difficult to solder. But once soldered, they move like any other stepper."

var TEXT = [text1, text2, text3, text4, text5, text6, text7, text8]