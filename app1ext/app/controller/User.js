Ext.define('Myapp.controller.User', {
    extend: 'Ext.app.Controller',
    views:[
      'user.List'
    ],
    refs: [{
        ref: 'userList',
        selector: 'userlist'
    }],
    init: function(){
    	//debugger;
        var me = this;
    	me.control({
    		'viewport': {
    			render: me.onPanelRendered
            },
            'userList':{
                itemdblclick: me.editUser
            },
            'userList2':{
                itemdblclick: me.editItem
            },
            'userEdit button[action=save]': {
                click: me.saveUser
            },
            'userEdit2 button[action=save]': {
                click: me.saveItem
            },
            'userList button[action=destroy]':{
                click: me.destroyUser
            }
    	});
    },
    onPanelRendered: function() {
    	//debugger;
        console.log("We're working with controller and i am learning and\n the panel was rendered");
    },

    editUser: function(grid, record){
        console.log("I clicked the item....i will be the best ",record.get('nombre'));

        var userEditDialog = Ext.widget('userEdit');

        userEditDialog.down('form').loadRecord(record);
    },
    saveUser: function(button){
        var win = button.up('window'),
        form = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();

        record.set(values);
        win.close();
    },

    editItem: function(grid,record){
        console.log("i practicing here ",record.get('nombre'));
        var userEditDialog = Ext.widget('userEdit2');

        userEditDialog.down('form').loadRecord(record);
    },
    saveItem: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
    },

    destroyUser: function(grid,record){
        console.log("algo paso ",record," ",grid);
        //var records = this.getUserList().getSelectionModel();
        //console.log(records);
    }
});
