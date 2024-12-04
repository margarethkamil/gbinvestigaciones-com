function toggleNavEndVisibility() {
    const navEnd = document.querySelector('.nav-end');
    
    if (window.innerWidth < 768) {
      navEnd.style.display = 'none'; // Hide the nav-end on mobile
    } else {
      navEnd.style.display = ''; // Show the nav-end on larger screens
    }
  }
  
  // Run on initial page load
  toggleNavEndVisibility();
  
  // Run whenever the window is resized
  window.addEventListener('resize', toggleNavEndVisibility);
  


  // Function to show the popup
  function showPopup() {
    document.getElementById('popup').style.display = 'flex';
  }

  // Function to close the popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  // Show the popup after 5 seconds (can adjust timing as needed)
  setTimeout(showPopup, 5000);
