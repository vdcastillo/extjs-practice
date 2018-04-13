Ext.define('Contact',{
    extend : 'Ext.data.Model',
    fields : ['fname','lname','email','address','city','state','phone','type']
});


Ext.define('CD.store.ContactList',{
    extend: 'Ext.data.Store',
    storeId: 'contactList',
    model: 'Contact',
    pageSize: 10,
    proxy: {
        type: 'localstorage',
        id : 'contact'
        // url: 'contactlist',
        // reader: {
        //     type: 'json',
        //     rootProperty: 'data',
        //     totalProperty: 'total'
        // }
    }
});


Ext.create('CD.store.ContactList').load();