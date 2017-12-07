class nameModel{

    todoList: Array<todoItem>;

    getLocalStorage = () =>{
        return JSON.parse(localStorage.getItem(this.name) || "[]");
    }

    setLocalStorage = (v: Array<todoItem>) => {
        localStorage.setItem(this.name, JSON.stringify(this.todoList));
    }

    constructor(private name:string){
       //this.todoList = new Array<todoItem>();
       this.todoList = this.getLocalStorage();
    }

    insert(item:todoItem){
        
        console.log("insert to localStorage");

        this.todoList.push(item);
        this.setLocalStorage(this.todoList);
    }

    find(viewHandler)
    {
        viewHandler(this.todoList);
    }
}