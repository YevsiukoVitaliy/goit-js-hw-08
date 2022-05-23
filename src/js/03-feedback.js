import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form')
form.addEventListener('input', throttle(onFormData, 500))
form.addEventListener('submit', onSubmitForm)
const formDate = {}
function onFormData(e) {
  formDate[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state',JSON.stringify(formDate))
}
function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
  e.preventDefault()
  e.currentTarget.reset()
  localStorage.removeItem('feedback-form-state')
}
(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'))
  const email = document.querySelector('.feedback-form input')
  const message = document.querySelector('.feedback-form texterea')
  if (data) {
    email.value = data.email
    message.value = data.message
  }
})()