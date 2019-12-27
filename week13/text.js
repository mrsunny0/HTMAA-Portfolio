var text1 = 
"<a href='https://en.wikipedia.org/wiki/Bluetooth'>Bluetooth</a>, and its brother Bluetooth Low Energy (<a href='https://en.wikipedia.org/wiki/Bluetooth_Low_Energy'>BLE</a>) \
are forms of radio communication that uses the 2.4GHz radio frequency for short, to now, long distances. What underlies the bluetooth stack is \
<a href='https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gatt'>GATT</a>, more verbosely, the Generic Attribute Profile, which \
is a communication structure that follows the <a href='https://en.wikipedia.org/wiki/List_of_Bluetooth_profiles#Attribute_Profile_.28ATT.29'>ATT</a>, \
Attribute Protocol (a lot of terminology, I know).\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;What this really means, through all this jargon, is a structure of communication that is easy for both humans and machines to implement, \
easy to modify and develop for personal or custom applications, and requires low energy and machine bandwidth. To summarize, the BLE protocol has layers that \
are implemented as shown:\
<ol>\
	<li><a href='https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gap'>GAP</a> \
	(Generic Access Profile). This layer is how a bluetooth device displays itself to the outside world \
	and is advertised as either a <strong>Peripheral</strong> or <strong>Central</strong> (who connects to who).</li>\
	<li><a href='https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gatt#services-and-characteristics'>Services</a> \
	are how BLE devices breakup data into specific entities. There are a variety of <a hef='https://www.bluetooth.com/specifications/gatt/services'>established services</a> \
	that are publically recognized such as heart rate monitors.</li>\
	<li>Collections of data within a service are called a <strong>Characteristic</strong>. These entities are typically written in HEX \
	and are delivered to the appropriate end point for communication. Characteristics is just another name for data that can be used \
	by another human or machine </li>\
</ol>\
Knowing this, a final thing to understand is how BLE devices are distinguished from one another, or more so, how are services and characteristics \
packaged into unique entities that do not conflict with another device employing the same advertisement (say, two BLE fitbits in the same room). This \
is established with <a href='https://en.wikipedia.org/wiki/Universally_unique_identifier'>UUIDs</a>, Universally unique identifier, which is a 128-bit number \
almost like a bar code for each device, service, and characteristic. If you are a hack and would like to make your own UUIDs (therefore personal BLE devices) \
use a <a href='https://www.uuidgenerator.net/'>UUID generator</a>." 

var text2 = 
"One way to communicate with a device is through serial, or the <a href='https://en.wikipedia.org/wiki/RS-232'>RS232 protocol</a> which is a simple \
method for bidirectly communication. What really takes the magic away from this communication is the wired connection."

var text3 = 
"Nowadays, BLE is simply added with an external module, namely the <a href='https://www.amazon.com/DSD-TECH-Bluetooth-iBeacon-Arduino/dp/B06WGZB2N4/ref=sr_1_3?ie=UTF8&qid=1512754751&sr=8-3&keywords=HM-10'>\
HM-10</a> series. The technology has been commoditized that it's relatively cheap to buy a breakout board, and the communication stack has been abstracted away to simple UART->BLE. \
A good introuction can be found in a previous HTMaA <a href='http://fab.cba.mit.edu/classes/863.15/doc/tutorials/programming/bluetooth.html'>post</a>."

var text4 = 
"Finally, to do everything 'in-house', was to create a bluetooth app on my personal computer. Creating a server side app using the \
<a href='https://expressjs.com/'>node express</a> framework and including a bluetooth module known as <a href='https://github.com/sandeepmistry/noble'>noble</a>. The coding \
details is a lot to go through, but flow follows the same BLE communication paradigm. Use GAP to find the device, then connect. Then implement a variety of callbacks \
that identifies which services are displayed, and under each service, collect their data via their characteristics, and repeat as necessary."

var text5 =
"The app takes in a value, either 1 or 0, and sends that value to the BLE device which then toggles an LED, on or off, respectively. The data \
is sent from the front-end to the backend express server using a <a href='https://socket.io/'>socket</a>, and finally sent to the device \
using the noble module which handles the input and toggles the LED."

var TEXT = [text1, text2, text3, text4, text5]