Ext.application({

    name: 'MyApp',
    // requires : ['pivot'],
    launch: function () {

        var store = new Ext.data.JsonStore({
            proxy: {
                type: 'ajax',
                url: 'expense.json',
                reader: {
                    type: 'json',
                    rootProperty: 'rows'
                }
            },
            autoLoad: true,
            fields: [
                {name: 'id', type: 'int'},
                {name: 'employee', type: 'string'},
                {name: 'amount', type: 'int'},
                {name: 'date', type: 'date', dateFormat: 'd/m/Y'},
                {name: 'cat', type: 'string'},
                {
                    name: 'year',
                    convert: function (v, record) {
                        return Ext.Date.format(record.get('date'), "Y");
                    }
                }
            ]
        });

        var pivotGrid = Ext.create('Ext.pivot.Grid', {
            renderTo: Ext.getBody(),
            title: 'Pivot Grid - Employee Expense Claims',
            height: 600,
            width: 700,
            enableLocking: false,
            viewConfig: {
                trackOver: true,
                stripeRows: false
            },
            tbar: [{
                xtype: 'combo',
                fieldLabel: 'Select report',
                flex: 1,
                editable: false,
                value: '1',
                store: [
                    ['1', 'How much an employee claimed in total?'],
                    ['2', 'What are the expense amounts of each employee in each category ? '],
                    ['3', 'How much an employee claimed in a specific year?']
                ],
                listeners:
                    {
                        select: function (combo, records, eOpts) {
                            switch (records.get('field1')) {
                                case '1':
                                    pivotGrid.reconfigurePivot({
                                        topAxis: []
                                    });
                                    break;
                                case '2':
                                    pivotGrid.reconfigurePivot({
                                        topAxis: [{
                                            dataIndex: 'cat',
                                            header: 'Category',
                                            direction: 'ASC'
                                        }]
                                    });
                                    break;
                                case '3':
                                    pivotGrid.reconfigurePivot({
                                        topAxis: [{
                                            dataIndex: 'year',
                                            header: 'Year',
                                            direction: 'ASC'
                                        }]
                                    });
                                    break;
                            }
                        }
                    }
            }],
            store: store,
            aggregate:
                [{
                    measure: 'amount',
                    header: 'Expense',
                    aggregator: 'sum',
                    align: 'right',
                    width: 85,
                    renderer: Ext.util.Format.numberRenderer('0,000.00')
                }],
            leftAxis:
                [{
                    width: 80,
                    dataIndex: 'employee',
                    header: 'Employee'
                }],
            topAxis: []
        });

    }
});