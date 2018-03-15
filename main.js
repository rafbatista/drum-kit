const playSound = event => {
  console.log(audio)
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
  if (!audio) return
}
window.addEventListener('keydown', playSound)
