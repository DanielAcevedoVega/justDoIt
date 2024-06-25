import { indexTask } from "./components/taskList.js";
import { allTaskList } from "./module/app.js";

let listTask = document.querySelector('.list__task');

document.addEventListener("DOMContentLoaded", async ()=>{
    let res = await allTaskList();
    listTask.innerHTML = indexTask(res);
})