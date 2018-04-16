Ext.application({
    name: 'Adv',

    launch: function () {

        Ext.define('Person', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'name', type: 'string'},
                {name: 'age', type: 'int'},
                {name: 'gender', type: 'int'}
            ]
        });

        Ext.create('Ext.data.Store', {
            id: 'employees',
            model: 'Person',
            data: [
                {name: 'Mike', age: 22, gender: 0},
                {name: 'Woo', age: 32, gender: 1},
                {name: 'John', age: 33, gender: 1},
                {name: 'Kalai', age: 25, gender: 0}
            ]
        });

        var empTpl = new Ext.XTemplate(
            '<tpl for=".">',
                '<div style="margin-bottom: 10px;" class="data-view">',
                    '<table style="width:100%">',
                        '<tr>',
                            '<td style="font-size: 100px;width:100px;" rowspan="3"><i class="fa fa-user"></i></td>',
                            '<td>Name: {name}</td>',
                        '</tr>',
                        '<tr>',
                            '<td>Age:{age}</td>',
                        '</tr>',
                        '<tr>',
                            '<td>Gender: <tpl if="gender == 1">',
                                '<i class="fa fa-mars"></i>',
                                    '<tpl else>',
                                        '<i class="fa fa-venus"></i>',
                                     '</tpl>' +
                            '</td>',
                        '</tr>' +
                    '</table>',
                '</div>',
            '</tpl>'
        );

        Ext.create('Ext.view.View', {
            store: Ext.getStore('employees'),
            tpl: empTpl,
            itemSelector: 'div.data-view',
            renderTo: Ext.getBody(),
            listeners:{
                itemclick: function(node, rec, item, index, e) {
                    alert(rec.data.name);
                }
            }
        });



        /**
         * Tree Views Examples
         */

        // var store = Ext.create('Ext.data.TreeStore', {
        //     root: {
        //         expanded: true,
        //         text: 'Continents',
        //         checked: false,
        //         children: [{
        //             text: 'Antarctica',
        //             population: 0,
        //             area: 14,
        //             leaf: true,
        //             checked: false,
        //         }, {
        //             text: 'South America',
        //             population: 385,
        //             area: 17.84,
        //             expanded: true,
        //             checked: true,
        //             children: [{
        //                 text: 'Brazil',
        //                 population: 385,
        //                 area: 58.66,
        //                 leaf: true,
        //                 checked: true,
        //             }, {
        //                 text: 'Chile',
        //                 population: 385,
        //                 area: 17.84,
        //                 leaf: true,
        //                 checked: true,
        //             }]
        //         }, {
        //             text: 'Asia',
        //             expanded: true,
        //             population: 385,
        //             area: 17.84,
        //             checked: true,
        //             children: [{
        //                 text: 'India',
        //                 leaf: true,
        //                 population: 385,
        //                 area: 17.84,
        //                 checked: true,
        //             }, {
        //                 text: 'China',
        //                 leaf: true,
        //                 population: 385,
        //                 area: 17.84,
        //                 checked: true,
        //             }]
        //         }, {
        //             text: 'Africa',
        //             leaf: true,
        //             checked: true,
        //             population: 5855,
        //             area: 542
        //         }]
        //     }
        // });
        //
        // Ext.create('Ext.tree.Panel', {
        //     title: 'Basic Tree Grid',
        //     width: 500,
        //     height: 450,
        //     store: store,
        //     rootVisible: false,
        //     userArrows: true,
        //     lines: false,
        //     renderTo: Ext.getBody(),
        //     columns: [{
        //         xtype: 'treecolumn',
        //         text: 'Name',
        //         flex: 1,
        //         sortable: true,
        //         dataIndex: 'text'
        //     }, {
        //         text: 'Population (millons)',
        //         sortable: true,
        //         width: 150,
        //         dataIndex: 'population'
        //     }, {
        //         text: 'Area (millons km^2)',
        //         width: 150,
        //         sortable: true,
        //         dataIndex: 'area'
        //     }]
        //     // viewConfig : {
        //     //     plugins: {
        //     //         ptype : 'treeviewdragdrop',
        //     //         containerScroll : true
        //     //     }
        //     // }
        // });

    }

});
