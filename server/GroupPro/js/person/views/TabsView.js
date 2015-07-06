var TabView = Backbone.View.extend({
    template: _.template(tabTpl),
    view: new View(),

    events: {
        'click #name': 'showFullName',
        'click #age': 'showAgeGender',
        'click #passport': 'showPassport',
        'click #preview': 'showPreview'
    },

    showFullName: function () {
        this.$el.append(this.view.render('fullName').el);
    },

    showAgeGender: function () {
        this.$el.append(this.view.render('genderAge').el);
    },
    
    showPassport: function () {
        this.$el.append(this.view.render('passportData').el);
    },
    
    showPreview: function () {
        m.publish('previewSelected');
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    }
    
});

