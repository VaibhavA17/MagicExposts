const form = document.querySelector('#newsletter-form-magic');

const subBtn = document.querySelector('#subscribe-btn');

const subAlert = document.querySelector('#subscribe-alert');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  let form = e.currentTarget;
  let url = '/auth/newsletter';

  try {
    let formData = new FormData(form);

    let responseData = await postFormFieldsAsJson({ url, formData });

    if (responseData.success) {
      form.reset();
      subBtn.value = 'Subscribed';
      subBtn.disabled = true;
      subAlert.textContent = responseData.message;
      subAlert.classList.remove('d-none');
      setTimeout(() => {
        subAlert.textContent = '';
        subAlert.classList.add('d-none');
      }, 5000);
    } else {
      throw new Error(responseData.message);
    }
  } catch (error) {
    subAlert.textContent = error.message;
    subAlert.classList.remove('d-none');
    setTimeout(() => {
      subAlert.textContent = '';
      subAlert.classList.add('d-none');
    }, 5000);
  }
});



async function postFormFieldsAsJson({ url, formData }) {
  let formDataObject = Object.fromEntries(formData.entries());

  if (!formDataObject.newsletter) {
    throw new Error('Email address is required');
  }

  if (!formDataObject.newsletter.includes('@')) {
    throw new Error('Email address is invalid');
  }

  let formDataJsonString = JSON.stringify(formDataObject);

  let fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJsonString,
  };
  let res = await fetch(url, fetchOptions);
  if (!res.ok) {
    let error = await res.text();
    throw new Error(error);
  }
  return res.json();
}