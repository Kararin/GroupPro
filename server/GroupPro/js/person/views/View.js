var View = Backbone.View.extend ({
    tagName: 'table',
    className: 'myTable',

    viewTemplates: {
        'fullName': viewFullNameTpl,
        'genderAge': viewGenderAgeTpl,
        'passportData': viewPassportTpl
    },

    initPerson: function (person) {
        this.model = person;
    },

    render: function (personData) {
        this.template = _.template(this.viewTemplates[personData]);
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

