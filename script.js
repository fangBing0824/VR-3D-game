let rnd = (l,u) => Math.random() * (u-l) + l

let introAudio;
window.addEventListener('load', () => {
  const startBtn = document.querySelector('#startBtn');

  if (!startBtn) {
    console.error('startBtn not found');
    return;
  }
});

AFRAME.registerComponent('start-button', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      window.location.href = `cookie${Math.round(Math.random()*2+1)}.html`;
      console.log()
    });
  }
});

window.addEventListener('load', () => {
  introAudio = document.getElementById('bgMusic');
  introAudio.loop = true;
  introAudio.currentTime = 0;
  introAudio.play();


setTimeout(() => {
  introAudio.pause();
  introAudio.currentTime = 0; // （可选）重置回开头
}, 20000);
});

// Start music on first click anywhere
document.addEventListener('click', () => {
  if (introAudio) {
    introAudio.play();
  }
}, { once: true });