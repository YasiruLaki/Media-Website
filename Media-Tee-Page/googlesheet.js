const scriptURL = 'https://script.google.com/macros/s/AKfycbyqFb-n-gXzZ5PJY0cwmaJs4tvf-xmI7jLKXBO4k4W3QfxprpZmpG8_vCCuyPFyDubBsA/exec'
const form = document.forms['google-sheets']

form.addEventListener('submit', e=> {
    e.preventDefault()
    fetch(scriptURL, {method: 'post', body: new FormData(form)})

    .then(response=>alert("Successfully Registered. Thank You!"))
    .catch(error => console.error("Error! Please Submit Again.") )
})
