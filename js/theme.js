/**
 * Theme Toggle Module
 * Manages light/dark theme switching with localStorage persistence
 */
export const initTheme = () => {
  const html = document.documentElement;
  const themeLabel = document.getElementById('toggle-label');
  const themeCheckbox = document.getElementById('theme-cb');

  // Restore saved preference
  const saved = localStorage.getItem('atlas-theme') || 'dark';
  setTheme(saved);

  // Listen for toggle clicks
  const toggleElement = document.querySelector('.theme-toggle');
  if (toggleElement) {
    toggleElement.addEventListener('click', () => {
      const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  function setTheme(t) {
    html.dataset.theme = t;
    if (themeLabel) {
      themeLabel.textContent = t === 'dark' ? 'Dark' : 'Light';
    }
    if (themeCheckbox) {
      themeCheckbox.checked = t === 'light';
    }
    localStorage.setItem('atlas-theme', t);
  }
};
