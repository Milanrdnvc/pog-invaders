const btn = document.querySelector('a');
const soundEffect = new Audio('sound_effect.mp3');

btn.addEventListener('click', () => {
  soundEffect.play();
});
