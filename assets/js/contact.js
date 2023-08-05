const form = document.querySelector('#contact-form-magic');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch('/auth/contact', {
    method: 'post',
    body: formData,
    contentType: 'application/json'
  }).then(res => res.json())
    .then(data => {
      console.log(data)
    })
})
