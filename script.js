let addMessage = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todo = document.querySelector('.todo');
let todoList = [];
if (localStorage.getItem('todo')){
todoList = JSON.parse(localStorage.getItem('todo'))
displayMassage();
}
addButton.addEventListener('click', function () {
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false,
       
    };

    todoList.push(newTodo);
    displayMassage();
    localStorage.setItem('todo', JSON.stringify(todoList));
});

function displayMassage() {
    let displayMassag = '';
    todoList.forEach(function (item, index) {
        displayMassag += `
<li>
<input type ='checkbox' id='item_${index}' ${index.checked ? 'cheked': ''}>
<label for = 'item_${index}'>${item.todo}</label>
</li>
`;
        todo.innerHTML = displayMassag;
        
    });

};
todo.addEventListener('menu', function(event){
event.preventDefault();
});

// todoList.forEach(function(item, index){






// })
// дом эд элеменд аппенд чайлд 
