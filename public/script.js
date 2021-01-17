
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;

let myVideoStream;

// js frontend code 
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
})

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadmetadata', () => {
        video.play();
    })

    videoGrid.append(video);
}