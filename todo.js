const data = [
    {title: 'Cook', id: 0},
    {title: 'Take the class', id: 1},
    {title: 'Review Notes', id: 2},
    {title: 'Have lunch', id: 3}
];

const View = (() => {
    const dom = {
        container: document.querySelector("#todolist_container"),
        userInput: document.querySelector("#user-input"),
        btn: document.querySelector("#add-btn")
    }
    const createTmp = (dataList) => {
        let template = '';
        // here is the one item behind issue: previous I use data, instead of dataList
        dataList.forEach(todo => {
            template += `<li>${todo.title}</li>`;
        });
        return template;
    };
    // render the data within elem    
    const render = (elem, template)=> {
        elem.innerHTML = template;
    };
    return {dom, createTmp, render};
})();


const Model = ((view)=>{
    const {dom, createTmp, render} = view;

    class Todos {
        #todoList;
        constructor() {
            this.#todoList = [];
        }
        set newList(newTodos) {
            this.#todoList = newTodos;
            const template = createTmp(newTodos);
            render(dom.container, template);
        }
        get getTodos() {
            return this.#todoList;
        }
    }
    return {Todos};
})(View);



const Controller = ((model, view)=>{
    const {Todos} = model;
    const {dom} = view;
    const todoList = new Todos();
    // initialized data
    todoList.newList = data;

    const init = () => {
        todoList.newList = data;
    }
    const addTodo = () => {
        dom.btn.addEventListener("click", ()=> {
            const obj = {title: dom.userInput.value, id: data.length - 1};
            // update todo list
            todoList.newList = [...data, obj];
            data.push(obj);
            dom.userInput.value = '';
            // console.log(userInput.value);
        });
    }    
    const bootstrap = () => {
        init(),
        addTodo()
    }
    return {bootstrap};
})(Model, View);

Controller.bootstrap();


// MVC: 
//  Model: 
//      handle the data, retrieve, store, processing the data, manage the states of the application. 
//      Modifying the view whenever the data changes
//  View: 
//      user interface, what the user can see base on the data provided by the model. It displays whatever it receives.
//  Controller:
//      the middle between model and view. Controller controls the data flow between model and view, the interaction of the user with the app.




