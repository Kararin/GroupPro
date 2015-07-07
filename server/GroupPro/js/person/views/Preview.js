var Preview = Backbone.View.extend ({
    template: _.template(previewTpl),
   
    initialize: function () {
       this.$el.addClass('hidden');
    },

    initPerson: function (person) {
        this.model = person;  
    },

    render: function () {
        if(this.model)
            this.$el.html(this.template(this.model.toJSON()));
        this.$el.toggleClass('hidden');
        this.$el.find('#closePreview').on('click', this.hidePreview);
        return this;
    },

    hidePreview : function () {
        this.$el.toggleClass('hidden');
    }
});

