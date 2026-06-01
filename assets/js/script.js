const closeBtn = document.querySelector('.close-btn');
const notificationBar = document.querySelector('.notification-bar');

if (notificationBar) {
  notificationBar.style.display = 'flex';
}

if (closeBtn && notificationBar) {
  closeBtn.addEventListener('click', () => {
    notificationBar.style.display = 'none';
  });
}

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

if (burgerMenu && navMenu) {
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}