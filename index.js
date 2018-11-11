const bigInt = require("big-integer");
const emojiList = require("./emojis.js").emojiList;

exports.hexStringToEmoji = function(hexStr) {
    let hash = bigInt(hexStr, 16);
    let emojiStr = "";
    while (hash.greater(0)) {
        let emojiIndex = hash.mod(emojiList.length);
        emojiStr += emojiList[emojiIndex];
        hash = hash.divide(emojiList.length);
    }
    return emojiStr;
}



