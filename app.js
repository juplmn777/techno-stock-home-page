const inputField = document.querySelectorAll('input');

for (let index = 0; index < inputField.length; index++) {
  let field = inputField[index];

  field.addEventListener('input', (e) => {
    if (e.target.value != '') {
      e.target.parentNode.classList.add('animation');
    } else if (e.target.value == '') {
      e.target.parentNode.classList.remove('animation');
    }
  });
}
