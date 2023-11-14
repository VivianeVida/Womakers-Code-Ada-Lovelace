const carousel = document.querySelector('.carousel');
const buttonLeft = document.querySelector('.carousel__button--left');
const buttonRight = document.querySelector('.carousel__button--right');

buttonLeft.addEventListener('click.left', () => {
  carousel.scrollLeft -= carousel.clientWidth;
});

buttonRight.addEventListener('click.right', () => {
  carousel.scrollLeft += carousel.clientWidth;
});