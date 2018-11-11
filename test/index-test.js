let assert = require('assert');
let emojihash = require('../index.js');
describe('emojihash', function() {
  describe('#hexStringToEmoji()', function() {
    it('should generate proper emoji string for correct hex string', function() {
      assert.equal(
              emojihash.hexStringToEmoji('c1fa4776437603db96572fd6defdfd6f'),
              '🇲🇱🇱🇻📢⌚️🛂🏣🌐🇳🇺8️⃣🇪🇪⛱🕓⌨');
    });
  });
});
