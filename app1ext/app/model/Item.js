Ext.define('Myapp.model.Item', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'item', type: 'image' },
        { name: 'nombre' },
        { name: 'precio' },
        { name: 'requiere' },
        { name: 'informacion' }

    ]
});
