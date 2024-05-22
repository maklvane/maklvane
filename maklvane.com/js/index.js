document.addEventListener('DOMContentLoaded', (event) => {

//console log
console.log("hello");

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//change color on click

  // Select the element
  const colorBox = document.getElementById('changebg');
  const bgchangeheader = document.getElementById('changebgheader')
  
  // Define the function that changes the background color
  const changeBackgroundColor = () => {
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      colorBox.style.backgroundColor = randomColor;
  };
  
  // Add the click event listener to the element
  colorBox.addEventListener('click', changeBackgroundColor);
  bgchangeheader.addEventListener('click', changeBackgroundColor)

//Cycle through bg images on click

  // select element
  const bgimage1 = document.getElementById('changeImage');
  const bgimage1header = document.getElementById('changeImageHeader')

  const images1 = ['url(images/CaliforniaQuail.jpg)', 'url(images/am-nohope-sketch1.jpg)', 'url(images/Seagull.jpg)'];

  //parameters are "element"=the defined div "images"=the image array defined
  const changeImage = (element, images) => {
    let currentIndex = 0;
        
        return () => {
            element.style.backgroundImage = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        };
    };
    

  bgimage1.addEventListener('click', changeImage(bgimage1, images1));
  bgimage1header.addEventListener('click', changeImage(bgimage1, images1));


});