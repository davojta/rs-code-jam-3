const {recursion} = require('./../recursion');
var assert = require('assert');

describe('task', function() {
    describe('recursion', function() {
      it('should return array', function() {
          const tree = { "value":120 };
          console.log('recursion', recursion);
          
  
        assert.deepEqual(recursion(tree), [[120]]);
      });
      it('should return basic branch array', function() {
          var tree = {"value":120,"left":{"value":110},"right":{"value":130}};


          assert.deepEqual(recursion(tree), [[120], [110, 130]]);
      } )
      it('should return basic branch array', function() {
        var tree = {"value":120,"left":{"value":110 },"right":{"value":130}};


        assert.deepEqual(recursion(tree), [[120], [110, 130]]);
      });
      it.only('should return 2 depth branch array', function() {
        var tree = {"value":120,"left":{"value":110, "left":{"value":110},"right":{"value":130}},"right":{"value":130}};


        assert.deepEqual(recursion(tree), [[120], [110, 130], [110, 130]]);
      })
    });
  });