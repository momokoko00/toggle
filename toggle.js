async function checkSiteVisibility() {
  try {
    // Fetch the config from the same GitHub repo
    const response = await fetch('https://raw.githubusercontent.com/momokoko00/toggle/main/config.json?cachebust=${Date.now()}');
    const config = await response.json();

    // Check the visibility setting
    if (config.visible === 'yes') {
      document.body.style.display = 'block';
    } else {
      document.body.style.display = 'none';
    }
  } catch (error) {
    console.error('Error fetching visibility config:', error);
    // Default to hiding the body if there's an error
    document.body.style.display = 'none';
  }
}

// Run the function when the page loads
window.addEventListener('load', checkSiteVisibility);
