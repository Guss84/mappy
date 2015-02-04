var express = require('express');
var router = express.Router();
var fs = require("fs"),
    json;

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

//assume that config.json is in application root

o = getConfig('gi_world.json');

router.get('/', function(req, res){
     //var gi=o;
     res.json(o);
});

module.exports = router;

