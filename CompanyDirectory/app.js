Ext.application({

    name: 'MyApp',

    launch: function () {
        Ext.define('Product', {
            extend: 'Ext.data.Model',
            fields: ['id', 'productname', 'desc', 'price']
        });

        var productStore = Ext.create('Ext.data.Store', {
            model: 'Product',
            pageSize: 2,
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'data.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    totalProperty: 'total'
                }
            },
            groupField : 'type'
        });

        Ext.create('Ext.grid.Panel', {
            renderTo: Ext.getBody(),
            store: productStore,
            plugins: ['rowediting','gridfilters'],
            // width: 600,
            title: 'Products',
            features: [{
                id: 'group',
                ftype:'grouping',
                groupHeaderTpl : '{name}',
                hideGroupedHeader: true,
                enableGroupingMenu:true
            }],
            columns: [{
                text: 'Id',
                dataIndex: 'id',
                hidden: true
            },
                {
                    text: 'Name',
                    width: 150,
                    dataIndex: 'productname',
                    filter: 'string',
                    editor: {
                        allowBlank:false,
                        type:'string'
                    }
                },
                {
                    text: 'Description',
                    dataIndex: 'desc',
                    sortable: false,
                    flex: 1,
                    filter: {
                        type: 'string',
                        itemDefaults: {
                            emptyText: 'Search for...'
                        }
                    },
                    groupable :  false
                },
                {
                    text: 'price',
                    width: 100,
                    dataIndex: 'price',
                    renderer: function (value) {
                        return Ext.String.format('${0}', value);
                    }
                },
                {
                    text : 'Type',
                    width:100,
                    dataIndex:'type',
                    editor : new Ext.form.field.ComboBox({
                        typeAhead: true,
                        triggerAction: 'all',
                        store : [
                            ['Bath','Bath'],
                            ['Kitchen','Kitchen'],
                            ['Electronic','Electronic'],
                            ['Food', 'Food'],
                            ['Computer', 'Computer']
                        ]
                    })
                }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: productStore,
                dock: 'bottom',
                displayInfo: true
            }]
        });

    }
});