Ext.application({
    name:'ExtCalculator',
    launch:function () {
        Ext.create('ExtCalculator.view.main.Main').show();
    }
});