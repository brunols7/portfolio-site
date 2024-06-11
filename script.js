window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.sidebar-item');
  
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
});

let currentSlide = 0;

function showSlide(index) {
  const items = document.querySelectorAll('.carousel-item');
  if (index >= items.length) currentSlide = 0;
  if (index < 0) currentSlide = items.length - 1;
  items.forEach((item, i) => {
    item.classList.toggle('active', i === currentSlide);
  });
}

function moveCarousel(step) {
  showSlide(currentSlide += step);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});