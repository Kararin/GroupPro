var View = Backbone.View.extend ({
    template: _.template(viewTpl),
    model: new Person(),
    tagName: 'p',

    initPerson: function (person) {
        this.model = person;
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

