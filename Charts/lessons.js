Ext.application({
    name: 'Charts',

    launch: function () {

        Ext.require('widget.chart');

        Ext.define('Charts.model.Population', {
            extend: 'Ext.data.Model',
            fields: ['year', 'total', 'slaves']
        });
        Ext.define('Charts.store.Population', {
            extend: 'Ext.data.Store',
            storeId: 'population',
            model: 'Charts.model.Population',
            data: [
                {"year": "1790", "total": 3.9, "slaves": 0.7},
                {"year": "1800", "total": 5.3, "slaves": 0.9},
                {"year": "1810", "total": 7.2, "slaves": 1.2},
                {"year": "1820", "total": 9.6, "slaves": 1.5},
                {"year": "1830", "total": 12.9, "slaves": 2},
                {"year": "1840", "total": 17, "slaves": 2.5},
                {"year": "1850", "total": 23.2, "slaves": 3.2},
                {"year": "1860", "total": 31.4, "slaves": 4}
            ]
        });

        var store = Ext.create("Charts.store.Population");


        Ext.create('Ext.Container', {
            renderTo: Ext.getBody(),
            width: 500,
            height: 500,
            layout: 'fit',
            items: [{
                xtype: 'chart',
                legend: {docked: 'bottom'},
                insetPadding: {top: 60, bottom: 20, left: 20, right: 40},
                store: store,
                axes: [{
                    type: 'numeric',
                    position: 'left',
                    grid: true,
                    title: {text: 'Population in Millions', fontSize: 16},
                }, {
                    type: 'category',
                    title: {text: 'Year', fontSize: 16},
                    position: 'bottom',
                }
                ],
                series: [{
                    type: 'area',
                    xField: 'year',
                    stacked: true,
                    title: ['Total', 'Slaves'],
                    yField: ['total', 'slaves'],
                    style: {
                        stroke: "#94ae0a",
                        fillOpacity: 0.6,
                    },
                    tooltip: {
                        trackMouse: true,
                        style: 'background: #fff',
                        renderer: function (tooltip, model, item) {
                            tooltip.setHtml('In ' + model.get('year') + ' ' + item.field + ' population was ' + model.get(item.field) + ' m');
                        }

                    }
                }],
                sprites: [{
                    type: 'text',
                    text: 'United States Population',
                    font: '25px Helvetica',
                    width: 120,
                    height: 35,
                    x: 100,
                    y: 40
                }, {
                    type: 'text',
                    text: 'Source: http://www.wikipedia.org',
                    fontSize: 10,
                    x: 12,
                    y: 440
                }]
            }
            ]
        })
        ;
    }
});
