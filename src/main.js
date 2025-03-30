/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import { refs } from "./js/refs";


refs.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputTitle = event.target.elements.taskName.value.trim();
  const inputDescription = event.target.elements.taskDescription.value.trim();
  
  
  if (inputTitle === '' || inputDescription === '') {
        alert('fill in all gields');
        return;
  }
  const task = {
    title: inputTitle,
    text: inputDescription,
  }
  console.log(task);  



})
