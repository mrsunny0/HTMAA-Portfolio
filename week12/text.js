var text1 = 
"The theremin is an unique electronic instrument that uses a set of antennas to track the position of the thereminist \
which thereby controls the notes played by the instrument. To behavior of the theremin was incoporated into software \
which is nicely done in this <a href='http://mdn.github.io/violent-theremin'>demonstration</a> \
(github <a href='https://github.com/mdn/violent-theremin'>source</a>). This is easily possible with the new implementation of \
<a href='https://www.w3schools.com/html/html5_intro.asp'>HTML5</a> and its \
<a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API'>Webaudio API</a> which relies on front-end \
javascript to establish nodes that import sound, analyze the frequencies, and spit back music to the appropriate \
audio stream."

var text2 = 
"I implemented a web audio UI by setting up an <a href='https://expressjs.com/'>Express</a> app that takes in a user specified audio file, performs an FFT, and sends the audio signal \
along with the data to a webpage. The graph was plotted with the <a href='https://gionkunz.github.io/chartist-js/'>\
Chartist</a> API. The code is detailed below, but in summary: create an audio node, connect to an analyzer node, \
and finally send the audio and data whatever data buffer streams that are appropriate."

var text3 = 
"The final thing to do is to take serial data from a microcontroller and use those values to interact with the \
music app. For fast and secure connections, a socket was established between the express app and the served web page. \
Data was read through serial using a FTDI cable and parsed using <a href='https://github.com/node-serialport/node-serialport'>\
serialport</a>. Unfortunately there was difficulty parsing the '&#92;n&#92;r' into a single line reading, so \
an additional module <a href='https://nodejs.org/api/readline.html'>readline</a> was imported to create an interface \
that properly parsed each serial command into a single line."

var TEXT = [text1, text2, text3]