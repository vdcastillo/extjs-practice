Ext.define('CD.view.contactlist.ContactList', {
    extend: 'Ext.panel.Panel',

    requires: [],
    xtype: 'app-contactList',
    controller: 'contactList',

    items: [{
        cls: 'contact-list',
        xtype: 'grid',
        reference: 'contactListGrid',
        scrollable: true,
        autoScroll: true,
        plugins: [{
            ptype: 'rowediting',
            clicksToMoveEditor: 1,
            autoCancel: false
        }],
        listeners: {
            selectionchange: 'onSelectionChange'
        },
        flex: 1,
        store: 'contactList',
        pageSize: 10,
        title: 'Company Directory',
        columns: {
            defaults: {
                editor: {
                    xtype: 'textField',
                    allowBlank: false
                }
            },
            items: [
                {
                    text: 'First Name',
                    width: 100,
                    dataIndex: 'fname'
                },
                {
                    text: 'Last Name',
                    width: 100,
                    dataIndex: 'lname'
                },
                {
                    text: 'Email',
                    maxWidth: 500,
                    flex: 1,
                    dataIndex: 'email',
                    editor: {
                        vtype: 'email'
                    }
                },
                {
                    text: 'Address',
                    flex: 1,
                    maxWidth: 500,
                    dataIndex: 'address'
                },
                {
                    text: 'City',
                    width: 100,
                    dataIndex: 'city'
                },
                {
                    text: 'State',
                    width: 100,
                    dataIndex: 'state'
                },
                {
                    text: 'Type',
                    width: 100,
                    dataIndex: 'type'
                },
                {
                    text: 'Phone Number',
                    width: 150,
                    dataIndex: 'phone'
                }
            ]
        },
        dockedItems: [{
            xtype: 'pagingtoolbar',
            store: 'contactList',
            dock: 'bottom',
            displayInfo: true
        }, {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            defaults: {cls: 'btn-orange'},
            items: ['->', {
                text: 'Remove',
                reference: 'btnRemoveContact',
                disabled: true,
                listeners: {
                    click: 'onRemove'
                },
            }, {
                text: 'Create',
                listeners: {
                    click: 'onCreate'
                },
            }, {
                text: 'Save',
                listeners: {
                    click: 'onSave'
                },
            }]
        }]
    }]

});