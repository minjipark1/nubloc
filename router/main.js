module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index.html')
    });

    app.get('/about', function (req, res) {
        res.render('about.html');
    });

    app.get('/wolsung/', function (req, res) {
        res.render('wolsung.html');
    });

    app.get('/wolsung/1', function (req, res) {
        res.render('wolsung-1.html');
    });

    app.get('/wolsung/1/20200510/2', function (req, res) {
        res.render('wolsung-1-20200510-2.html');
    });

    app.get('/wolsung/1/20200816/2', function (req, res) {
        res.render('wolsung-1-20200816-2.html');
    });

    app.get('/wolsung/1/20200816/3', function (req, res) {
        res.render('wolsung-1-20200816-3.html');
    });

    app.get('/wolsung/02', function (req, res) {
        res.render('wolsung-02.html');
    });

    app.get('/wolsung/2/20190906/2', function (req, res) {
        res.render('wolsung-02-20190906-2.html');
    });

    app.get('/wolsung/2/20190906/3', function (req, res) {
        res.render('wolsung-02-20190906-3.html');
    });

    app.get('/wolsung/2', function (req, res) {
        res.render('wolsung-2');
    });

    app.get('/wolsung/3', function (req, res) {
        res.render('wolsung-3.html');
    });

    app.get('/wolsung/3/20190121/2', function (req, res) {
        res.render('wolsung-3-20190121-2.html');
    });

    app.get('/wolsung/3/20190121/3', function (req, res) {
        res.render('wolsung-3-20190121-3.html');
    });

    app.get('/wolsung/4', function (req, res) {
        res.render('wolsung-4.html');
    });

    app.get('/hanbit/', function (req, res) {
        res.render('hanbit.html');
    });

    app.get('/hanbit/1', function (req, res) {
        res.render('hanbit-1.html');
    });

    app.get('/hanbit/1/20190103/2', function (req, res) {
        res.render('hanbit-1-20190103-2.html');
    });

    app.get('/hanbit/1/20190103/3', function (req, res) {
        res.render('hanbit-1-20190103-3.html');
    });

    app.get('/hanbit/1/20190309/2', function (req, res) {
        res.render('hanbit-1-20190309-2.html');
    });

    app.get('/hanbit/1/20190309/3', function (req, res) {
        res.render('hanbit-1-20190309-3.html');
    });

    app.get('/hanbit/1/20190510/2', function (req, res) {
        res.render('hanbit-1-20190510-2.html');
    });

    app.get('/hanbit/1/20190510/3', function (req, res) {
        res.render('hanbit-1-20190510-3.html');
    });

    app.get('/hanbit/2', function (req, res) {
        res.render('hanbit-2.html');
    });

    app.get('/hanbit/2/20190124/2', function (req, res) {
        res.render('hanbit-2-20190124-2.html');
    });

    app.get('/hanbit/2/20190124/3', function (req, res) {
        res.render('hanbit-2-20190124-3.html');
    });

    app.get('/hanbit/3', function (req, res) {
        res.render('hanbit-3.html');
    });

    app.get('/hanbit/3/20190711/2', function (req, res) {
        res.render('hanbit-3-20190711-2.html');
    });

    app.get('/hanbit/3/20190711/3', function (req, res) {
        res.render('hanbit-3-20190711-3.html');
    });

    app.get('/hanbit/4', function (req, res) {
        res.render('hanbit-4.html');
    });

    app.get('/hanbit/4/20190711/2', function (req, res) {
        res.render('hanbit-4-20190711-2.html');
    });

    app.get('/hanbit/4/20190711/3', function (req, res) {
        res.render('hanbit-4-20190711-3.html');
    });

    app.get('/hanbit/5', function (req, res) {
        res.render('hanbit-5.html');
    });

    app.get('/hanbit/6', function (req, res) {
        res.render('hanbit-6.html');
    });

    app.get('/hanwool/', function (req, res) {
        res.render('hanwool.html');
    });

    app.get('/hanwool/1', function (req, res) {
        res.render('hanwool-1.html');
    });

    app.get('/hanwool/2', function (req, res) {
        res.render('hanwool-2.html');
    });

    app.get('/hanwool/2/20190704/2', function (req, res) {
        res.render('hanwool-2-20190704-2.html');
    });

    app.get('/hanwool/2/20190704/3', function (req, res) {
        res.render('hanwool-2-20190704-3.html');
    });

    app.get('/hanwool/3', function (req, res) {
        res.render('hanwool-3.html');
    });

    app.get('/hanwool/4', function (req, res) {
        res.render('hanwool-4.html');
    });

    app.get('/hanwool/5', function (req, res) {
        res.render('hanwool-5.html');
    });

    app.get('/hanwool/6', function (req, res) {
        res.render('hanwool-6.html');
    });

    app.get('/hanwool/6/20190308/2', function (req, res) {
        res.render('hanwool-6-20190308-2.html');
    });

    app.get('/hanwool/6/20190308/3', function (req, res) {
        res.render('hanwool-6/20190308/3.html');
    });

    app.get('/hanwool/6/20200719/2', function (req, res) {
        res.render('hanwool-6-20200719-2.html');
    });

    app.get('/hanwool/6/20200719/3', function (req, res) {
        res.render('hanwool-6/20200719/3.html');
    });

    app.get('/saewool', function (req, res) {
        res.render('saewool.html');
    });

    app.get('/saewool/02', function (req, res) {
        res.render('saewool-02.html');
    });

    app.get('/kori/', function (req, res) {
        res.render('kori.html');
    });

    app.get('/kori/1', function (req, res) {
        res.render('kori-1.html');
    });

    app.get('/kori/1/20200903/2', function (req, res) {
        res.render('kori-1-20200903-2.html');
    });

    app.get('/kori/01', function (req, res) {
        res.render('kori-01.html');
    });

    app.get('/kori/01/20200903/2', function (req, res) {
        res.render('kori-01-20200903-2.html');
    });

    app.get('/kori/02', function (req, res) {
        res.render('kori-02.html');
    });

    app.get('/kori/02/20200903/2', function (req, res) {
        res.render('kori-02-20200903-2.html');
    });

    app.get('/kori/2', function (req, res) {
        res.render('kori-2.html');
    });

    app.get('/kori/3', function (req, res) {
        res.render('kori-3.html');
    });

    app.get('/kori/4', function (req, res) {
        res.render('kori-4.html');
    });

    app.get('/kori/2/20200903/2', function (req, res) {
        res.render('kori-2-20200903-2.html');
    });

    app.get('/kori/3/20200903/2', function (req, res) {
        res.render('kori-3-20200903-2.html');
    });

    app.get('/kori/4/20200903/2', function (req, res) {
        res.render('kori-4-20200903-2.html');
    });

    app.get('/kori/4/20190220/2', function (req, res) {
        res.render('kori-4-20190220-2.html');
    });

    app.get('/kori/4/20190220/3', function (req, res) {
        res.render('kori-4-20190220-3.html');
    });

    app.get('/hanwool/2/20190704/3', function (req, res) {
        res.render('hanwool-2-20190704-3.html');
    });

    app.get('/hanwool/3', function (req, res) {
        res.render('hanwool-3.html');
    });

    app.get('/hanwool/4', function (req, res) {
        res.render('hanwool-4.html');
    });

    app.get('/hanwool/5', function (req, res) {
        res.render('hanwool-5.html');
    });

    app.get('/hanwool/6', function (req, res) {
        res.render('hanwool-6.html');
    });

    app.get('/hanwool/6/20190308/2', function (req, res) {
        res.render('hanwool-6-20190308-2.html');
    });

    app.get('/hanwool/6/20190308/3', function (req, res) {
        res.render('hanwool-6/20190308/3.html');
    });

    app.get('/hanwool/6/20200719/2', function (req, res) {
        res.render('hanwool-6-20200719-2.html');
    });

    app.get('/hanwool/6/20200719/3', function (req, res) {
        res.render('hanwool-6/20200719/3.html');
    });

    app.get('/saewool', function (req, res) {
        res.render('saewool.html');
    });

    app.get('/saewool/02', function (req, res) {
        res.render('saewool-02.html');
    });

    app.get('/kori/', function (req, res) {
        res.render('kori.html');
    });

    app.get('/kori/1', function (req, res) {
        res.render('kori-1.html');
    });

    app.get('/kori/1/20200903/2', function (req, res) {
        res.render('kori-1-20200903-2.html');
    });

    app.get('/kori/01', function (req, res) {
        res.render('kori-01.html');
    });

    app.get('/kori/01/20200903/2', function (req, res) {
        res.render('kori-01-20200903-2.html');
    });

    app.get('/kori/02', function (req, res) {
        res.render('kori-02.html');
    });

    app.get('/kori/02/20200903/2', function (req, res) {
        res.render('kori-02-20200903-2.html');
    });

    app.get('/kori/2', function (req, res) {
        res.render('kori-2.html');
    });

    app.get('/kori/3', function (req, res) {
        res.render('kori-3.html');
    });

    app.get('/kori/4', function (req, res) {
        res.render('kori-4.html');
    });

    app.get('/kori/2/20200903/2', function (req, res) {
        res.render('kori-2-20200903-2.html');
    });

    app.get('/kori/3/20200903/2', function (req, res) {
        res.render('kori-3-20200903-2.html');
    });

    app.get('/kori/4/20200903/2', function (req, res) {
        res.render('kori-4-20200903-2.html');
    });

    app.get('/kori/4/20190220/2', function (req, res) {
        res.render('kori-4-20190220-2.html');
    });

    app.get('/kori/4/20190220/3', function (req, res) {
        res.render('kori-4-20190220-3.html');
    });
}