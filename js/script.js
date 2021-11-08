function showFinalAverage() {
  const note1 = parseInt(document.getElementById('note-1').value)
  const note2 = parseInt(document.getElementById('note-2').value)
  const note3 = parseInt(document.getElementById('note-3').value)
  const note4 = parseInt(document.getElementById('note-4').value)

  let finalResult = document.querySelector('.note__result--final')
  finalResult = ((note1 + note2 + note3 + note4) / 4).toFixed(1)

  const approvedOrDisapproved = document.querySelector('.note__result')
  const finalNote = document.querySelector('.result--paragraph')

  if (finalResult >= 6) {
    approvedOrDisapproved.classList.add('approved')
    finalNote.style.display = 'block'
    finalNote.innerHTML = `Parabéns você foi aprovado(a), sua media final foi:  ${finalResult}`
  } else if (isNaN(note1) || isNaN(note2) || isNaN(note3) || isNaN(note4)) {
    alert('Certifique-se de que todos os campos estão preenchidos;')
  } else {
    approvedOrDisapproved.classList.add('disapproved')
    finalNote.style.display = 'block'
    finalNote.innerHTML = `Você foi reprovado(a), sua media final foi: ${finalResult}`
  }

  document
    .getElementById('close-icon')
    .addEventListener('click', closeResultCard)

  function closeResultCard() {
    approvedOrDisapproved.classList.remove('approved', 'disapproved'),
      (finalNote.style.display = 'none')
    document.getElementById('note-1').value = ''
    document.getElementById('note-2').value = ''
    document.getElementById('note-3').value = ''
    document.getElementById('note-4').value = ''
  }
}

const formInputs = document.querySelectorAll('.form__input')
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('keyup', event => {
    if (event.keyCode === 13) {
      event.preventDefault()
      document.getElementById('note--show').click()
    }
  })
}
