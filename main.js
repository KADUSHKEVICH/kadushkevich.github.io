let video;
let videoBg;

window.onload = function() {
	video = document.getElementById("videoHalfWindow");
    videoBg = document.getElementById("videoHalfEllipse");
    
    video.play();
    video.currentTime = 3;

    videoBg.play();
    videoBg.currentTime = 26;
};


