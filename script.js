const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const toggleMode = (mode) => {
  localStorage.setItem('theme', mode);
  nav.style.backgroundColor = mode === 'dark' ? 'rgb(0 0 0 / 50%)' 
    : mode === 'light' ? 'rgb(255 255 255 / 50%)' : '';
  textBox.style.backgroundColor = mode === 'dark' ? 'rgb(255 255 255 / 50%)' 
    : mode === 'light' ? 'rgb(0 0 0 / 50%)' : '';
  toggleIcon.children[0].textContent = mode === 'dark' ? 'Dark Mode' 
  : mode === 'light' ? 'Light Mode' : '';
  toggleIcon.children[1].classList.replace(mode === 'light' ? 'fa-moon' : 'fa-sun',
    mode === 'light' ? 'fa-sun' : 'fa-moon');
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

const switchTheme = (event) => {
  const rootElement = document.documentElement;
  if (event.target.checked) {
    rootElement.setAttribute('data-theme', 'dark');
    toggleMode('dark');
  } else {
    rootElement.setAttribute('data-theme', 'light');
    toggleMode('light');
  }
}


toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme') ?? 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
toggleMode(currentTheme);

if (currentTheme === 'dark') toggleSwitch.checked = true;