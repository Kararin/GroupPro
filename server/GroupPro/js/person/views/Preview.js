var Preview = Backbone.View.extend ({
    template: _.template(previewTpl),
    model: new Person(),
    tagName: 'p',

    events: {
        'click #closePreview': 'hidePreview'
    },

    initPerson: function (person) {
        this.model = person;  
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    hidePreview : function () {
        this.$el.find('.preview').addClass('hidden');
    }
});

