Ext.define("Myapp.view.user.Edit", {
    extend: 'Ext.window.Window',

    xtype: 'userEdit',

    title: 'Edit Hero',
    layout: 'fit',
    autoShow: true,
    modal: true,

    items: {
        xtype: 'form',
        items: [
            {xtype: 'textfield', name: 'nombre', fieldLabel: 'Nombre'},
            {xtype: 'textfield', name: 'clase', fieldLabel: 'Clase'},
            {xtype: 'textfield', name: 'equipo', fieldLabel: 'Equipo'},
            {xtype: 'textfield', name: 'ataque', fieldLabel: 'Ataque'}
        ]
    },

    buttons: [
        {text: 'Save', action: 'save'}
    ]
});