//Test Suite - Mathematical Operations

const { describe } = require("mocha");

//Test Cases

//1.Addition
//2.Subtraction
//3.Multiplication
//4.Division

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

    this.timeout(5000);

    it('Addition of two numbers', function(done){
      
        this.timeout(500);

        setTimeout(done,3000);
      
        var a = 10;
        var b = 10;

        var c = a+b;

        assert.equal(c,20);
    });

    it('Subtraction of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a-b;

        assert.equal(c,0);
    });


    //it.only()-Run only this.
    it('Multiplication of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a*b;

        assert.equal(c,100);
    });


    //it.skip()-To skip run test cases
    //If we only add it function description. This will become pending test case.
    it('Division of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a/b;

        assert.equal(c,1);
    });
});