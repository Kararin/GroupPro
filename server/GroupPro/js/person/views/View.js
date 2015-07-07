var View = Backbone.View.extend ({

    viewTemplates: {
        'fullName': viewFullNameTpl,
        'genderAge': viewGenderAgeTpl,
        'passportData': viewPassportTpl
    },

    initialize: function () {
        this.$el.addClass('hidden');
    },

    initPerson: function (person) {
        this.model = person;
    },

    render: function (personData) {
        this.template = _.template(this.viewTemplates[personData]),
        this.$el.toggleClass('hidden');
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

