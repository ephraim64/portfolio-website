// navigation javascript

window.addEventListener("scroll", () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
})

// javascript for responsive menu
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigaition');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
});