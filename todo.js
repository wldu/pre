const data = [
    {title: 'Cook', id: 0},
    {title: 'Take the class', id: 1},
    {title: 'Review Notes', id: 2},
    {title: 'Have lunch', id: 3}
];

const View = (() => {
    const container = document.querySelector("#todolist_container");
    const createTmp = (dataList) => {
        let template = '';
        data.forEach(todo => {
            template += `<li>${todo.title}</li>`;
        });
        return template;
    };
    // render the data within elem    
    const render = (elem, template)=> {
        elem.innerHTML = template;
    };
    return {container, createTmp, render};
})();


const Model = ((view)=>{
    const {container, createTmp, render} = view;

    class Todos {
        #todoList
        constructor() {
            this.#todoList = [];
        }
        set newList(newTodos) {
            this.#todoList = newTodos;
            const template = createTmp(newTodos);
            render(container, template);
        }
        get getTodos() {
            return this.#todoList;
        }
    }
    return {Todos};
})(View);



const Controller = ((model)=>{
    const {Todos} = model;
    const todoList = new Todos();
    todoList.newList = data;
})(Model)



// MVC: 
//  Model: 
//      handle the data, retrieve, store, processing the data, manage the states of the application. 
//      Modifying the view whenever the data changes
//  View: 
//      user interface, what the user can see base on the data provided by the model. It displays whatever it receives.
//  Controller:
//      the middle between model and view. Controller controls the data flow between model and view, the interaction of the user with the app.




