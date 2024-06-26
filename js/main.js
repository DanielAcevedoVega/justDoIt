import { indexTask } from "./components/taskList.js";
import { addTask, allTaskList, completedTask, deleteTask, getTask } from "./module/app.js";

let listTask = document.querySelector('.list__task');
let btnAdd = document.querySelector('#btnAdd');
let inputTask = document.querySelector('#addTask');

document.addEventListener("DOMContentLoaded", async () => {
    taskListIndex();
})

btnAdd.addEventListener('click', async () => {
    if (inputTask.value.trim() !== "") {
        await addTask({ task: inputTask.value.trim(), status: 'On hold' });
        inputTask.value = "";
        taskListIndex();
    }
});
listTask.addEventListener('click', async (e) => {
    if (e.target.classList.contains('check__icon')) {
        let id = e.target.dataset.id;
        let task = await getTask(id);
        await completedTask(id, { status: 'ready' });
        taskListIndex();
        if(task.status !== 'ready'){
            Swal.fire({
                imageUrl: "https://img.freepik.com/premium-vector/good-job-sticker_586390-4.jpg",
                imageHeight: 626,
                imageAlt: "A tall image"
            });
        }
    } else if (e.target.classList.contains('trash__icon')) {
        let id = e.target.dataset.id;
        let task = await getTask(id);
        if (task.status === 'ready') {
            await deleteTask(id);
            taskListIndex();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Deleted task",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Unable to delete uncompleted task!"
            });
        }
    }
});

const taskListIndex = async () => {
    let res = await allTaskList();
    listTask.innerHTML = indexTask(res);
}

