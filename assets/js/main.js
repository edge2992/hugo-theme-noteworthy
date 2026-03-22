window.onload = function() {
  wrapTable();
  initThemeToggle();
};

// Wrap tables in a div so that they scroll responsively.
function wrapTable() {
  const tables = document.querySelectorAll('table');
  tables.forEach((table) => {
    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'table-wrapper';
    table.parentElement.replaceChild(tableWrapper, table);
    tableWrapper.appendChild(table);
  });
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');

  function getPreferredTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (sunIcon && moonIcon) {
      sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
      moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
    }
  }

  setTheme(getPreferredTheme());

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}
