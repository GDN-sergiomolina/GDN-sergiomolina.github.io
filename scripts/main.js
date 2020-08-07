// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
	AOS.init( {
    // uncomment below for on-scroll animations to played only once
    once: true  
  }); // initialize animate on scroll library


// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        }
      });
    }
  }
});
	
//$("#pl-motiongraphics").load("portfolio-motiongraphics.html");
//$("#pl-videolyrics").load("portfolio-videolyrics.html");
//$("#pl-videoclips").load("portfolio-videoclips.html");
//$("#pl-otros").load("portfolio-otros.html");
		
});


function click_Vid(){
	document.getElementById("imagen").style.display = "none";
	document.getElementById("video").style.display = "block";
}

function click_Img(id){
	document.getElementById("imagen").style.display = "block";
	document.getElementById("video").style.display = "none";
}

function click_destacados(){
	document.getElementById("imagen").style.display = "none";
	document.getElementById("video").style.display = "none";
}

function tabsImg(evt, img_tabName) {
  // Declare all variables
  var i, img_pillcontent, img_tablinks, img_pillcontentactive;
	
  // Get all elements with class="img_pillcontent" and hide them
  img_pillcontent = document.getElementsByClassName("img_pillcontent");
  for (i = 0; i < img_pillcontent.length; i++) {
    img_pillcontent[i].style.display = "none";
  }

  // Get all elements with class="img_tablinks" and remove the class "active"
  img_tablinks = document.getElementsByClassName("img_tablinks");
  for (i = 0; i < img_tablinks.length; i++) {
    img_tablinks[i].className = img_tablinks[i].className.replace(" activo", "");
  }

  // Get all elements with class="img_pillcontent-active" and remove the word "active"
  img_pillcontentactive = document.getElementsByClassName("img_pillcontent-active");
  for (i = 0; i < img_pillcontentactive.length; i++) {
    img_pillcontentactive[i].className = img_pillcontentactive[i].className.replace("-active", "");
  }
  document.getElementById(img_tabName).className += "-active";

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(img_tabName).style.display = "block";
  evt.currentTarget.className += " activo";
}

function tabsVid(videvt, vid_tabName) {
  // Declare all variables
  var i, vid_pillcontent, vid_tablinks, vid_pillcontentactive;
	
  // Get all elements with class="vid_pillcontent" and hide them
  vid_pillcontent = document.getElementsByClassName("vid_pillcontent");
  for (i = 0; i < vid_pillcontent.length; i++) {
    vid_pillcontent[i].style.display = "none";
  }

  // Get all elements with class="vid_tablinks" and remove the class "active"
  vid_tablinks = document.getElementsByClassName("vid_tablinks");
  for (i = 0; i < vid_tablinks.length; i++) {
    vid_tablinks[i].className = vid_tablinks[i].className.replace(" active", "");
  }

  // Get all elements with class="vid_pillcontent-active" and remove the word "active"
  vid_pillcontentactive = document.getElementsByClassName("vid_pillcontent-active");
  for (i = 0; i < vid_pillcontentactive.length; i++) {
    vid_pillcontentactive[i].className = vid_pillcontentactive[i].className.replace("-active", "");
  }
  document.getElementById(vid_tabName).className += "-active";
	
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(vid_tabName).style.display = "block";
  videvt.currentTarget.className += " active";
}