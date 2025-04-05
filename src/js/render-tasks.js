import { refs } from './refs';
import { createMarkup } from './markup-tasks';
import { getTasks, saveTasks } from './local-storage-api';

let tasks = getTasks("tasks");
export const addTask = (task) => {
  tasks.push(task);
  renderTasks();
  saveTasks("tasks", tasks);  
}
export const clearTaskList = () => {
    refs.tasksList.innerHTML = "";
}
export const renderTasks = () => {
    refs.tasksList.innerHTML = createMarkup(tasks);
}
export const deleteTask = (title) => {
    tasks = tasks.filter(task => task.title !== title);
    renderTasks();
    saveTasks("tasks", tasks);
} 

