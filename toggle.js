async function checkSiteVisibility() {
  const response = await fetch('https://cdn.jsdelivr.net/gh/momokoko00/toggle@main/config.json?cachebust=' + Date.now());
  const config = await response.json();
  if (config.visible !== 'yes') {
    document.body.innerHTML = '';
  } else {
    document.body.setAttribute('style', 'display: block !important');
  }
}
window.addEventListener('load', checkSiteVisibility);
