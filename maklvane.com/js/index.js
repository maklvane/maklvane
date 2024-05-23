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
    const colors1 = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

    const changeBackgroundColor = (element, colors) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return() => {
          element.style.backgroundColor = randomColor;
        }
    };
    
    // Add the click event listener to the element
    colorBox.addEventListener('click', changeBackgroundColor(colorBox, colors1));
    bgchangeheader.addEventListener('click', changeBackgroundColor(colorBox, colors1))

    
  
  //Cycle through bg images on click
  
    // select element
    const bgimage1 = document.getElementById('changeImage');
    const bgimage1header = document.getElementById('changeImageHeader')

    const bgimage2 = document.getElementById('changeImage2');
    const bgimage2header = document.getElementById('changeImageHeader2')
    
  
    const images1 = ['url(images/CaliforniaQuail.jpg)', 'url(images/am-nohope-sketch1.jpg)', 'url(images/Seagull.jpg)'];
    const images2 = ['url(images/nohope-grass.jpg)', 'url(images/microcult1-grass.jpg)', 'url(images/microcult2-grass.jpg)', 'url(images/microcult3-grass.jpg)', 'url(images/microcult4-grass.jpg)'];
  
    //parameters are "element"=the defined div "images"=the image array defined
    const changeImage = (element, images) => {
      let currentIndex = 0;
      return () => {
          element.style.backgroundImage = images[currentIndex];
          currentIndex = (currentIndex + 1) % images.length;
      };
    };
      
    //First Section
    bgimage1.addEventListener('click', changeImage(bgimage1, images1));
    bgimage1header.addEventListener('click', changeImage(bgimage1, images1));
    
    //Second Section
    bgimage2.addEventListener('click', changeImage(bgimage2, images2));
    bgimage2header.addEventListener('click', changeImage(bgimage2, images2));
  
  
  });