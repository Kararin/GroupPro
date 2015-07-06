var fs = require('fs'),
    path = require('path');

function showPage (response, pathName, extName) {
    var fileName = pathName.slice(1, pathName.length),
        contentTypes = {
            '.css' : 'text/css',
            '.html' : 'text/html',
            '.js' : 'text/javascript'   
        };

    console.log('Request handler "showPage" was called.');
  
    fs.readFile(fileName, function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {'Content-Type' : contentTypes[extName]});
            response.write(file);
        };
        response.end();
    });
};

function sayHello (response) {
    var text = 'Hello, I am a little server ))';

    console.log('Request handler "sayHello" was called.');

    response.writeHead(200,{'Content-Type' : 'text/plain'});
    response.write(text);
    response.end();
};

function getJSON (response) {
    var students = [{
                'lastName': 'Иванов',
                'name': 'Алексей',
                'secondName': 'Сергеевич',
                'age': 24,
                'gender': 'мужской',
                'passportData': 'АН457901',
                'idCode': 125678904
            },{
                'lastName': 'Борисова',
                'name': 'Алена',
                'secondName': 'Александровна',
                'age': 22,
                'gender': 'женский',
                'passportData': 'АК457901',
                'idCode': 99635163
            },{
                'lastName': 'Петров',
                'name': 'Андрей',
                'secondName': 'Игоревич',
                'age': 21,
                'gender': 'мужской',
                'passportData': 'НЕ49702',
                'idCode': 4869201
            },{
                'lastName': 'Селезень',
                'name': 'Дмитрий',
                'secondName': 'Сергеевич',
                'age': 24,
                'gender': 'мужской',
                'passportData': 'АН468280',
                'idCode': 5692124
            },{
                'lastName': 'Клименко',
                'name': 'Иван',
                'secondName': 'Александрович',
                'age': 25,
                'gender': 'мужской',
                'passportData': 'АК956781',
                'idCode': 12567890
            },{
                'lastName': 'Чегорко',
                'name': 'Карина',
                'secondName': 'Евгеньевна',
                'age': 21,
                'gender': 'женский',
                'passportData': 'АК956781',
                'idCode': 12567890
            },{
                'lastName': 'Белинский',
                'name': 'Максим',
                'secondName': 'Александрович',
                'age': 24,
                'gender': 'мужской',
                'passportData': 'АК314481',
                'idCode': 930139283
            },{
                'lastName': 'Андроник',
                'name': 'Сергей',
                'secondName': 'Анатольевич',
                'age': 23,
                'gender': 'мужской',
                'passportData': 'АН126789',
                'idCode': 91223467
        }];

    json = JSON.stringify(students);
    console.log('Request handler "getJSON" was called.');

    response.writeHead(200, {'Content-Type' : 'application/json' });
    response.write(json);
    response.end();
}

exports.sayHello = sayHello;
exports.showPage = showPage;
exports.getJSON = getJSON;
