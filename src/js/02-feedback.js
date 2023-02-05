import debounce from 'lodash.debounce'
import '../css/common.css'
import '../css/feedback-form.css'

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea')
}

populateTextArea()

refs.form.addEventListener('submit', onFormSubmit)
refs.textarea.addEventListener('input', debounce(onTextAreaInput, 500))

function onFormSubmit(e) {
  e.preventDefault()
  console.log('відправляємо форму')

  e.currentTarget.reset()//ОЧИЩАЄ ВСІ ДАНІ ФОРМИ
   localStorage.removeItem('MessageArea')//ОЧИЩАЄ ЗНАЧЕННЯ В loclaStorage
}

function onTextAreaInput(e) {
  const messageArea = e.target.value
  localStorage.setItem('MessageArea', messageArea)//записуємо в localStorage введений текст з textarea
}

function populateTextArea() { //ф-ція пеервіряє і виконує код
  const savedMessage = localStorage.getItem('MessageArea')//отримуємо значення із localStorage

  if (savedMessage) {//перевіряємо чи є вже massageArea в localStorage/тому якщо таке значення є виконуємо код нижче
    console.log(savedMessage)
    refs.textarea.value = savedMessage
  }
}

////////////////////////////ВІШАЮ НА ФОРМУ ПРОСЛУХОВУВАЧА Input/////////////////////////
const formData = {}//пороєній об'єкт куди булемо зберігати дані форми

refs.form.addEventListener('input', e => {
  // console.log(e.target.name)
  // console.log(e.target.value)

  formData[e.target.name] = e.target.value//записуємо в formData введені дані
  console.log(formData)//потім цей об'єкт можна передавати в localStorage за допомогою JSON.stringfy()


})
//зробити щоб з input name тоже зберігалося в localStorage в об'єкт . закінчив на 46:00