var Person = Backbone.Model.extend({
    defaults : {
        'name': '',
        'lastName': '',
        'secondName': '',
        'age': 0,
        'gender': '',
        'passportData': '',
        'idCode': 0        
    },

    getFullName : function () {
        var fullName = this.get('lastName') + ' ' + this.get('name') + ' ' + this.get('secondName');
        return fullName;
    }
});


