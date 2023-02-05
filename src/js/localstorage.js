const user = {
  name: 'Andron',
  age: 35,
  weight: 70,
}
//ЯКЩО ФОРМА ВЕЛИКА І Є ДЕКІЛЬКА input ТРЕБА ВИКОРИСТОВУВАТИ ДЕЛАГУВАННЯ
const stringUser = JSON.stringify(user)//перевів в строку
console.log(stringUser)

const returnObj = JSON.parse(stringUser)//парсить строку в об'єкт
console.log(returnObj)
/////////////////////////////////////
console.log(localStorage)//локальне сховище

localStorage.setItem('data', JSON.stringify({ name: 'Andron', age: 30 }))//localStorage приймає тільки строки/метод setItem дозволяє записати в localStorage

console.log(localStorage.getItem('data'))//метод getItem дозволяє прочитати із lokalStorage

