"use-strict";

    const playBtn = document.getElementById('action-knap');
    const videoOverlay = document.getElementById('scanner-container');
    const scannerVideo = document.getElementById('scanner-video');
    const startScreen = document.getElementById('forside-ui');

    playBtn.addEventListener('click', () => {
      videoOverlay.style.display = 'flex';
      startScreen.style.display = 'none';
      scannerVideo.play();
    });

    scannerVideo.addEventListener('ended', () => {
      window.location.href = 'intro-video.html'; // Udskift med din mål-side
    });