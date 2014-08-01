Ext.define('Myapp.Application', {
    name: 'Myapp',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
        'user.List',
        'user.List1',
        'user.Edit',
        'user.West',
        'user.List2',
        'user.Edit2'
    ],

    controllers: [
        'User'
        // TODO: add controllers here
    ],

    stores: [
        'Users',
        'Items'
        // TODO: add stores here
    ]
});
