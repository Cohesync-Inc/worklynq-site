/* One video at a time: when any video or audio on the page starts playing,
   pause every other one that is still playing. Included on every page that has a video. */
document.addEventListener('play', function (e) {
  var current = e.target;
  if (!current || (current.tagName !== 'VIDEO' && current.tagName !== 'AUDIO')) return;
  var media = document.querySelectorAll('video, audio');
  for (var i = 0; i < media.length; i++) {
    if (media[i] !== current && !media[i].paused) media[i].pause();
  }
}, true);
