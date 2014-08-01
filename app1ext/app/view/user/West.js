Ext.define("Myapp.view.user.West", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.user.west',
    region: 'west',
    title: 'Dota',
    split: true,
    width: 200,
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{
            items: [
                {
                    html: '<img src="resources/dota5_1.jpg" width="200" height="590"/>'
                    //xtype: 'user.menu'

                }
            ]
        });
        me.callParent( arguments );
    }

});
