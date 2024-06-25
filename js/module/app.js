export const allTaskList = async ()=>{
    let res = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList`);
    let data = await res.json();
    return data;
}

export const getTask = async (id) => {
    let res = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/todoList/${id}`);
    let data = await res.json();
    return data;
}
