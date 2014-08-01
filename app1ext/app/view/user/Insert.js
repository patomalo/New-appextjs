/**
 * Created by Alvaro M Patty Cruz on 27/07/2014.
 */
Ext.define("Myapp.view.user.Insert", {
    extend: 'Ext.window.Window',

    xtype: 'userInsert',

    title: 'Insert user',
    layout: 'fit',
    autoShow: true,

    items: {
        xtype: 'form',
        items: [
            {xtype: 'textfield', name: 'name', fieldLabel: 'Name'},
            {xtype: 'textfield', name: 'email', fieldLabel: 'Email'}
        ]
    },

    buttons: [
        {text: 'Save', action: 'save'}
    ]
});
