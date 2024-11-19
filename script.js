document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active button
      document.querySelectorAll('.toggle').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      // Update prices based on selection
      if (button.getAttribute('data-plan') === 'monthly') {
        document.querySelector('.basic .price').innerHTML = "₹2,999 <span>/ month</span>";
        document.querySelector('.standard .price').innerHTML = "₹6,999 <span>/ month</span>";
        document.querySelector('.premium .price').innerHTML = "₹15,999 <span>/ month</span>";
      } else if (button.getAttribute('data-plan') === 'yearly') {
        document.querySelector('.basic .price').innerHTML = "₹23,999 <span>/ year</span>";
        document.querySelector('.standard .price').innerHTML = "₹31,999 <span>/ year</span>";
        document.querySelector('.premium .price').innerHTML = "₹45,999 <span>/ year</span>";
      }
    });
  });

// Toggle Menu for Hamburger and Overlay
const hamburger = document.getElementsByClassName('menu-button');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    overlay.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);
  