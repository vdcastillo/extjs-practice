Ext.define('Todo.view.ToDoList', {
    extend: 'Ext.panel.Panel',
    requires: ['Todo.view.ToDoListModel', 'Todo.view.TodoListController'],

    xtype:'app-todoList',
    controller : 'todoList',

    viewModel:{type:'todoList'},

    items:[
        {
            xtype:'container',
            layout:'hbox',
            cls : 'task-entry-panel',
            defaults : {
                flex:1
            },
            items : [
                {
                    reference : 'newTodo',
                    xtype: 'textfield',
                    emptyText : 'Enter a new Todo Here',
                    id:'newTodoInput',
                    enableKeyEvents: true,
                    listeners : {
                        // keypress: function(input, event){
                        //     if(event.getKey()===Ext.EventObject.ENTER){
                        //         input.nextSibling().fireHandler();
                        //     }
                        // }
                        keypress: 'onAddToDo'
                    }
                },
                {
                    xtype : 'button',
                    name : 'addNewToDo',
                    cls : 'cls-orange',
                    text : 'Add',
                    maxWidth : 50,
                    handler: 'onAddToDo'
                }
            ]
        }
    ]
});

