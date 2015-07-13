function Controller () {
    var $elements = {
        'groupView': $('#groupView'),
        'tabView': $('#tabView'),
        'view': $('#view')
    },
        tabView = new TabView(),
        groupView = new GroupView(),
        preview = new Preview();
        
    this.start = function () {
        $elements['groupView'].append(groupView.render().el);
        tabView.initViewEl($elements['view']);
        $elements['tabView'].append(tabView.render().el);
                                       
        m.subscribe('studentSelected', renderViews);
    };

    function renderViews (data) {
        tabView.view.initPerson(data);
        $elements['view'].append(tabView.view.render().el);
        preview.initPerson(data);
        $elements['view'].append(preview.render().el);
    };   

    return this;
}

