// Select the carousel container
const carousel = document.getElementById('testimonials-carousel');

// Initialize variables
let scrollAmount = 0;
const scrollStep = 300; // Adjust based on item width
const scrollIntervalTime = 3000; // 3 seconds

// Function to scroll the carousel
function autoScroll() {
  // Check if the carousel has reached the end
  if (scrollAmount + scrollStep >= carousel.scrollWidth - carousel.clientWidth) {
    // Reset to start
    scrollAmount = 0;
  } else {
    scrollAmount += scrollStep;
  }
  // Scroll to the new position smoothly
  carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

// Set interval for auto-scrolling
setInterval(autoScroll, scrollIntervalTime);