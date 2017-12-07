class Program {
    static main() {
        new namePresenter(new nameModel("names"), new nameView());
    }
}
class nameModel {
    constructor(name) {
        this.name = name;
        this.getLocalStorage = () => {
            return JSON.parse(localStorage.getItem(this.name) || "[]");
        };
        this.setLocalStorage = (v) => {
            localStorage.setItem(this.name, JSON.stringify(this.todoList));
        };
        //this.todoList = new Array<todoItem>();
        this.todoList = this.getLocalStorage();
    }
    insert(item) {
        console.log("insert to localStorage");
        this.todoList.push(item);
        this.setLocalStorage(this.todoList);
    }
    find(viewHandler) {
        viewHandler(this.todoList);
    }
}
class namePresenter {
    constructor(model, view) {
        this.view = view;
        this.model = model;
        this.view.bindRegister(this.register.bind(this));
        this.refreshList();
    }
    register(item) {
        console.log("register from presenter");
        if (item.firstName !== "" || item.lastName !== "") {
            this.model.insert(item);
        }
        this.refreshList();
    }
    refreshList() {
        console.log("refresh list");
        this.model.find(this.view.showList.bind(this.view));
    }
}
class nameView {
    constructor() {
        //this.registerWithForm();
    }
    showList(todoList) {
        let escapeForHTML = (s) => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');
        let list = todoList.reduce((a, item) => a + `
        <li>
            <label>${escapeForHTML(item.firstName + " " + item.lastName)}</label>
        </li>`, '');
        $("#names").html(list);
    }
    bindRegister(handler) {
        console.log("bind register from view");
        $("#user-form").submit((e) => {
            e.preventDefault();
            let item = {
                firstName: $("#first-name").val(),
                lastName: $("#last-name").val()
            };
            handler(item);
        });
    }
}
//# sourceMappingURL=out.js.map