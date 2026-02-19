const data = [
    {title: 'Cook', id: 0},
    {title: 'Take the class', id: 1},
    {title: 'Review Notes', id: 2},
    {title: 'Have lunch', id: 3}
];

const container = document.querySelector("#todo-list-container");
let template = '';
data.forEach(todo => {
    template += `<li>${todo.title}</li>`;
});
container.innerHTML = template;

// MVC: Model, View, Controller

