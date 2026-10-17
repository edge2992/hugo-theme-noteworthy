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

// theme-init.js has already applied the initial theme. The toggle only stores an
// explicit choice, so "auto" sites keep following the OS until the visitor picks one.
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const theme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  });
}
