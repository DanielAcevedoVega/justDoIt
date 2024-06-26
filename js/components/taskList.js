export const indexTask = (res) => {
    let plantilla = ""
    for (let i = 0; i < res.length; i++) {
        const value = res[i];
        plantilla += /*html*/`
        <article class="task__article">
            <div class="task__information">
                <p>${value.task}</p>
                <div>
                    <img src="storage/img/check.svg">
                    <img src="storage/img/trash.svg" data-id="${value.id}" class="trash__icon">
                </div>
            </div>
        </article>`;
    }
    return plantilla
}