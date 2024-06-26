import { indexTask } from "./components/taskList.js";
import { addTask, allTaskList } from "./module/app.js";

let listTask = document.querySelector('.list__task');
let btnAdd = document.querySelector('#btnAdd');
let inputTask = document.querySelector('#addTask');

document.addEventListener("DOMContentLoaded", async ()=>{
    taskListIndex();
})

btnAdd.addEventListener('click', async () => {
    if (inputTask.value.trim() !== "") {
        await addTask({ task: inputTask.value.trim() });
        inputTask.value = "";
        taskListIndex();
    }
});

const taskListIndex = async()=>{
    let res = await allTaskList();
    listTask.innerHTML = indexTask(res);
}