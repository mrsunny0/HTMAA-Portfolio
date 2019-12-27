var text1 = 
"Much like in the <a href='../_week4/index.html#anchor-3Dlink'>3D printing</a> module, I decided to mold \
something biological. However, instead of proteins I decided to print DNA itself. The DNA model comes from a \
<a href='http://www.rcsb.org/pdb/explore/explore.do?structureId=5vy6'>self-assembling D-form DNA crystal lattice\
</a> with X-Ray diffraction reconstruction. I took this data, modeled its surface geometry and converted it \
into an <i>.stl</i> format for milling. More information on protein/DNA model reconstruction and exporting can \
be read <a href='../_week4/index.html#PDBformat'>here</a> in my previous work."

var text2 =
"I used Fusion 360 CAM workflow to translate the DNA file into a milling job. Fusion has a wealth of CAMing \
options that are nicely explained in this <a href='https://www.youtube.com/watch?v=n-Pgk33W8N0&t=1336s'>video</a> \
which highlights the pros and cons of different milling techniques such as contour, scallop, pencil .etc. Rough \
versus finish mills are simply controlled by changing milling parameters such as past-depth, step-over, \
and z-rate.\
<br>\
The CAM job was processed as g-code (<i>.nb</i>) for the <a href='https://www.bantamtools.com/'>OtherMill</a>, \
however unfortunately the 1.5'' block was too high for the spindle clearance."

var text3 = 
"So moving on to the <a href='http://www.shopbottools.com/'>ShopBot</a>... vCarve Cut3D was simple to use \
to create milling tool paths. One major detail to consider is the machining margin, or the extra milled area \
around the silhouette of the object. The toolpath was barely at the edge of the wax."

var text4 = 
"I feel like molding is like Play-Doh for adults. It was quite fun to play around it. A little \
technique that I learned is to bang the mold on the table after it's been casted to release any remaining \
air bubbles, also to move the liquid around into the smaller nooks of the cast."

var text5 = 
"The <a href=https://www.reynoldsam.com/product/oomoo/'>Oomoo(25)</a> mold came out nicely, with \
as much details as the negative cast itself. Looking at the spec-sheet, Oomoo can withstand temperatures from \
-65F to 400F, so I decided to cast something hot, like melted agarose. \
A common mold in biological labs are agarose gels used for DNA separation. \
So I thought it would be fitting to run a DNA gel on a DNA mold."

var text6 =
"Simply, a DNA gel consist of agrose in a buffered salt solution with a DNA stain. The salt content allows the \
gel to be externally charged to move electrically active species. DNA is negatively charged due \
to it's phosphate backbone (PO<sub>4</sub><sup>3-</sup>), so applying a voltage through the gel pushes \
DNA towards to positive terminal (cathode). The agarose porosity determines how quickly the DNA migrates, thereby \
fractionating different sized DNA into bands. Extrapolating this concepts allows cool techniques for efficient \
and cost-effective <a href='https://en.wikipedia.org/wiki/Sanger_sequencing'>sequencing</a>."

var text7 =
"I wanted to compare the feature quality of 3D FDM printing (using an Ultimaker3) to molding. If the \
milling job is done right, the feature resolution is comparable. However, an advantage of molding is the \
fast turn-around time, and the multiple prints that can be made from a single template. Whereas 3D printing \
is nice for all-round features (and for the lazy)."

var text8 =
"Learned my lesson in vacuum forming. It's quite difficult to vacuum form 3D models if they have \
extruded edges or underbelly surfaces. The thermoformed plastic is impossible to remove once it's wrapped."

var TEXT = [text1, text2, text3, text4, text5, text6, text7, text8]