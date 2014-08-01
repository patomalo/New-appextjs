Ext.define("Myapp.view.user.Edit2", {
    extend: 'Ext.window.Window',

    xtype: 'userEdit2',

    title: 'Edit Item',
    layout: 'fit',
    autoShow: true,
    modal: true,

    items: {
        xtype: 'form',
        items: [
            {xtype: 'textfield', name: 'nombre', fieldLabel: 'Nombre'},
            {xtype: 'textfield', name: 'precio', fieldLabel: 'Precio'},
            {xtype: 'textfield', name: 'requiere', fieldLabel: 'Requiere'},
            {xtype: 'textfield', name: 'informacion', fieldLabel: 'Informacion'}
        ]
    },

    buttons: [
        {text: 'Save', action: 'save'}
    ]
});