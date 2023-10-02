// dark-mode.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Save user preference for dark mode in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
  }
  
  // Check user preference for dark mode from localStorage
  const isDarkModePreferred = JSON.parse(localStorage.getItem('dark-mode'));
  
  // Set initial dark mode state based on user preference
  if (isDarkModePreferred) {
    document.body.classList.add('dark-mode');
  }
  
  // Event listener for the dark mode switch button
  const darkModeSwitch = document.getElementById('dark-mode-switch');
  if (darkModeSwitch) {
    darkModeSwitch.addEventListener('click', toggleDarkMode);
  }