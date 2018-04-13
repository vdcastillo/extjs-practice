Ext.define('Todo.view.ToDoListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.todoList',
    stores: {
        todos: {
            fields: [
                {name: 'id', type: 'string'},
                {name: 'desc', type: 'string'}
            ],
            autoload: true,
            sorters: [{
                property: 'done',
                direction: 'ASC'
            }],
            proxy: {
                type: 'localstorage',
                id: 'todo'
            }
        }
    }
});