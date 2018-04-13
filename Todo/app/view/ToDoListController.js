Ext.define('Todo.view.TodoListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todoList',
    views: [Todo.view.ToDoList],

    init: function () {
        var me = this;

        // Here we're calling the load method of the store and passing
        // an anonymous method for the callback. So, the load will call the
        // server to get the data first and calls the anonymous method. The
        // anonymous method then, add the data to the view.

        this.getViewModel().data.todos.load(function (records) {
            Ext.each(records, function (record) {
                //Add a container for each record
                me.addTodoView(record);
            });
        });

        Ext.getBody().on('click', function (event, target) {
            me.onDeleteKey(event, target);
        }, null, {
            delegate: '.fa-times'
        });

        // Ext.getBody().on('keypress', function (event, target) {
        //     if(event.getKey() === Ext.EventObject.ENTER){
        //         me.onAddToDo();
        //     }
        // }, null, {
        //     delegate: '#newTodoInput'
        // });
        //
        // console.log(Ext.getCmp('newTodoInput'));
        //
        // Ext.getCmp('newTodoInput').on('keypress',function () {
        //
        //     console.log(event);
        // });
        // console.log(Ext.getCmp('newTodoInput').hasListeners);
    },

    onAddToDo: function () {
        var store = this.getViewModel().data.todos;

        var desc = this.lookupReference('newTodo').value.trim();

        if (desc !== '') {
            store.add({
                desc: desc
            });
        }

        store.sync({
            success: function (batch, options) {
                this.lookupReference('newTodo').setValue('');
                this.addTodoView(options.operations.create[0]);
            },
            scope: this
        });
    },

    addTodoView: function (record) {
        this.view.add([{
            xtype: 'container',
            layout: 'hbox',
            cls: 'row',
            items: [
                {
                    xtype: 'checkbox',
                    boxLabel: record.get('desc'),
                    checked: record.get('done'),
                    flex: 1
                },
                {
                    html: '<a class="hidden" href="#"><i taskId="' + record.get('id') + '" class="fa fa-times"></i></a>'
                }
            ]
        }]);
    },
    onDeleteKey: function (event, target) {
        var store = this.getViewModel().data.todos;

        var targetCmp = Ext.get(target);
        var id = targetCmp.getAttribute('taskId');
        store.remove(store.getById(id));
        store.sync({
            success: function () {
                this.view.remove(targetCmp.up('.row').id)
            },
            scope: this
        });

    }


});