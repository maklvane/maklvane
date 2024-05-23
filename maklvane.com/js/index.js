document.addEventListener('DOMContentLoaded', (event) => {
  console.log("hello");

  // Slideshow
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  showSlides();

  // Change background color on click
  const colorBox = document.getElementById('changebg');
  const bgChangeHeader = document.getElementById('changebgheader');
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  function changeBackgroundColor(element, colors) {
    return () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      element.style.backgroundColor = randomColor;
    };
  }

  colorBox.addEventListener('click', changeBackgroundColor(colorBox, colors));
  bgChangeHeader.addEventListener('click', changeBackgroundColor(colorBox, colors));

  // Cycle through background images on click
  const bgImage1 = document.getElementById('changeImage');
  const bgImage1Header = document.getElementById('changeImageHeader');
  const bgImage2 = document.getElementById('changeImage2');
  const bgImage2Header = document.getElementById('changeImageHeader2');
  const images1 = [
    'url(images/CaliforniaQuail.jpg)', 
    'url(images/am-nohope-sketch1.jpg)', 
    'url(images/Seagull.jpg)'
  ];
  const images2 = [
    'url(images/nohope-grass.jpg)', 
    'url(images/microcult1-grass.jpg)', 
    'url(images/microcult2-grass.jpg)', 
    'url(images/microcult3-grass.jpg)', 
    'url(images/microcult4-grass.jpg)'
  ];

  function createImageChanger(element, images) {
    let currentIndex = 0;
    return () => {
      element.style.backgroundImage = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    };
  }

  bgImage1.addEventListener('click', createImageChanger(bgImage1, images1));
  bgImage1Header.addEventListener('click', createImageChanger(bgImage1, images1));
  bgImage2.addEventListener('click', createImageChanger(bgImage2, images2));
  bgImage2Header.addEventListener('click', createImageChanger(bgImage2, images2));

  // Change background in smaller image
  const slideshow1 = document.getElementById('slideshow1');
  const slideshow1Buttons = document.getElementsByClassName('slideshow1-button');
  const slides1 = [
    'images/nohope-grass.jpg', 
    'images/microcult1-grass.jpg', 
    'images/microcult2-grass.jpg', 
    'images/microcult3-grass.jpg', 
    'images/microcult4-grass.jpg'
  ];

  function createSlideshowChanger(element, images) {
    let currentIndex = 0;
    return () => {
      element.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    };
  }

  const changeSlideshowImage = createSlideshowChanger(slideshow1, slides1);

  Array.from(slideshow1Buttons).forEach(button => {
    button.addEventListener('click', changeSlideshowImage);
  });
});