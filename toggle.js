async function checkSiteVisibility() {
  try {
    const response = await fetch(`https://raw.githubusercontent.com/momokoko00/toggle/main/config.json?cachebust=${Date.now()}`);
    if (!response.ok) {
      document.body.innerHTML = '';
      return;
    }

    const config = await response.json();
    if ((config.visible || '').toLowerCase() === 'yes') {
      document.body.style.setProperty('display', 'block', 'important');
    } else {
      document.body.innerHTML = '';
    }
  } catch (e) {
    document.body.innerHTML = '';
  }
}

window.addEventListener('load', checkSiteVisibility);
