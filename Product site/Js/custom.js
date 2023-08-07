
//Global header and footer

// Function to create the header
function createHeader() {
  const headerDiv = document.createElement('header');
  headerDiv.id = 'header'; //This section contains all the content of the header
  headerDiv.innerHTML = `
      <div id="header-container"> 
          <div id="logo">polaroid</div>
          <nav>
              <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="product.html">Products</a></li>
                  <li><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
      </div>
  `;
  document.body.prepend(headerDiv);
}

// Function to create the footer
function createFooter() {
  const footerDiv = document.createElement('footer');
  footerDiv.id = 'footer'; ///This section contains all the content of the footer
  footerDiv.innerHTML = `
  <p> We're here to help.</p> <p class="link"id="get-in-touch-link"><b> Get in touch </b></p><p> with our customer service team </p>
   <p> 
   <select id="dropdown">
       <option value="option1"> United States and Canada, $USD </option>
       <option value="option2">United Kingdom</option>
       <option value="option3">Europe and rest of the World</option>
   </select> </p>
   <div class="footer-links-column">
   <a href="product.html">Gift Cards</a>
   <a href="about.html">About Us</a>
   <a href="product.html">More Products</a>
   <a href="about.html">Collaborations</a>
   <a href="about.html">Careers</a>
   <a href="contact.html">Contact Us</a>
 </div>
</div>
<img src="./images/IMG-10.png" alt="Footer Image" class="footer-image">  

`;
  document.body.appendChild(footerDiv);
}

// Calling the functions to create the header and footer
createHeader();
createFooter();

// JavaScript to create carousel effect to the slides in index.html
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(slideIndex) {
    const slides = document.querySelectorAll(".slide"); 
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }
  

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // The interval to change the slides every 5 seconds is set
  setInterval(nextSlide, 5000);
});
const getInTouchLink = document.getElementById('get-in-touch-link');

// Adding a click event listener to the element
getInTouchLink.addEventListener('click', function() {
window.location.href = 'contact.html';
});







