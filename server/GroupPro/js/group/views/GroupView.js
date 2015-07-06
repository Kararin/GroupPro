var GroupView = Backbone.View.extend({
    tagName : 'ul',

    initialize : function () {
        this.collection = new Group();
        this.collection.on('add', this.getStudentsView, this); 
        this.collection.fetch();    
        this.render();
    },

    getStudentsView : function (student) {
        var studentView = new StudentView({model : student});
        this.$el.append(studentView.render().el);
    },

    render : function () {
        return this;
    }


});
