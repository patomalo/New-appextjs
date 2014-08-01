Ext.define('Myapp.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'heroe', type: 'image'},
        { name: 'nombre' },
        { name: 'clase' },
        { name: 'equipo' },
        { name: 'ataque'}

    ]
});
