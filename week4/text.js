var text1 = 
"Protein engineering is as much a quantitative science as it is qualitative. As in, much of our current \
observations of protein interactions and protein-protein dyanmcis are visual. To aid in this visual process \
I thought it would be an interesting project to 3D print a structurally relevant protein, in particular \
a class of <a href='https://en.wikipedia.org/wiki/Chaperonin'>Chaperonins</a>. Chaperonins are proteins \
that exhibit a cage-like structure to provide favorable conditions for correct protein folding (imagine a \
small fab machine that takes in peptide chains and spits out working proteins). The specific protein I used \
is called <i>Methanococcus marapaludis chaperonin</i> or or <a href='https://www.rcsb.org/pdb/explore/explore.do?structureId=3j3x'>\
Mm-Cpn</a> for short."

var text2 = 
"Protein structures are 3D-represented using the PDB File Format, which is an XML like representation of amino acid coordinates \
derived from X-ray diffraction or NMR studies. A lot of other meta information is contained in PDB file formats such as \
experimental conditions, biomolecule data such as thermal constants, and others. Using a python script provided by <a href='https://pymol.org/2/'>\
Pymol</a>, the PDB file format was converted to <i>.COLLADA</i>, and finally using <a href='http://www.meshlab.net/'>MeshLab\
</a> to create an <i>.STL</i> file."

var text3 = 
"The print was done on the Stratasys Objet Eden 260VS 3D printer from the CBA shop. Because of the spherical shape of the \
object and the complex curvature and ridges of the protein there was a large amount of support material, to the point that \
the object wasn't readily recognizable. A few minutes of meticulous water jetting to blast away the excess material, \
but also not to destroy the small details of the object, was enough to realize the beauty of the 3D print."

var text4 = "While the prints were running, I tested out the <a href='https://www.3dsystems.com/shop/sense'>Sense(2) 3D \
Scanner</a>. Although I may have looked funny while doing it, I intended to 3D scan my foot and hand in \
order to import a 3D rendering of my toes and fingers. For a later project I imagine creating slip-on \
'exo-skeleton' finger/toe casings that have embedded sensors in them. The idea is to have these wearable pieces \
virtually control a peripheral operation, such as turning on/off a remote electronic device, to something artsy as \
playing an instrument without touching the actual instrument. More thoughts later."

var TEXT = [text1, text2, text3, text4]