const koriData = [{
        "url": "kori002",
        "subtitle": "2호기"
    },
    {
        "url": "kori003",
        "subtitle": "3호기"
    },
    {
        "url": "kori004",
        "subtitle": "4호기"
    },
    {
        "url": "kori011",
        "subtitle": "신1호기"
    },
    {
        "url": "kori012",
        "subtitle": "신2호기"
    }
]

const hanbitData = [{
        "url": "hanbit001",
        "subtitle": "1호기"
    },
    {
        "url": "hanbit002",
        "subtitle": "2호기"
    },
    {
        "url": "hanbit003",
        "subtitle": "3호기"
    },
    {
        "url": "hanbit004",
        "subtitle": "4호기"
    },
    {
        "url": "hanbit005",
        "subtitle": "5호기"
    },
    {
        "url": "hanbit006",
        "subtitle": "6호기"
    }
]

const wolsungData = [{
        "url": "wolsung001",
        "subtitle": "1호기"
    },
    {
        "url": "wolsung002",
        "subtitle": "2호기"
    },
    {
        "url": "wolsung003",
        "subtitle": "3호기"
    },
    {
        "url": "wolsung004",
        "subtitle": "4호기"
    },
    {
        "url": "wolsung011",
        "subtitle": "신1호기"
    },
    {
        "url": "wolsung012",
        "subtitle": "신2호기"
    }
]

const hanwoolData = [{
        "url": "hanwool001",
        "subtitle": "1호기"
    },
    {
        "url": "hanwool002",
        "subtitle": "2호기"
    },
    {
        "url": "hanwool003",
        "subtitle": "3호기"
    },
    {
        "url": "hanwool004",
        "subtitle": "4호기"
    },
    {
        "url": "hanwool005",
        "subtitle": "5호기"
    },
    {
        "url": "hanwool006",
        "subtitle": "6호기"
    }
]

const saewoolData = [{
    "url": "saewool002",
    "subtitle": "2호기"
}, ]

// 001  001  001  
// 001: kori, 002: hanbit, 003: wolsung, 004: hanwool, 005: saewool
// 001: 1호기, 002: 2호기, 003: 3호기, 004: 4호기, 005: 5회기, 006: 6호기 , 011: 신1호기, 012: 신2호기
// 001: 첫번째 발생이력, 002: 두번째 발생이력



const kori02Event = [{
        "createdAt": "2019.05.10",
        "url": "kori.002.001",
        "values": {
            "name": "kori03",
            "after30": "2",
            "after60": "3",
            "after240": "2",
            "afterfirefight": "3",
            "afterkins": "2"
        },
        "reports": {
            "name": "kori03",
            "after30": "2",
            "after60": "3",
            "after240": "2",
            "afterfirefight": "3",
            "afterkins": "2"
        }
    },
    {
        "createdAt": "2019.06.10",
        "url": "kori.002.002",
        "values": {
            "name": "kori03",
            "after30": "2",
            "after60": "3",
            "after240": "2",
            "afterfirefight": "3",
            "afterkins": "2"
        }
    },
    {
        "createdAt": "2019.08.10",
        "url": "kori.002.003",
        "values": {
            "name": "kori03",
            "after30": "13",
            "after60": "3",
            "after240": "2",
            "afterfirefight": "3",
            "afterkins": "2"
        }
    }
]




const kori03Event = [{
    "createdAt": "2019.05.10",
    "url": "kori.003.001",
    "values": {
        "name": "kori04",
        "after30": "2",
        "after60": "3",
        "after240": "2",
        "afterfirefight": "3",
        "afterkins": "2"
    },
    "reports": {
        "name": "kori03",
        "after30": "2",
        "after60": "3",
        "after240": "2",
        "afterfirefight": "3",
        "afterkins": "2"
    }
},
{
    "createdAt": "2019.06.10",
    "url": "kori.003.002",
    "values": {
        "name": "kori04",
        "after30": "2",
        "after60": "3",
        "after240": "2",
        "afterfirefight": "3",
        "afterkins": "2"
    }
},
{
    "createdAt": "2019.08.10",
    "url": "kori.003.003",
    "values": {
        "name": "kori04",
        "after30": "13",
        "after60": "3",
        "after240": "2",
        "afterfirefight": "3",
        "afterkins": "2"
    }
}
]

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('pages/home')
    });

    app.get('/reporting/:detail', function (req, res) {
        // let name = req.params.index
        let detail = req.params.detail
        let tokenParts = detail.split(".");

        let location = tokenParts[0]
        let name = tokenParts[1]
        let mdate = tokenParts[2]

        console.log("location : ", location + " ,name:", name + ", mdate: ", mdate);

        let result = ""
        let select = ""

        console.log("detail : ", detail);

        switch (location) {
            case "kori":
                result = "고리";
                break;
            case "hanbit":
                result = "한빛";
                break;
            case "wolsung":
                result = "월성";
                break;
            case "hanwool":
                result = "한울";
                break;
            case "saewool":
                result = "새울";
                break;
        }

        switch (name) {
            case "001":
                select = "1호기";
                break;
            case "002":
                select = "2호기";
                break;
            case "003":
                select = "3호기";
                break;
            case "004":
                select = "4호기";
                break;
            case "005":
                select = "5호기";
                break;
            case "006":
                select = "6호기";
                break;
            case "011":
                select = "신1호기";
                break;
            case "012":
                select = "신2호기";
                break;
        }

        let tracks = {}


        tracks = {
            location: result,
            locationUrl: location,
            name: select,
            nameUrl: location + name,
            human: "box2",
            machine: "box2",
            measurement: "box2",
            electrical: "box2",
            external: "box2",
            etc: "box1",

        }


        console.log("tracks : ", tracks);
        console.log(" kori02Event[2].values : ", kori02Event[2].values);
        console.log(" kori03Event[2].values : ", kori03Event[2].values);

        res.render("pages/report", {
            tracks: tracks
        }); // end of render 
    }) // end of get


    app.get('/tracking/:detail', function (req, res) {
        // let name = req.params.index
        let detail = req.params.detail
        let tokenParts = detail.split(".");

        let location = tokenParts[0]
        let name = tokenParts[1]
        let mdate = tokenParts[2]

        console.log("location : ", location + " ,name:", name + ", mdate: ", mdate);

        let result = ""
        let select = ""

        console.log("detail : ", detail);

        switch (location) {
            case "kori":
                result = "고리";
                break;
            case "hanbit":
                result = "한빛";
                break;
            case "wolsung":
                result = "월성";
                break;
            case "hanwool":
                result = "한울";
                break;
            case "saewool":
                result = "새울";
                break;
        }

        switch (name) {
            case "001":
                select = "1호기";
                break;
            case "002":
                select = "2호기";
                break;
            case "003":
                select = "3호기";
                break;
            case "004":
                select = "4호기";
                break;
            case "005":
                select = "5호기";
                break;
            case "006":
                select = "6호기";
                break;
            case "011":
                select = "신1호기";
                break;
            case "012":
                select = "신2호기";
                break;
        }

        let tracks = {}


        tracks = {
            location: result,
            locationUrl: location,
            name: select,
            nameUrl: location + name,
            value: kori02Event[2].values
        }


        console.log("tracks : ", tracks);
        console.log(" kori02Event[2].values : ", kori02Event[2].values);
        console.log(" kori03Event[2].values : ", kori03Event[2].values);

        res.render("pages/tracking", {
            tracks: tracks
        }); // end of render 
    }) // end of get

    app.get('/operation/:detail', function (req, res) {
        // let name = req.params.index
        let detail = req.params.detail
        console.log("detail : ", detail);

        let events = {}

        switch (detail) {
            case 'kori002':
                events = {
                    name: "고리",
                    title: "2호기",
                    value: kori02Event
                }
                break;
            case 'b':
                break;
            default:
                res.status(404).send('Unable to find the requested resource!');
                break;
        }

        switch (detail) {
            case 'kori003':
                events = {
                    name: "고리",
                    title: "3호기",
                    value: kori03Event
                }
                break;
            case 'b':
                break;
            default:
                res.status(404).send('Unable to find the requested resource!');
                break;
        }


        console.log("events : ", events);

        res.render("pages/detail", {
            events: events
        }); // end of render 
    }) // end of get


    app.get('/location/:loc/', function (req, res) {
        // let name = req.params.index
        let location = req.params.loc
        console.log("location : ", location);

        let lists = {}

        switch (location) {
            case 'kori':
                lists = {
                    title: '고리',
                    image: '/img/kori.jpg',
                    contents: '고리원자력발전소는 1992년부터 운영을 시작했습니다.',
                    value: koriData
                };
                break;
            case 'hanbit':
                lists = {
                    title: '한빛',
                    image: '/img/hanbit.jpg',
                    value: hanbitData
                };
                break;
            case 'wolsung':
                lists = {
                    title: '월성',
                    image: '/img/wolsung.jpg',
                    value: wolsungData
                };
                break;
            case 'hanwool':
                lists = {
                    title: '한울',
                    image: '/img/hanwool.jpg',
                    value: hanwoolData
                };
                break;
            case 'saewool':
                lists = {
                    title: '새울',
                    image: '/img/saewool.jpg',
                    value: saewoolData
                };
                break;
            default:
                res.status(404).send('Unable to find the requested resource!');
                break;
        }

        console.log("lists : ", lists);


        res.render("pages/location", {
            lists: lists
        });
    });

}