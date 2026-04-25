const root = document.documentElement;
const themeToggle = document.querySelector('#theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#primary-menu');
const backToTop = document.querySelector('.back-to-top');
const themeMeta = document.querySelector('meta[name="theme-color"]');

const applyTheme = (theme) => {
  const isDark = theme === 'dark';
  if (isDark) {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeMeta?.setAttribute('content', isDark ? '#111827' : '#4a90e2');
};

const storedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(storedTheme || preferredTheme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.hasAttribute('data-theme') ? 'light' : 'dark';
  localStorage.setItem('theme', nextTheme);
  applyTheme(nextTheme);
});

const closeMenu = () => {
  navMenu?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
};

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  document.body.classList.toggle('nav-open', Boolean(isOpen));
});

navMenu?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

const updateBackToTop = () => {
  backToTop?.classList.toggle('is-visible', window.scrollY > 500);
};

window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
