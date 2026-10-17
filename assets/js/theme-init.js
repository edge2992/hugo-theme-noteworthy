// Apply the color scheme before the first paint to avoid a flash of the wrong theme.
// The stored choice wins; otherwise fall back to the site default (light, dark, or auto).
(function() {
  var root = document.documentElement;
  var theme = null;
  try {
    theme = localStorage.getItem('theme');
  } catch (e) {}
  if (theme !== 'light' && theme !== 'dark') {
    var fallback = root.getAttribute('data-default-theme');
    if (fallback === 'auto') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      theme = fallback === 'dark' ? 'dark' : 'light';
    }
  }
  root.setAttribute('data-theme', theme);
})();
