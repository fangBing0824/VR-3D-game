let rnd = (l,u) => Math.random() * (u-l) + l

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

