class namePresenter {

    private view: nameView;
    private model: nameModel;

    constructor(model: nameModel, view: nameView) {
        this.view = view;
        this.model = model;

        this.view.bindRegister(this.register.bind(this));
        this.refreshList();
    }

    register(item: todoItem){
        console.log("register from presenter");
        if (item.firstName !== "" || item.lastName !== "") {
            this.model.insert(item);
        }        
        this.refreshList();
    }

    refreshList(): any {
        console.log("refresh list");

        this.model.find(this.view.showList.bind(this.view));
    }
}