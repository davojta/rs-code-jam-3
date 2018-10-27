var assert = require('assert');


function isPalindrom(str) {
    var reversed = str.split('').reverse();

    console.log('reversed', reversed);




    return str === reversed.join('');
}


describe.skip('task', function() {
  describe('isPalindrom', function() {
    it('should return true if function is detect palindrom', function() {

      assert.equal(isPalindrom('car'), false);
      assert.equal(isPalindrom('reviver'), true);
    });
  });
});