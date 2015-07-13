var TabView = Backbone.View.extend({
    view: new View(),
    $viewEl: '',

    titles: {
            'Имя': 'fullName',
            'Возраст': 'ageGender',
            'Паспортные данные': 'passportData',
            'Вся информация': 'preview'
    },

    events: {
        'click button': 'renderData'
    },

    renderData: function (event) {
        var targetName = $(event.target).attr('name'),
            $chosenElement = this.$viewEl.find('.' + targetName);

        this.$viewEl.find('div').map( function () {
           $(this).addClass('hidden');
        });
        $chosenElement.removeClass('hidden');
   },

    initViewEl: function ($el) {
        this.$viewEl = $el;
    },

    showPreview: function () {
        m.publish('previewSelected');
    },

    render: function () {
        this.$el.html(this.createButtons());
        return this;
    },

    createButtons: function () {
        var $button,
            $el = $('<div></div>');
        _.each(this.titles, function (buttonClass, title) {
            $button = $('<button name = ' + buttonClass + '>' + title + '</button>');
            $button.addClass('myButton');
            $el.append($button);
        });
        return $el;
    }       
});
