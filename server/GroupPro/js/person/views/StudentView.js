var StudentView = Backbone.View.extend({
    tagName : 'li',

    render : function () {
        this.$el.html(this.model.get('name'));
        return this;     
    },

    events : {
        'click' : 'studentSelected'
    },

    studentSelected : function () {
        m.publish('studentSelected', this.model);
    }
});


