function Controller () {
    var $groupViewEl = $('#groupView'),
        $tabViewEl = $('#tabView'),
        tabView = new TabView(),
        groupView = new GroupView(),
        preview = new Preview();

        
    this.start = function () {
        $groupViewEl.append(groupView.render().el);
        $tabViewEl.append(tabView.render().el);
        
        m.subscribe('studentSelected',function (data) {
            tabView.view.initPerson(data);
            preview.initPerson(data);
            clear();
        });

        m.subscribe('previewSelected', renderPreview);

        m.subscribe('closePreviewSelected', function () {
            preview.remove();
        });


    };

    function renderPreview () {
        $tabViewEl.append(preview.render().el);
    };

    function clear () {
        tabView.view.remove();
        preview.remove();
    }
    
    return this;
}

