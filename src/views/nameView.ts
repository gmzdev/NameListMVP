class nameView {
    private fullName: string;

    constructor() {
        //this.registerWithForm();
    }

    showList(todoList: Array<todoItem>) {

        let escapeForHTML = (s) => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;')

        let list = todoList.reduce((a, item) => a + `
        <li>
            <label>${escapeForHTML(item.firstName + " " + item.lastName)}</label>
        </li>`, '')

        $("#names").html(list);
    }

    bindRegister(handler: Function) {
        console.log("bind register from view");
        $("#user-form").submit((e) => {
            e.preventDefault();

            let item: todoItem = {
                firstName: <string>$("#first-name").val(),
                lastName: <string>$("#last-name").val()
            }

            handler(item);
        })
    }
}