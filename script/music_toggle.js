window.onload = function() {
  const music = document.getElementById('background-music');
  const soundToggle = document.getElementById('sound-toggle');
  const soundIcon = soundToggle.querySelector('img');

  soundToggle.addEventListener('click', function() {
    if (music.paused) {
      music.muted = false;
      soundIcon.src = '../media/music/pause.jpg';
      music.play();
    } else {
      music.muted = false;
      music.pause();
      soundIcon.src = '../media/music/play.jpg';
    }
  });
};