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

  // Media query
  const mediaQuery = window.matchMedia("(max-width: 767px)");

  // Cycle through background images on click
  const bgImage1 = document.getElementById('changeImage');
  const bgImage1Header = document.getElementById('changeImageHeader');
  const bgImage2 = document.getElementById('changeImage2');
  const bgImage2Header = document.getElementById('changeImageHeader2');
  const images1 = [
    'images/CaliforniaQuail.jpg',
    'images/am-nohope-sketch1.jpg',
    'images/Seagull.jpg'
  ];
  const imagesMicrocult = [
    'images/nohope-grass.jpg',
    'images/microcult1-grass.jpg',
    'images/microcult2-grass.jpg',
    'images/microcult3-grass.jpg',
    'images/microcult4-grass.jpg'
  ];

  function mobileBackgroundImageChanger(element, images) {
    let currentIndex = 0;
    return () => {
      element.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
    };
  }

  bgImage1.addEventListener('click', mobileBackgroundImageChanger(bgImage1, images1));
  bgImage1Header.addEventListener('click', mobileBackgroundImageChanger(bgImage1, images1));

  // Change background in smaller image
  const slideshowMicrocult = document.getElementById('slideshow1');
  const bgMicrocult = document.getElementById('microcult-desktop');
  const buttonsMicrocult = document.getElementsByClassName('slideshow1-button');

  function createDesktopSlideshowChanger(element, images) {
    let currentIndex = 0;
    return () => {
      const randomDegree = Math.random() * 20 - 10;
      element.style.transform = `rotate(${randomDegree}deg)`;
      element.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    };
  }

  const mobileMicrocult = mobileBackgroundImageChanger(bgMicrocult, imagesMicrocult);
  const desktopMicrocult = createDesktopSlideshowChanger(slideshowMicrocult, imagesMicrocult);

  if (mediaQuery.matches) {
    mobileMicrocult();
  }

  function handleScreenSizeChange(event) {
    if (event.matches) {
      mobileMicrocult();
    } else {
      bgMicrocult.style.backgroundImage = `url('')`; // Reset background image on desktop view
    }
  }

  // Initial check
  handleScreenSizeChange(mediaQuery);

  // Listen for changes in the media query state
  mediaQuery.addEventListener('change', handleScreenSizeChange);

  // Add event listeners to buttons
  Array.from(buttonsMicrocult).forEach(button => {
    button.addEventListener('click', () => {
      if (mediaQuery.matches) {
        mobileMicrocult();
      } else {
        desktopMicrocult();
      }
    });
  });


//preload images
function preloadImages(urls) {
  var preloadedImages = [];
  for (var i = 0; i < urls.length; i++) {
      var img = new Image();
      img.src = urls[i];
      preloadedImages.push(img);
  }
  return preloadedImages;
}

// Preload images
var preloadedImages = preloadImages(imagesMicrocult.concat(images1));


});