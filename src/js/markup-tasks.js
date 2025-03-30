export const createMarkup = (tasks) => {
    return tasks.map(({ title, text }) =>
    
        `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${title}</h3>
        <p>${text}</p>    
        </li>`).join("")
}