document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      var video = document.querySelector('video');
      if (video && !video.paused) {
        video.pause();
      }
    }
  });
  