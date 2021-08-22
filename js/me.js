const shortButton = document.getElementById('short-button')
const longButton = document.getElementById('long-button')
const longBio = document.getElementById('bio-long')
const shortBio = document.getElementById('bio-short')

shortButton.addEventListener('click', () => {
  longBio.style.display = 'none'
  shortBio.style.display = 'block'
  longButton.style.color = 'var(--text-color)'
  longButton.style.border = 'var(--text-color) solid 0.1rem'
  shortButton.style.color = 'tomato'
  shortButton.style.border = 'tomato solid 0.1rem'
})

longButton.addEventListener('click', () => {
  shortBio.style.display = 'none'
  longBio.style.display = 'block'
  shortButton.style.color = 'var(--text-color)'
  shortButton.style.border = 'var(--text-color) solid 0.1rem'
  longButton.style.color = 'tomato'
  longButton.style.border = 'tomato solid 0.1rem'
})
