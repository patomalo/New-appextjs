Ext.define('Myapp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Myapp.view.user.West'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'user.west'
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Defense of the Ancients',
            items: [
                {xtype: 'userList1'}
            ]
        },{
            title: 'Heroes',
            items: [
                {xtype: 'userList'}
            ]
        },{
            title: 'Items',
            items:[
                {xtype: 'userList2'}
            ]
        }]
    },{
        region: 'north',
        xtype: 'panel',
        bodyPadding: 5,
        html: '<img src="resources/dota.jpg" /><h1>Dota (Defense of the Ancients)</h1>',
        cls: 'header'
    }]
});