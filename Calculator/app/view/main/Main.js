Ext.define('ExtCalculator.view.main.Main',{
    extend: 'Ext.window.Window',
    requires: ['ExtCalculator.view.main.MainController','ExtCalculator.view.main.MainModel'],
    xtype:'app-main',
    controller:'calculatorcontroller',

    /*View model of the view*/
    viewModel:{type:'mainmodel'},

    resizable:false,
    layout:{
        type:'table',
        columns:4
    },

    /* Defaults properties to be used for the child items */
    defaultType:'button',
    defaults:{
        width:50,
        height:50,
        cls:'btn',
        handler: 'onClickNumber'
    },


    header: {
        items: [
            {
                xtype: 'displayfield',
                colspan: 4,
                width: 200,
                cls: 'display',
                bind: { value: '{display}' },
                height: 60,
                padding: 0
            }]
    },
    items: [{
        text: 'C',
        colspan: 2,
        width: 100,
        cls: 'btn-green',
        handler: 'onClickClear'
    }, {
        text: '+/-',
        cls: 'btn-green',
        handler: 'onClickChangeSign'
    }, {
        text: '&divide;',
        cls: 'btn-orange',
        handler: 'onClickOp'
    },
        { text: '7' },
        { text: '8' },
        { text: '9' },
        { text: '&times;',
            cls: 'btn-orange',
            handler: 'onClickOp'
        },
        { text: '4'},
        { text: '5'},
        { text: '6'},
        {
            text: '-',
            cls: 'btn-orange',
            handler: 'onClickOp'
        },
        { text: '1'},
        { text: '2'},
        { text: '3'},
        {
            text: '+',
            cls: 'btn-orange',
            handler: 'onClickOp'
        }, {
            text: '0',
            width: 100,
            colspan: 2
        }, {
            text: '.',
            handler: 'onClickDot'
        }, {
            text: '=',
            cls: 'btn-orange',
            handler: 'onClickOp'
        }, {
            xtype: 'displayfield',
            colspan: 4,
            width: 'auto',
            height:20,
            cls: 'white-bg',
            bind: { value: '{operation}' },
        }]
});