export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgMusic = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  buttonPressAudio.volume = 0.2
  kitchenTimer.volume = 0.07
  bgMusic.volume = 0.5
  bgMusic.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function bgMusicStart() {
    bgMusic.play()
  }

  function bgMusicPause() {
    bgMusic.pause()
  }

  return {
    pressButton,
    timeEnd,
    bgMusicStart,
    bgMusicPause
  }
}