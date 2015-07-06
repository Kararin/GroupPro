var Preview = Backbone.View.extend ({
    template: _.template(previewTpl),
    tagName: 'table',

    initPerson : function (person) {
        this.model = person;  
    },

    render : function () {
         this.$el.html(this.template(this.model.toJSON()));
         this.$el.find('#closePreview').on('click', this.hidePreview);
        return this;
    },

    hidePreview : function () {
        m.publish('closePreviewSelected');  
    }
});

