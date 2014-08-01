Ext.define("Myapp.view.user.List", {
    extend: 'Ext.grid.Panel',
    xtype: 'userList',
    title: 'Heroes - Puede editar haciendo doble click',

    store: 'Users',

    columns: [
        {header: 'Heroe', dataIndex: 'heroe', flex: 0.25},
        {header: 'Nombre', dataIndex: 'nombre', flex: 1},
        {header: 'Clase', dataIndex: 'clase', flex: 1},
        {header: 'Equipo', dataIndex: 'equipo', flex: 1},
        {header: 'Ataque', dataIndex: 'ataque', flex: 1}
    ]
});