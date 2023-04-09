
const leftButton = document.querySelector('.swap__left');
const rightButton = document.querySelector('.swap__right');
rightButton.style.transform="rotate(180deg)";

leftButton.addEventListener('mouseover', () => {
  const image = leftButton.querySelector('img');
  image.src = 'img/svg/right_vector.svg';
});

rightButton.addEventListener('mouseover', () => {
  const image = rightButton.querySelector('img');
  image.src = 'img/svg/right_vector.svg';
});
leftButton.addEventListener('mouseout', () => {
    const image = leftButton.querySelector('img');
    image.src = 'img/svg/left_vector.svg';

  });
  
  rightButton.addEventListener('mouseout', () => {
    const image = rightButton.querySelector('img');
    image.src = 'img/svg/left_vector.svg';

  });