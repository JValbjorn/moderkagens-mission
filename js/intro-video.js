"use strict";

    document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video');
    const videoContainer = document.getElementById('video-container');
    
            
    // When video ends, remove the video container and show main content
    video.addEventListener('ended', function() {
        videoContainer.style.display = 'none';
        
        window.location.href = 'game1-food.html'; // Udskift med din mål-side
    });
            
 
    });
    
    