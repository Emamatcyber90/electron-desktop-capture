// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// toggle to false to get a working video capture
const captureAudio = true;

const constraints = {
  video: {
    mandatory: {
      chromeMediaSource: 'desktop'
    },
  },
  audio: captureAudio ? {
    mandatory: {
      chromeMediaSource: 'desktop',
    }
  } : false,
}

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  const videoElement = document.getElementById('capturedStream');
  videoElement.srcObject = stream;
}).catch((e) => {
  const error = document.getElementById('error');
  error.innerHTML = `Error: ${e.name} | Message: ${e.message}`;
  console.error('getUserMediaError: ', e);
});
