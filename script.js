let menuOpen = false;
const mobileNavDrawer = document.getElementById("mobileNavDrawer");

window.onload = () => {
  // When icon is clicked...
  document.getElementById("mobileNavIcon").addEventListener("click", () => {
    //If menu is open, close it...
    if (menuOpen==true){
    mobileNavDrawer.style.display="none";
    } else  {
      mobileNavDrawer.style.display="flex";
    }
    //Toggle the menu state...
    menuOpen = !menuOpen;
    console.log(menuOpen)

  });
}

let picIndex = 1;
showPics(picIndex);

// Next and previous controls
function plusPics(n) {
  showPics(picIndex += n);
}

// Thumbnail image controls
function currentPic(n) {
  showPics(picIndex = n);
}

//Display controls
function showPics(n) {
  let i;
  let pics = document.getElementsByClassName("slideshowPics");
  let dots = document.getElementsByClassName("dot");
  
  if (n > pics.length) {
    picIndex = 1
  }
  
  if (n < 1) {
    picIndex = pics.length
  }

  //Other images won't display when one is showing
  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }

  // Only button connected to image will highlight and changes to next or previous one when button is clicked
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  pics[picIndex-1].style.display = "block";// When cursor is near button, pointer will display
  dots[picIndex-1].className += " active";// Button will highlight depending on what image is displayed
}

function submitMsg(){
				alert("Thank you for your enquiry! We'll be in touch soon.")
}