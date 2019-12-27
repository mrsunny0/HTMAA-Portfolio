/*****************/
/*** PAST WORK ***/
/*****************/
var past_work_01 = 
"A demo coming from a Intel Hackathon. With some friends we attempted to make an 'air' guitar which \
eventually led to the concept of 'air' instruments with the guitar and drums. In order to do this we \
used a capacitive touch sensor on the fingers to indicate note presses, like on a guitar string, and \
triggered guitar sounds by sensing strumming motion with an ultrasound sensor. Combining this with a \
wifi server built on the <a href='https://software.intel.com/en-us/iot/hardware/discontinued'>\
Intel Edison</a> chip we could reproduce recorded sounds by touching the finger and strumming. A similar \
story with the drums. We used different positioned pressure sensors on the foot to indicate which drum \
sound to activate, such as snare, high-hat, or bass etc."

var past_work_02 = 
"I took the same technology we built for the 'air' instruments and attempted to incoporate that for \
wearables and athletic performance feedback. Using a combination of accelerometers and pressure sensors \
I attempted to measure the quality of running and jumping for athletes performing exercises."

/*******************/
/*** INSPIRATION ***/
/*******************/
var inspiration_bebop = 
"<a href='https://en.wikipedia.org/wiki/Keith_McMillen' target='_blank'>Keith McMillen</a> \
is a badass. This man is the first for many hardware instrument technologies including the first \
programmable audio mixer, and launching BeBop Sensors."

var inspiration_elektric = 
"<a href='http://yang-zhang.me/research/Electrick/Electrick.html' target='_blank'>Yang Zhang</a> \
from Carnegie Mellon used electric field tomography to reconstruct touch position and intensity."

var inspiration_DJset = 
"The history of <a hef='http://iml.jou.ufl.edu/projects/fall09/bein_k/history.html'>DJ'ing</a> has always been \
a physical connection between the music and oneself. The first implementation by <a href='https://en.wikipedia.org/wiki/Jimmy_Savile'>\
Jimmy Savile</a> in 1943 was the first to use twin turn tables to continuously play music, and thereon, the practice of \
<a href='https://en.wikipedia.org/wiki/Scratching'>scratching</a> became the mode in which predecessors began to manipulate songs.\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;However, currently the 'art' of DJ'ing has been digitally reduced to adjusting knobs and sliders, \
which through software, control the <a href='https://en.wikipedia.org/wiki/MIDI'>MIDI</a> \
or audio files. Although still cool, and still requires talent, the physical intimacy has been lost between \
the mixer and music. I hope to regain that through this project."

var inspiration_nextGenDJ = 
"I was pleasantly shocked when I came across this video by <a href='http://www.custom-logic.com/blog/v-motion-project-the-instrument/'>\
V Motion Project</a> in 2012 which literally uses the human body and motion to control sound. I am doing a disservice to the \
amount of work and skill that went behind this work, but to summarize, the work consisted of 2 Xbox <a href='https://en.wikipedia.org/wiki/Kinect'>\
Kinects</a>, image processing and cool effects + music manipulation. This project may have been a one-off concept, but \
I really enjoyed the work and it has inspired my thinking since."

/*************************/
/***BACKGROUND RESEARCH***/
/*************************/

var background_industry_01 = 
"There has been extensive work creating electronics and wearables to monitor motion and physiological data. \
The list below is non-exhaustive and is only meant to inspire future investigation. \
<ul>\
	<li>\
		<a href='https://www.tekscan.com/'>Tekscan</a> builds flexible wearables to map motion to some healthcare applcation\
	</li>\
	<li>\
		The <a href='https://www.myo.com/'>Myo</a> band was a promising technology that senses electrical signals during muscle contraction \
		to detect arm movements and finger gestures.\
	</li>\
	<li>\
		<a href='http://goglove.io/'>GoGlove</a> is more in-line with what I was imagining for a touchable music player\
	</li>\
	<li>\
		For bulk movement gestures, <a href='https://en.wikipedia.org/wiki/Passive_infrared_sensor'>PIR</a> sensors can be used to \
		low resolution sound manipulation, or on/off audio playback. You can actually <a href='https://www.amazon.com/Motion-Activated-Player-Microphone-Recordable/dp/B01MT17BUL/ref=sr_1_5?ie=UTF8&qid=1513611531&sr=8-5&keywords=PIR+sensors+audio'>\
		buy</a> these on Amazon.\
	</li>\
</ul>"

var background_hackers_01 = 
"You can go to instructables and peruse the <i>hundreds</i> of hacker projects that combined something human (touch, motion) \
to music or art. I found these quite interesting: <a href='http://www.instructables.com/id/Touch-Sensitive-Musical-Painting/'>Musical Paint</a>, \
<a href='http://www.instructables.com/id/Make-Your-Own-Simple-Theremin/'>Theremin</a> (one project out of many), and \
<a href='http://www.instructables.com/id/MIDI-Arduino-Drums/'>Drums</a>. \
A highlight from MAS863 is <a href='http://fab.cba.mit.edu/classes/863.12/people/calisch/'>Sam Calisch</a> work in developing a \
somewhat working foot pad with multi-plexed transmit and received pins.\
<br>\
Finally, <a href='https://en.wikipedia.org/wiki/Imogen_Heap'>Imogen Heap</a> has garnered tremendous attention and gained momentum \
with the development of her motion controlled mixer."

var background_velostat_01 = 
"The image above is a general schematic on how to sense pressure using any capacitive/resistive \
fabric element. One typically used in hacker projects is <a href='http://documents.staticcontrol.com/pdf/2004.pdf'>velostat</a>. \
However, most fabric laced with <a href='https://www.amazon.com/MG-Chemicals-Conductive-Coating-Aerosol/dp/B008OA931A/ref=sr_1_1?ie=UTF8&qid=1513729648&sr=8-1&keywords=conductive+carbon+paint+spray'>conductive carbon<a> \
will do. The main layers are conductive traces sandwiching the layer of fabric. The materials I plan to use are \
conductive fabric, thin film copper traces, and a flexible plastic substrate like mylar or epoxy sheets."

var background_velostat_02 =
"Ideas going forward are to: <br>\
<ul>\
<li>Use a vinyl cutted stencil to layer conductive paint or <a href='https://www.amazon.com/MG-Chemicals-Conductive-Coating-Aerosol/dp/B008OA931A'>spray paint carbon</a></li>\
<li>Look into conductive <a href='https://www.sparkfun.com/products/10867'>fabrics</a></li>\
<li>Look into conductive <a href='https://www.amazon.com/s/field-keywords=MG+Chemicals+Carbon+Print'>inks</a></li>\
<li>Look into molded conductive traces using polymer gels with high salt content (conductivity)\
<br>\
Check out <a href='https://www.voxel8.com/'>Voxel8</a> on this technology</li>\
</ul>\
Interesting methods include:<br>\
<ul>\
<li>CNC emboidery and knitting <a href='http://www.brother-usa.com/homesewing/ModelDetail.aspx?ProductID=SE400'>machine</a></li>\
<li>Using a stencil and layering conductive traces</li>\
<li>CNC molds and pour conductive polymers (with spiked carbon or NaCl) to create traces and pads</li>\
</ul>"

var background_velostat_new_model =
"One question I have is how to bond the multiple layers together for fabric pressure sensing. The adhesive on copper films are not completely reliable as conductive traces, and laminating \
these together crinkle when bent and produce a fake feel to the material. In order to reduce the layers, I created a design in which the input and output traces are woven in a maze like pattern such that \
if the fabric is placed on top, the resistant is measured laterally, instead of through the material. Therefore the only layers is the substract with traces and a layer of fabric on top.\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp; The images to the right are the prototypes made in the <a href='./_week11/index.html'>Inputs Project</a>. The traces were cut using a vinyl cutter, and the resistant changes \
were simply measured through a voltage divider. As more pressure is applied, the gaps in the fabric thread increase decreasing the overall resistance and weighting more of the voltage across the \
resistor divider."

/****************/
/*** PROGRESS ***/
/****************/
var goal_text_01 = 
"I want to create a more intimate feel between a music artist and the music that is being produced. The examples above have shown that we communicate our desire to control music through our hands, and sometimes, feet. So \
in order to merge the two concepts of control and music I plan to make... "

var goal_text_02 = 
"A <a href='https://www.google.com/search?q=DJ+set&rlz=1C1CHWA_enUS634US634&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi7x8j3jZLYAhUq6oMKHdFQDuYQ_AUICygC&biw=1304&bih=628'>DJ set</a> \
where you touch your fingers or tap your feet to modulate musical effects. I want to emphasize that this work will <strong><i>not</i></strong> be a music synthesizer, but a music production workflow in which an artist \
can playback and manipulate pre-existing songs, and merge multiple songs into a concerted track."

/****************/
/*** PROGRESS ***/
/****************/

// FLEXIBLE HAND FOOT MODEL
var progress_sketching = 
"I wanted a some what accurate outline of my hand/foot so I physically outlined them \
and scanned them into an illustrative editor. A few points and liberal use of \
<a href='http://www.automotiveillustrations.com/tutorials/adobe-illustrator-paths-pen-tool.html'>\
bezier</a> curves and the outlines were finally made in a vector (cuttable) format."

var progress_vinyl_cut_explanation =
"The main components for the hand/foot pressure sensor are: <br>\
<ul>\
	<li>Traces for each sensor pad within the bounds of the outline<br>\
		<ul>\
			<li>VCC and GND nodes are shared for each sensor</li>\
			<li>For simplicity, each pressure pad will be sensed through a voltage division against a 1 kOhm resistor (empirically determined for greatest dynamic range</li>\
			<li>To maintain a 2D topology, 0 Ohm resistors were used between each pad and its signal pin since VCC and GND traces overlap</li>\
		</ul>\
	</li>\
	<li>Pads located where the pressure sensing will occur</li>\
	<li>A covering, taking into consideration the resistors extruded from the surface. This covering will be later used as the mold covering for these cutouts.</li>\
	<li>The overall cost of this construction, given the dimension used, would roughly amount to: \
		<ul>\
			<li>Mylar/Epoxy backing - ~<strong>25&cent;</strong> per 8x12'' sheet</li>\
			<li>Copper sheets - ~<strong>$1 - $10</strong> per 8x8'' sheet (depending on quality)</li>\
			<li>Fabric - go cut your hand-me-down t-shirt. <strong>Free</strong></li>\
		</ul>\
	</li>\
</ul>"

// CIRCUITS
var progress_circuits_01 =
"Requirements for microcontroller:\
<ul>\
	<li>ATmega328P microprocessor with ISP header</li>\
	<li>9V Battery with current limitor and 5V voltage regulator (a switch was optionally added)</li>\
	<li>20MHz external clock</li>\
	<li>Indicating and debugging LEDS</li>\
	<li>BLE HM-10 female header pins</li>\
	<li>Right angle male pins for sensor input</li>\
	<li>(optionally) A Hall Effect sensor, to use the extra analog pin</li>\
</ul>"

var progress_microcontroller_cost =
"The bulk of the cost for manufacturing this board, ironically, doesn't come from the board itself, but from the bluetooth module that is added \
as a daughter board. The <a href='https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=HM-10'>HM-10 module</a>, which has been commoditized to an item on Amazon, \
is roughly ~<strong>$10</strong>. All other components go for cents to dollars excluding the battery, which again ironically isn't part of the board itself. Overall, I would conservatively \
say this board would cost ~<strong>$15-20</strong> if all pieces were included."

var progress_circuits_02 =
"<strong><i>All things go!</i></strong>"

var progress_crimping =
"There are great online <a href='https://support.bantamtools.com/hc/en-us/articles/115001656913-Engraving-Bit-Isolation-Milling''>\
tutorials</a> that go about explaining their frustration \
over pre-packaged connectors, although convenient, that don't fit a specific design specification, \
whether that is length, number of pins, pitch of pins, etc. So many hardcore hackers have gone to fully \
crimping their own female/male connectors using easily accesible wire cutters and crimpers.<br>\
Things you need for this process: \
<ul>\
	<li>Ribbon cable or any type of <a href='https://learn.adafruit.com/wires-and-connections/wire-guages'>AWG wires</a> \
	between 15-30 (22 is most common for breadboards, 28 for 0.05'' pitch typically found in ribbon cables). \
	Cables are relatively cheap if bought in bulk, otherwise they are a ~dollars per feet.</li>\
	<li>Dupont connectors. Conveniently find on <a href='https://www.amazon.com/gp/product/B014YTPFT8/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1'>\
	Amazon</a> for <strong>$16</strong> for 635 peices.</li>\
	<li>Crimpers, can also be found on <a href='https://www.amazon.com/gp/product/B00OMM4YUY/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1'>\
	Amazon</a> for <strong>$15-30</strong>.</li>\
</ul>"

var progress_microcontroller_software = 
"The job for the microcontroller is to relay the voltage change across the pads as a function of applied pressure. \
Afterwards, these signals will be packaged and sent to the HM-10 Bluetooth module via USART (details can be found \
in the <a href='../_week13/index.html'>networking/communication project</a>. \
<br>\
&nbsp;&nbsp;&nbsp;&nbsp; To abstract some of the nitty-gritty register bit flipping and back and forth between the ATmega328p's Tx/Rx and ADC register \
two file headers were written, namely a library for initializing USART and the ADC with easy to use helper functions. \
The main body of the code sequentially takes in each analog pin's value (10 bit, 0-1023), maps it between 0-99, and concatenates \
these values into a character array delimited by ','. This formatted string (using <a href='https://www.tutorialspoint.com/c_standard_library/c_function_sprintf.htm'>sprintf</a>) \
is then simply transported through Tx and received by the HM-10 module that then emits this data as a bluetooth signal to the server (more about the server below).\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp; Before getting the code running, the ATmega328p low byte fuse was set to 0xFF (no clock division, external clock >8Mhz, and slow start up and power down cycles), \
to enable the external 20MHz oscillator. Afterwards the code was flashed using <a href='http://www.atmel.com/microsite/atmel-studio/'>AtmelStudio7</a> (only on Windows), which I highly recommend \
as an IDE instead of <a href='https://www.arduino.cc/en/Main/Software'>arduino</a> as there is little 'middleware' between the programmer and hardware."

// MOLDING
var progress_molding_CAD = 
"The cover layer for the hand and feet were extruded while taking into consideration the thickness of the circuit components, which gives these small indents in the 3D model. \
These indents in the 3D model should fit nicely on top of the vinyl cut hand/feet, therefore the model was inverted before making the mold."

var progress_molding_milling =
"I used <a href='https://www.reynoldsam.com/product/oomoo/'>Oomoo</a> to cast the negative mold, similarly done in the previous \
<a href='../_week8/index.html'>molding and casting</a> project. Mixing the components and bubbles aren't really an issue for this material given the \
relatively long pot life (~25 min) and low viscosity."

var progress_casting_01 =
"Bubbles <i>suck</i> when you go to more viscous and hard materials. Hardness is measured on the <a href='https://www.smooth-on.com/page/durometer-shore-hardness-scale/'>Shore Hardness<a/> scale, \
and since I want a mold material closely resembling flesh/muscle I went to the <a href='https://www.reynoldsam.com/product/sorta-clear/'>Sorta-clear</a> series from Reynolds."

var progress_casting_02 = 
"I went from a hardness of A37 (as stiff as an old school pencil eraser) to 00-30 (like a hard gummy bear candy). Bubbles dramatically reduced as I went to \
softer materials, but I traded the transparency of the mold and feel."

var progress_casting_03 = 
"I tried 3 types of silicone casters of differing hardness:\
<ul>\
	<li><a href='https://www.reynoldsam.com/product/sorta-clear/'>SortaClear37</a> (hardness A37)</li>\
	<li><a href='https://www.reynoldsam.com/product/dragon-skin-fx-pro/'>DragonSkin FX</a> (A10)</li>\
	<li><a href='https://www.reynoldsam.com/product/ecoflex/'>EcoFlex<a/> (00-30)</li>\
</ul>"


// LASER CUT
var progress_laser_cut = 
"I wanted to stylize the hand/feet DJ pads by providing a DJ-like platform set. The pressure sensitive circuit \
is only ~5 mil (0.13 mm) so engraving a depression in acrylic using a laser cutter seemed like the appropriate choice.\
<br>\
I used an epilog printer with the settings below. Although the settings may be a bit high for typical laser cutters, these were tested to get the minimum \
cut desired.\
<br>\
<div style='float: left; width:50%'>\
	<ul>\
		<li> Raster\
			<ul>\
				<li><strong>Speed</strong>: 50%</li>\
				<li><strong>Power</strong>: 100%</li>\
			</ul>\
		</li>\
	</ul>\
</div>\
\
<div style='float: right; width:50%'>\
	<ul>\
		<li>Cut\
			<ul>\
				<li><strong>Speed</strong>: 15%</li>\
				<li><strong>Power</strong>: 100%</li>\
				<li><strong>Frequency</strong>: 250 Hz</li>\
			</ul>\
		</li>\
	</ul>\
</div>"

// SERVER CODE
var progress_server_01 =
"Building the server and UI goes beyond this course, as in, it isn't important with respects to HowToMake, as it's entirely software \
which isn't the heart of this project. However, there are some interesting notes when creating a UI that communicates with real-world devices \
which I will detail below."

var progress_server_demo_explanation_01 =
"The server connects to 2 bluetooth devices (The HM-10 modules) that are relaying information from the hand and foot pads. Once (at least) 5 songs are loaded (either through the top upload icon or individually) into the front-end \
the data from the devices are parsed and sent from the back-end using sockets. Here is a brief description of the data: \
<ul>\
	<li><strong>Data 1</strong>: palm pressure. This controls the tempo of the current song (loudess of the 5)</li>\
	<li><strong>Data 2-6</strong>: finger pressure. Each finger controls one of the input songs (1-5), respectively. The amount of pressure translates to the volume of the song (0 - 100 max). \
	Each song has 5 properties:\
		<ul>\
				<li>Volume</li>\
				<li>Tempo</li>\
				<li>3 effects (explained below)</li>\
			</ul>\
	</li>\
	<li><strong>Data 7-9</strong>: foot pressure. The three pressure pads on the foot control the effects of the song. The effects are :\
		<ul>\
			<li>lowpass</li>\
			<li>highpass</li>\
			<li>notch</li>\
		</ul>\
	</li>\
</ul>"

var progress_server_demo_explanation_02 =
"The UI (client-side code) takes advantage of the <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'>Web Audio</a> \
API that comes with HTML5. The web audio interface utilizes nodes which stream data between each other. For most simple cases, these nodes flow \
sequentially, e.g. from an <a href='https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode'>audio source</a>, to some <a href='https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode'>effects node</a>, \
maybe to a <a href='https://developer.mozilla.org/en-US/docs/Web/API/GainNode'>gain node</a>, and finally emitted to the destination which is the physical audio speakers on your computer, phone, etc. \
When each node is initialized and appropriately connected, their effects and functions can be altered asynchronously which offers a great range of flexibility when interacting with the back-end.\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp; The back-end consist of <a href='https://expressjs.com/'>express framework</a> built on node, \
<a href='https://github.com/sandeepmistry/noble'>NOBLE</a> for BLE connectivity, and <a href='https://socket.io/'>sockets</a> for quick and asynchronous communication to the front end."

var progress_server_demo_explanation_03 =
"Sample code can be found in my previous <a href='../_week13/index.html/'>interface and communication</a> project, but a summary on the data pipeline is briefly summarized here. \
<br>\
<ol>\
	<li>When the page is loaded, the backend continously searches for bluetooth devices, namely BLE1 &amp; BLE2 (programmed via the microcontroller), and stores a list of detected devices</li>\
	<li>When the user clicks 'connect', a callback is initiated which connects to the peripherals BLE1 &amp; BLE2, which calls another callback that looks for services, namely 0xFFE0, and then a final callback initializes an \
	event listerner on the characteristic which converts and stores the hex data.</li>\
	<li>The data is repackaged into <a href='https://www.w3schools.com/js/js_json_intro.asp'>JSON</a> and emitted via a socket to the client-side.</li>\
	<li>A socket on the client-side listens to the opened socket from the server and consumes the JSON data. The JSON data is parsed into the values that then effect the music (as shown in the flowchart above)</li>\
	<li>Each audio file (max of 5) are manipulated based on the listened data. The attributes <i>.gain.value</i>, <i>.filter.type</i>, and <i>filter.frequencey.value</i> are set accordingly.</li>\
	<li>Purely as an aside. Although the data pipeline seems straightforward and simple to paraphrase, the amount of data handling and duplicate streams (2 devices, 9 data points, 5 audio tracks, 1 audio source) \
	can get overwhelming to code purely in arrays or dictionaries (alghough tempting to implement at first). I followed a few discussions on creating objects using Javascript, and <a href='https://davidwalsh.name/javascript-objects-deconstruction'>\
	David Walsh</a> gives a nice introduction and tip in creating them. In conclusion, creating objects helped, and giving objects robust functions and callbacks with data checking is the first step in utilizing \
	<a href='https://en.wikipedia.org/wiki/Separation_of_concerns'>separation of concerns</a>.</li>\
</ol>"

var TEXT = [

	// PAST WORK
	past_work_01+" "+past_work_02,

	// INSPIRATION
	inspiration_bebop,
	inspiration_elektric,
	inspiration_DJset,
	inspiration_nextGenDJ,

	// BACKGROUD
	// - industry
	background_industry_01,
	// - Sam's work
	background_hackers_01,
	// - velostat
	background_velostat_01,
	background_velostat_02,
	background_velostat_new_model,

	// GOAL
	goal_text_01,
	goal_text_02,

	// PROGRESS
	// - vinyl cutting
	progress_sketching,
	progress_vinyl_cut_explanation,
	// - circuit 
	progress_circuits_01,
	progress_microcontroller_cost,	
	progress_circuits_02,
	progress_crimping,
	// -software
	progress_microcontroller_software,
	// - molding
	progress_molding_CAD,
	progress_molding_milling,
	progress_casting_01,
	progress_casting_02,
	progress_casting_03,
	// - laser cutting
 	progress_laser_cut,	
 	// - server
 	progress_server_01,
 	progress_server_demo_explanation_01,
 	progress_server_demo_explanation_02,
 	progress_server_demo_explanation_03

	// FINISH

]