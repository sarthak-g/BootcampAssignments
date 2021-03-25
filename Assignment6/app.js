const input = document.getElementById('todo-input');
const table_body = document.getElementById('todo-item-table');
const add_btn = document.getElementById('add-btn');

add_btn.addEventListener('click', (e) => {
    const todoText = input.value;
    if(todoText === "") return;
    const tr = document.createElement('tr');
    const title = document.createElement('td');
    title.innerText = todoText;
    const edit = document.createElement('td');
    const edit_icon = document.createElement('i');
    edit_icon.classList.add("fas","fa-edit");
    edit.append(edit_icon);
    const del = document.createElement('td');
    const del_icon = document.createElement('i');
    del_icon.classList.add("fas", "fa-trash");
    del.append(del_icon)
    tr.append(title,edit,del);
    table_body.append(tr);
    input.value = "";

    del_icon.addEventListener('click', (e) => {
        const todo = e.target.parentElement.parentElement;
        todo.remove();
    })

    edit_icon.addEventListener('click', (e) => {
        e.target.style.display = "none";
        const title = e.target.parentElement.previousSibling;
        const todoText = title.innerText;
        title.innerHTML = "<input type='text' /><button type='button' class='btn btn-success ms-2'>Done</button>";
        const input = title.children;
        input[0].value = todoText;
        input[1].addEventListener('click', (e) => {
            const updatedText = e.target.previousSibling.value;
            const edit_btn = e.target.parentElement.nextSibling.children;
            e.target.parentElement.innerHTML = `<td>${updatedText}</td>`;
            edit_btn[0].style.display = "";
        })
    })

})