QUnit.test('GroupView', function (assert) {
	var student = new Person({
				'lastName': 'Иванов',
        		'name': 'Алексей',
                'secondName': 'Сергеевич',
                'age': 24,
                'gender': 'мужской',
                'passportData': 'АН457901',
                'idCode': 125678904
	}),
	group = new Group(student),
	groupView = new GroupView(),
	$el = $('<div></div>');

	groupView.collection = group;
	$el.append(groupView.render().el);

	console.log($el);

	assert.equal(1,1);
})