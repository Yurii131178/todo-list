import { refs } from "./refs";
import { createMarkup } from "./markup-tasks";
    import { createMarkup } from "./markup-tasks";

const tasks = {};


const addTask = (task) => {
    tasks.push(task);
    
    refs.tasksList.insertAdjacentElement("beforeend", createMarkup(tasks))
    
} 

