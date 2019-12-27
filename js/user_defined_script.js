var weeks = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8', 'week9', 'week10', 'week11', 'week12', 'week13', 'week14', 'week-final']
var weekOBJ = [WEEK1, WEEK2, WEEK3, WEEK4, WEEK5, WEEK6, WEEK7, WEEK8, WEEK9, WEEK10, WEEK11, WEEK12, WEEK13, WEEK14, FINAL]

//-----------------------------------------------------------------------------//
//                           CHANGE PHOTO HEADING                              //
//-----------------------------------------------------------------------------//
var changePhotoHeader = function(week, weekJS, dir) {
  var photoHeader = "#photo-header"
  var textHeader = "#text-header"
  var detailslHeader = "#details-header"
  var linkHeader = "#link-header"

  var ext = '.png'
  var image_src = dir + "/" + week + "/content-description/cover_image" + ext
  $(photoHeader).on('load', function() {
    $(this).width(300).height(300)
  })
  $(photoHeader).attr('src', image_src)
  $(photoHeader).attr('width', '100%')

  var link = dir + "/" + week + "/index.html"
  $(linkHeader).attr('href', link)

  $(textHeader).html(weekJS.pageHeading)
  $(detailslHeader).html(weekJS.secondaryText)
}    

// WARNING, depends on earlier bootstrap and jquery (3.~). 
// current version uses bootstrap 4.0, not compatible
var createCarousel = function(weeks, weekJS, dir) {
  // reference from: https://v4-alpha.getbootstrap.com/components/carousel/
  // NOTE: use bootstrap >4.0
  var carouselID = "#carouselMain"
  
  // add indicators
  var carouselIndicators = $("<ol>", {
    class : 'carousel-indicators'
  })
  // specify indicator size
  var height = 20+"px"
  var width = height
  weeks.forEach(function(week, i) {
    var cls = i === 0 ? 'active' : ""
    carouselIndicators.append($("<li>", {
      class : cls,
      "data-target" : carouselID,
      "data-slide-to" : i.toString(),      
      height : height + "px",
      width : width + "px",
      style : "height:"+height+";" +"width:"+width+";"+"border-radius:50%"
    }))
  })

  // add carousel container (inner)
  var carouselInner = $("<div>", {
    class : "carousel-inner",
    role : "listbox"
  })
  // shift weeks in a random position, but still in order
  // however, final is still last
  // finalW = weeks.pop()
  // randWeeks = weeks.concat(weeks.splice(0, Math.round(Math.random() * (weeks.length-1))), finalW)
  // console.log("week order:", randWeeks, randWeeks.length)
  // add content per week to carousel
  weeks.forEach(function(week, i) {
    var cls = i === 0 ? 'active' : ''
    // carousel content that gets animated
    var contentDiv = $("<div>", {
      class : "carousel-item" + " " + cls
    })
    
    // set up week specific links and content references
    var ext = ".png"
    var image_src = dir + "/" + week + "/content-description/cover_image" + ext
    var link = dir + "/" + week + "/index.html"
    var mainText = weekJS[i].pageHeading
    var secondaryText = weekJS[i].secondaryText

    // add link and image head
    contentDiv.append(
    $("<a>", {
      href : link
    }).append(
    $("<img>", {
      class : "d-block img-fluid img-circle",
      alt : "",
      src : image_src,
      width : 300,
      height : 300
    })))

    contentDiv.append(
    $("<div>", {
      class : "intro-text"
    })
    .append(
    $("<span>", {
      class : "primary-text",
      html : mainText
    }))
    .append(
    $("<hr>", {
      class : "star-light"
    }))
    .append(
    $("<span>", {
      class : "secondary-text",
      html : secondaryText
    })))

    // append carouselItem to carousel inner
    carouselInner.append(contentDiv)
  })

  // add left and right controls
  // LEFT
  var leftControl = $("<a>", {
    class : "carousel-control-prev",
    href : carouselID,
    role : "button",
    "data-slide" : "prev"
  }).append(
  $("<span>", {
    class : "carousel-control-prev-icon",
    "aria-hidden" : "true",
  }).append(
  $("<span>", {
    class : "sr-only",
    text : "Previous"
  })))

  // RIGHT
  var rightControl = $("<a>", {
    class : "carousel-control-next",
    href : carouselID,
    role : "button",
    "data-slide" : "next"
  }).append(
  $("<span>", {
    class : "carousel-control-next-icon",
    "aria-hidden" : "true"
  }).append(
  $("<span>", {
    class : "sr-only",
    text : "Next"
  })))

  // append all content to carouselDiv
  $(carouselID).append(carouselIndicators)
  $(carouselID).append(carouselInner)
  $(carouselID).append(leftControl)
  $(carouselID).append(rightControl)
}

//-----------------------------------------------------------------------------//
//                             PORTFOLIO CONTENT                               //
//-----------------------------------------------------------------------------//
var addPortfolioContent = function(week, weekJS, dir) { 
  // get the div to contain the portfolio items
  var portfolioItems = "#portfolio-items"         
  
  // create portfolio div
  var contentDiv = $("<div>", {
    class : 'col-sm-4 portfolio-item'
  })

  // create image link item
  var href = dir + "/" + week +"/index.html"
  var link = $('<a>', {
    class : "portfolio-link",
    href : href
  })

  // add effects to image link
  link.append(
    $("<div>", {
      class : "caption"
    }).append(
    $("<div>", {
      class : "caption-content",
    }).append(
    $("<h4>", {
      text : weekJS.pageHeading,
      style : "color: #2C3E50; padding-bottom: 15px"
    })).append(
    $("<i>", {
      class : "fa fa-3x fa-search-plus", //fa-search-plus
      style : "color: #2C3E50"
    })))
  )

  // append image to link
  var ext = '.png'
  var image_src = dir + "/" + week + "/content-description/cover_image" + ext 
  link.append($("<img>", {
    class : "img-centered img-circle",
    src : image_src,
    // style : "border:1px solid black",
    height : 200,
    width : 200,
  }))

  // add div and image link onto html
  contentDiv.append(link)
  $(portfolioItems).append(contentDiv)
}

// create portfolio
var makePortfolio = function(weeks, weekOBJ, dir) {
  // a bit hacky, but ignore final project
  // edit - do not ignore final 
  // weeks.pop()
  // weekOBJ.pop()

  // now add appropriate projects into portfolio grid
  weeks.forEach(function(week, i) {
    addPortfolioContent(week, weekOBJ[i], dir)
  })
}

//-----------------------------------------------------------------------------//
//                                FINAL PROJECT                                //
//-----------------------------------------------------------------------------//
var addFinalProject = function(dir, FINAL) {
  var finalProjectDiv = $('#final-project-content')

  var href = dir + "/week-final/index.html"
  var link = $("<a>", {
    class: "portfolio-link",
    href : href
  })

/*  link.append(
    $("<div>", {
      class : "caption"
    }).append(
    $("<div>", {
      class : "caption-content",
    }).append(
    $("<h4>", {
      text : FINAL.pageHeading,
      style : "color: #2C3E50; padding-bottom: 15px"
    })).append(
    $("<i>", {
      class : "fa fa-3x fa-search-plus", //fa-search-plus
      style : "color: #2C3E50"
    })))
  )*/

  var image_src = dir + "/week-final/content-description/cover_image.png"
  link.append($("<img>", {
    class : 'img-centered img-circle',
    src : image_src,
    height: 300,
    width : 300
  }))

  finalProjectDiv.append(link)
}

//-----------------------------------------------------------------------------//
//                             CUSTOMIZE CONTENT                               //
//-----------------------------------------------------------------------------//
// week specific content
var addContentText = function(textArray) {
  var contentText = $("p.content-text")
  contentText.each(function(i, ptag) {
    $(ptag).html(textArray[i])
  })  
}

//-----------------------------------------------------------------------------//
//                                ABOUT CONTENT                                //
//-----------------------------------------------------------------------------//
// MODIFY ABOUT TEXT
var text1 = 
"My name is George Sun and I am a PhD student in the Bioengineering Department at MIT \
with a Bachelors in Electrical Engineering from UC, Berkeley. I have jumped across \
to discpline after discpline in search of working on exciting and intellectually \
stimulating projects. I have worked on medical imaging, to clean water technology, \
and finally onto wearable sensors for athletic and physical therapy applications."
var text2 = 'This portfolio of projects is inspired from a class at MIT, \
<a href="http://fab.cba.mit.edu/classes/863.17/" style="color: black">MAS.863</a> called \
<i>How To Make (almost) Anything</i>. Which is a motto that sums my work up nicely, I am on an \
adventure to make new things, which spans from anything to everything. Please contact me if \
you are curious about these projects or would like to add your opinions or suggestions for \
future work. Looking foward to making new things.'
var ABOUT = [text1, text2]

var aboutText = $(".about-text")
aboutText.each(function(i, e) {
  $(e).html(ABOUT[i])
})

// top 100 funny words taken from: https://www.alphadictionary.com/articles/100_funniest_words.html
var funnyWords = ["Abibliophobia",
"Absquatulate",
"Allegator",
"Anencephalous",
"Argle-bargle",
"Batrachomyomachy",
"Billingsgate",
"Bloviate",
"Blunderbuss",
"Borborygm",
"Boustrophedon",
"Bowyang",
"Brouhaha",
"Bumbershoot",
"Callipygian",
"Canoodle",
"Cantankerous",
"Catercornered",
"Cockalorum",
"Cockamamie",
"Codswallop",
"Collop",
"Collywobbles",
"Comeuppance",
"Crapulence",
"Crudivore",
"Discombobulate",
"Donnybrook",
"Doozy",
"Dudgeon",
"Ecdysiast",
"Eructation",
"Fard",
"Fartlek",
"Fatuous",
"Filibuster",
"Firkin",
"Flibbertigibbet",
"Flummox",
"Folderol",
"Formication",
"Fuddy-duddy",
"Furbelow",
"Furphy",
"Gaberlunzie",
"Gardyloo!",
"Gastromancy",
"Gazump",
"Gobbledygook",
"Gobemouche",
"Godwottery",
"Gongoozle",
"Gonzo",
"Goombah",
"Hemidemisemiquaver",
"Hobbledehoy",
"Hocus-pocus",
"Hoosegow",
"Hootenanny",
"Jackanapes",
"Kerfuffle",
"Klutz",
"La-di-da",
"Lagopodous",
"Lickety-split",
"Lickspittle",
"Logorrhea",
"Lollygag",
"Malarkey",
"Maverick",
"Mollycoddle",
"Mugwump",
"Mumpsimus",
"Namby-pamby",
"Nincompoop",
"Oocephalus",
"Ornery",
"Pandiculation",
"Panjandrum",
"Pettifogger",
"Pratfall",
"Quean",
"Rambunctious",
"Ranivorous",
"Rigmarole",
"Shenanigan",
"Sialoquent",
"Skedaddle",
"Skullduggery",
"Slangwhanger",
"Smellfungus",
"Snickersnee",
"Snollygoster",
"Snool",
"Tatterdemalion",
"Troglodyte",
"Turdiform",
"Unremacadamized",
"Vomitory",
"Wabbit",
"Widdershins",
"Yahoo"]

// RANDOM CONTACT INFO
var contactInfo = function() {
  var contactID = $("#contact-info")

  // make random phone number
  var phoneNumber = "Phone number: " +
  Math.floor(10*Math.random()).toString() + 
  Math.floor(10*Math.random()).toString() +
  Math.floor(10*Math.random()).toString() + "-" + 
  Math.floor(10*Math.random()).toString() + 
  Math.floor(10*Math.random()).toString() +
  Math.floor(10*Math.random()).toString() + "-" + 
  Math.floor(10*Math.random()).toString() + 
  Math.floor(10*Math.random()).toString() +
  Math.floor(10*Math.random()).toString() +
  Math.floor(10*Math.random()).toString()

  // make fake hostname address
  var rIdx = Math.round(funnyWords.length*Math.random())-1
  hostName = funnyWords[rIdx].toLowerCase()
  var emailContact = "Email: george sun @ " + hostName + " . com"
  
  contactID.after($("<p>", {
    text : emailContact
  }))
  contactID.after($("<p>", {
    text : phoneNumber
  }))
}
contactInfo()

// RANDOM MAP
coordinates = [Math.random()*45, Math.random()*90]
var map = L.map('map').setView(coordinates, 3)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker(coordinates).addTo(map)
    .bindPopup('There is where I am at today')
    .openPopup();

// FONT AWESOME GLYPHS
var faIcons = ["address-book",
"address-book-o",
"address-card",
"address-card-o",
"adjust",
"american-sign-language-interpreting",
"anchor",
"archive",
"area-chart",
"arrows",
"arrows-h",
"arrows-v",
"asl-interpreting (alias)",
"assistive-listening-systems",
"asterisk",
"at",
"audio-description",
"automobile (alias)",
"balance-scale",
"ban",
"bank (alias)",
"bar-chart",
"bar-chart-o (alias)",
"barcode",
"bars",
"bath",
"bathtub (alias)",
"battery (alias)",
"battery-0 (alias)",
"battery-1 (alias)",
"battery-2 (alias)",
"battery-3 (alias)",
"battery-4 (alias)",
"battery-empty",
"battery-full",
"battery-half",
"battery-quarter",
"battery-three-quarters",
"bed",
"beer",
"bell",
"bell-o",
"bell-slash",
"bell-slash-o",
"bicycle",
"binoculars",
"birthday-cake",
"blind",
"bluetooth",
"bluetooth-b",
"bolt",
"bomb",
"book",
"bookmark",
"bookmark-o",
"braille",
"briefcase",
"bug",
"building",
"building-o",
"bullhorn",
"bullseye",
"bus",
"cab (alias)",
"calculator",
"calendar",
"calendar-check-o",
"calendar-minus-o",
"calendar-o",
"calendar-plus-o",
"calendar-times-o",
"camera",
"camera-retro",
"car",
"caret-square-o-down",
"caret-square-o-left",
"caret-square-o-right",
"caret-square-o-up",
"cart-arrow-down",
"cart-plus",
"cc",
"certificate",
"check",
"check-circle",
"check-circle-o",
"check-square",
"check-square-o",
"child",
"circle",
"circle-o",
"circle-o-notch",
"circle-thin",
"clock-o",
"clone",
"close (alias)",
"cloud",
"cloud-download",
"cloud-upload",
"code",
"code-fork",
"coffee",
"cog",
"cogs",
"comment",
"comment-o",
"commenting",
"commenting-o",
"comments",
"comments-o",
"compass",
"copyright",
"creative-commons",
"credit-card",
"credit-card-alt",
"crop",
"crosshairs",
"cube",
"cubes",
"cutlery",
"dashboard (alias)",
"database",
"deaf",
"deafness (alias)",
"desktop",
"diamond",
"dot-circle-o",
"download",
"drivers-license (alias)",
"drivers-license-o (alias)",
"edit (alias)",
"ellipsis-h",
"ellipsis-v",
"envelope",
"envelope-o",
"envelope-open",
"envelope-open-o",
"envelope-square",
"eraser",
"exchange",
"exclamation",
"exclamation-circle",
"exclamation-triangle",
"external-link",
"external-link-square",
"eye",
"eye-slash",
"eyedropper",
"fax",
"feed (alias)",
"female",
"fighter-jet",
"file-archive-o",
"file-audio-o",
"file-code-o",
"file-excel-o",
"file-image-o",
"file-movie-o (alias)",
"file-pdf-o",
"file-photo-o (alias)",
"file-picture-o (alias)",
"file-powerpoint-o",
"file-sound-o (alias)",
"file-video-o",
"file-word-o",
"file-zip-o (alias)",
"film",
"filter",
"fire",
"fire-extinguisher",
"flag",
"flag-checkered",
"flag-o",
"flash (alias)",
"flask",
"folder",
"folder-o",
"folder-open",
"folder-open-o",
"frown-o",
"futbol-o",
"gamepad",
"gavel",
"gear (alias)",
"gears (alias)",
"gift",
"glass",
"globe",
"graduation-cap",
"group (alias)",
"hand-grab-o (alias)",
"hand-lizard-o",
"hand-paper-o",
"hand-peace-o",
"hand-pointer-o",
"hand-rock-o",
"hand-scissors-o",
"hand-spock-o",
"hand-stop-o (alias)",
"handshake-o",
"hard-of-hearing (alias)",
"hashtag",
"hdd-o",
"headphones",
"heart",
"heart-o",
"heartbeat",
"history",
"home",
"hotel (alias)",
"hourglass",
"hourglass-1 (alias)",
"hourglass-2 (alias)",
"hourglass-3 (alias)",
"hourglass-end",
"hourglass-half",
"hourglass-o",
"hourglass-start",
"i-cursor",
"id-badge",
"id-card",
"id-card-o",
"image (alias)",
"inbox",
"industry",
"info",
"info-circle",
"institution (alias)",
"key",
"keyboard-o",
"language",
"laptop",
"leaf",
"legal (alias)",
"lemon-o",
"level-down",
"level-up",
"life-bouy (alias)",
"life-buoy (alias)",
"life-ring",
"life-saver (alias)",
"lightbulb-o",
"line-chart",
"location-arrow",
"lock",
"low-vision",
"magic",
"magnet",
"mail-forward (alias)",
"mail-reply (alias)",
"mail-reply-all (alias)",
"male",
"map",
"map-marker",
"map-o",
"map-pin",
"map-signs",
"meh-o",
"microchip",
"microphone",
"microphone-slash",
"minus",
"minus-circle",
"minus-square",
"minus-square-o",
"mobile",
"mobile-phone (alias)",
"money",
"moon-o",
"mortar-board (alias)",
"motorcycle",
"mouse-pointer",
"music,navicon (alias)",
"newspaper-o",
"object-group",
"object-ungroup",
"paint-brush",
"paper-plane",
"paper-plane-o",
"paw",
"pencil",
"pencil-square",
"pencil-square-o",
"percent",
"phone",
"phone-square",
"photo (alias)",
"picture-o",
"pie-chart",
"plane",
"plug",
"plus",
"plus-circle",
"plus-square",
"plus-square-o",
"podcast",
"power-off",
"print",
"puzzle-piece",
"qrcode",
"question",
"question-circle",
"question-circle-o",
"quote-left",
"quote-right",
"random",
"recycle",
"refresh",
"registered",
"remove (alias)",
"reorder (alias)",
"reply",
"reply-all",
"retweet",
"road",
"rocket",
"rss",
"rss-square",
"s15 (alias)",
"search",
"search-minus",
"search-plus",
"send (alias)",
"send-o (alias)",
"server",
"share",
"share-alt",
"share-alt-square",
"share-square",
"share-square-o",
"shield",
"ship",
"shopping-bag",
"shopping-basket",
"shopping-cart",
"shower",
"sign-in",
"sign-language",
"sign-out",
"signal",
"signing (alias)",
"sitemap",
"sliders",
"smile-o",
"snowflake-o",
"soccer-ball-o (alias)",
"sort",
"sort-alpha-asc",
"sort-alpha-desc",
"sort-amount-asc",
"sort-amount-desc",
"sort-asc",
"sort-desc",
"sort-down (alias)",
"sort-numeric-asc",
"sort-numeric-desc",
"sort-up (alias)",
"space-shuttle",
"spinner",
"spoon",
"square",
"square-o",
"star",
"star-half",
"star-half-empty (alias)",
"star-half-full (alias)",
"star-half-o",
"star-o",
"sticky-note",
"sticky-note-o",
"street-view",
"suitcase",
"sun-o",
"support (alias)",
"tablet",
"tachometer",
"tag",
"tags",
"tasks",
"taxi",
"television",
"terminal",
"thermometer (alias)",
"thermometer-0 (alias)",
"thermometer-1 (alias)",
"thermometer-2 (alias)",
"thermometer-3 (alias)",
"thermometer-4 (alias)",
"thermometer-empty",
"thermometer-full",
"thermometer-half",
"thermometer-quarter",
"thermometer-three-quarters",
"thumb-tack",
"thumbs-down",
"thumbs-o-down",
"thumbs-o-up",
"thumbs-up",
"ticket",
"times",
"times-circle",
"times-circle-o",
"times-rectangle (alias)",
"times-rectangle-o (alias)",
"tint",
"toggle-down (alias)",
"toggle-left (alias)",
"toggle-off",
"toggle-on",
"toggle-right (alias)",
"toggle-up (alias)",
"trademark",
"trash",
"trash-o",
"tree",
"trophy",
"truck",
"tty",
"tv (alias)",
"umbrella",
"universal-access",
"university",
"unlock",
"unlock-alt",
"unsorted (alias)",
"upload",
"user",
"user-circle",
"user-circle-o",
"user-o",
"user-plus",
"user-secret",
"user-times",
"users",
"vcard (alias)",
"vcard-o (alias)",
"video-camera",
"volume-control-phone",
"volume-down",
"volume-off",
"volume-up",
"warning (alias)",
"wheelchair",
"wheelchair-alt",
"wifi",
"window-close",
"window-close-o",
"window-maximize",
"window-minimize",
"window-restore",
"wrench"]

var fakeFontAwe = function() {
  var faList = $('.fa-fake')
  var faLength = faIcons.length
  faList.each(function(i, e) {
    var rIdx = Math.round(faLength * Math.random())
    $(e).addClass(function() {
      return "fa-"+faIcons[rIdx]
    })
  })
}

fakeFontAwe()