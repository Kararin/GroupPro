
QUnit.module('Person', {
    beforeEach: function () {
        person = new Person({
                'lastName': 'Иванов',
                'name': 'Алексей',
                'secondName': 'Сергеевич',
                'age': 24,
                'gender': 'мужской',
                'passportData': 'АН457901',
                'idCode': 125678904
        });
    }
});

QUnit.test( "Check lastName", function (assert) {
    assert.equal(person.get('lastName'), 'Иванов', 'last name does not match');
});

QUnit.test( "Check name", function (assert) {
    assert.deepEqual(person.get('name'), 'Алексей', 'name does not match');
});

QUnit.test( "Check age", function (assert) {
    assert.deepEqual(person.get('age'), 24, 'age does not match');
});

QUnit.test( "Check gender", function (assert) {
    assert.deepEqual(person.get('gender'), 'мужской', 'gender does not match');
});

QUnit.test( "Check passportData", function (assert) {
    assert.deepEqual(person.get('passportData'), 'АН457901', 'passportData name does not match');
});

QUnit.test( "Check idCode", function (assert) {
    assert.deepEqual(person.get('idCode'), 125678904, 'idCode name does not match');
});

