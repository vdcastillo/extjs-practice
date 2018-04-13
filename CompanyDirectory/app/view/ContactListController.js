Ext.define('CD.view.ContactListController',{
    extend : 'Ext.app.ViewController',

    alias : 'controller.contactList',
    views : ['CD.view.ContactList'],
    requires : ['CD.store.ContactList'],

    onSave:  function(){
        //Note, this will trigger one or more calls to the server based on the number of operations performed in the store.
        Ext.getStore('contactList').save();
    },

    onSelectionChange : function(){
        this.lookupReference('btnRemoveContact').enable();
    },

    onRemove : function(){
        var grid = this.lookupReference('contactListGrid');
        var sm = grid.getSelectionModel();

        grid.plugins[0].cancelEdit();

        grid.getStore().remove(sm.getSelection());
        if(grid.getStore().getCount() > 0 ){
            sm.select(0);
        }
    },

    onCreate: function(){
        var grid = this.lookupReference('contactListGrid');
        grid.plugins[0].cancelEdit();

        var r = Ext.create('Contact');
        grid.getStore().insert(0,r);
        grid.plugins[0].startEdit(0,0);
    }
});