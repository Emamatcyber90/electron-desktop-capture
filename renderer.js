// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

'use strict'

const constraints = {
  audio: {
    mandatory: {
      chromeMediaSource: 'desktop'
    }
  },
  video: {
    mandatory: {
      chromeMediaSource: 'desktop'
    }
  }
}

const constraintsWorking = {
  audio: false,
  video: {
    mandatory: {
      chromeMediaSource: 'desktop'
    }
  }
}

navigator.mediaDevices.getUserMedia(constraints).then((s) => {
    
  let videoElement = document.getElementById('capture')
  let videoTracks = s.getVideoTracks()
  console.log('Using video device: ', videoTracks[0].label)
  videoElement.srcObject = s
}).catch((e) => {
  console.error('getUserMediaError: ', e)
})
