console.log('Script is running!');
async function checkSiteVisibility() {
  try {
    console.log('Fetching config from: https://raw.githubusercontent.com/momokoko00/toggle/main/config.json');
    const response = await fetch('https://raw.githubusercontent.com/momokoko00/toggle/main/config.json?cachebust=${Date.now()}');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const config = await response.json();
    console.log('Config fetched:', config);

    if (config.visible === 'yes') {
      console.log('Showing body');
      document.body.setAttribute('style', 'display: block !important');
    } else {
      console.log('Hiding body');
      document.body.setAttribute('style', 'display: none !important');
    }
  } catch (error) {
    console.error('Error fetching visibility config:', error);
    document.body.setAttribute('style', 'display: none !important');
  }
}

window.addEventListener('load', checkSiteVisibility);
