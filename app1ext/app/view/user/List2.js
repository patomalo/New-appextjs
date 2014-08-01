Ext.define("Myapp.view.user.List2", {
    extend: 'Ext.grid.Panel',
    xtype: 'userList2',
    title: 'Items - Puede editar haciendo doble click',
    store: 'Items',
    columns: [
        {header: 'Item', dataIndex: 'item', flex: 0.25},
        {header: 'Nombre', dataIndex: 'nombre', flex: 1},
        {header: 'Precio', dataIndex: 'precio', flex: 1},
        {header: 'Requiere', dataIndex: 'requiere', flex: 1},
        {header: 'Informacion', dataIndex: 'informacion', flex: 1}
    ]
});