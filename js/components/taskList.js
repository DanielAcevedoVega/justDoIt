export const indexTask = (res) => {
    let plantilla = ""
    for (let i = 0; i < res.length; i++) {
        const value = res[i];
        plantilla += /*html*/`
        <article class="task__article">
            <div class="task__information">
                <p>${value.task}</p>
                <img src="storage/img/check.svg">
                <img src="storage/img/trash.svg">
            </div>
        </article>`;
    }
    return plantilla
}