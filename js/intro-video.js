"use strict";

    document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video');
    const videoContainer = document.getElementById('video-container');
    const mainContent = document.getElementById('main-content');
            
    // When video ends, remove the video container and show main content
    video.addEventListener('ended', function() {
        videoContainer.style.display = 'none';
        mainContent.style.display = 'block';
    });
            
    // In case the video fails to load or has an error
    video.addEventListener('error', function() {
        videoContainer.style.display = 'none';
        mainContent.style.display = 'block';
    });
    });
    