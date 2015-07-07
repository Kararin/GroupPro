function Controller () {
    var $elements = {
        'groupView': $('#groupView'),
        'tabView': $('#tabView'),
        'view': $('#view'),
        'preview': $('#preview')
    },
        tabView = new TabView(),
        groupView = new GroupView(),
        preview = new Preview();

        
    this.start = function () {
        $elements['groupView'].append(groupView.render().el);
        $elements['tabView'].append(tabView.render().el);
        $elements['view'].append(preview.render().el);
                
        tabView.initViewEl($elements['view']);
        
        m.subscribe('studentSelected', function (data) {
            tabView.view.initPerson(data);
            preview.initPerson(data);
        });

        m.subscribe('previewSelected', renderPreview);
    };

    function renderPreview () {
        preview.$el.toggleClass('hidden');
    };

    return this;
}

