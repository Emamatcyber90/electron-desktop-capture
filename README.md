# electron-desktop-capture

Audio capture via Electron's Desktop Capture API [does not work](https://github.com/electron/electron/issues/10515) on OS X and Linux.

Constraints set as per [Electron desktop capture API](https://github.com/electron/electron/blob/master/docs/api/desktop-capturer.md):

```
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
```

On Electron v1.6.x, we get no error message, however, the following line is logged in the terminal when the video stream is sent over a RTC PeerConnection: 

```
[57858:0914/130847.751454:ERROR:audio_send_stream.cc(90)] Failed to set up send codec state.
```

On Electron v1.7.x, the error callback fires with the following message: 
```
NavigatorUserMediaError
    constraintName: ""
    message: ""
    name: "TrackStartError"
```

## To Use

```bash
# Clone this repository
git clone https://github.com/mhashmi/electron-desktop-capture
# Go into the repository
cd electron-desktop-capture
# Install dependencies
npm install
# Run the app
npm start
```

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
