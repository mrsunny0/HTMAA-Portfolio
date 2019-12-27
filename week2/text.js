var text1 =  
"I admire the freestyle drawing and command-line interface of <a href='https://www.rhino3d.com/'>Rhino\
</a>, a common 2D/3D drawing software typically used by architects and artists. So naturally I got \
involved with <a href='http://www.grasshopper3d.com/'>Grasshopper</a>, a block-diagram interface that \
allows (to me) an elegant approach for parametric design usually acheived by more frequently used software's \
from Autodesk and Autocad (e.g. <a href='https://www.autodesk.com/products/fusion-360/overview'>Fusion360</a>). \
The adjacent image was my free-flow scratch work for parametrically modeling a construction kit that allows \
for user defined metrics for shape dimension, types of shapes, and cutout width. The bottom image is a more organized \
	version that lists out the steps required to make a versatile construction kit."  

var text2 = 
"Many parameterizations grew out of my design. They were<br> \
<br>\
<ul>\
	<li>Shape type (i.e. 3,4,5 sided shapes)</li>\
	<li>Shape radii</li>\
	<li>Cutout width (to lock shapes together)</li>\
	<li>Placement of cutout width on a shape's edge (image has it at 0.5, middle)</li>\
	<li>Arc length and width for angled shapes</li>\
	<li>Placement of shape and rotation on the arc edge (image has it at 0.5, middle; shape angle was arbitrarily set at 45degrees)</li>\
</ul>\
Each parameter was conveiently paramterized by scale bars on the grasshopper UI. Another grasshopper workflow \
was made such that each object would be placed in the layout seen to the right, without having to one-by-one \
manipulate the grasshopper construction kit and organize the shapes manually."

var text3 = 
"The shapes were easily cut out with an Epilog laser cuter. The laser settings were <b>Speed:20</b>, \
<b>Power:75</b>, and <b>Frequency:200</b>. Lastly, to consider the kurf, or the non-negligble laser radii \
that is added to the width of the cuts, the grasshopper work-flow was modified to offset <i>all</i> shapes \
by the kurf size. Hence, the dimension most effected by the kurf, the cutout width, was modified, \
along with the entire shape (which doesn't effect the overall construction kit, and made the grasshopper \
design simplier without much redo-ing). Altogether, from previous experiments the optimal cutout width, \
including the kurf, was <b>4.2mm</b>."

var text4 = "As an added bonus I included spokes and holes in my construction kit design allowing the \
shapes to add on top of one another and spin. I had no specific final design in mind, so I basically made a \
cardboard monster made out of polygon shapes."

var TEXT = [text1, text2, text3, text4]