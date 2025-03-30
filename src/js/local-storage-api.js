export const saveTasks = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))

}

const getTasks = (key) => {
    const tasks = localStorage.getItem(key);
    if (tasks) {
        return JSON.parse(tasks);
        
    }
    return
}