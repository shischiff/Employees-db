var expect = require("chai").expect;
var app = require("../app");
var request = require("request");

describe ("Basic Get", function() {
    it ("returns 200 OK ", function (){
        var url = "http://localhost:3000/employee/new"
        request(url, function(err, res, body){
            expect(res.statusCode).to.equal(201)
        });
    });
});
