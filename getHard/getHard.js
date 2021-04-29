// 辞書の場所を指定 extensionAPIを利用して相対的にパスを指定する
const dicPath = chrome.extension.getURL("./kuromoji/dict/")



const $reviewAll = document.getElementsByClassName('a-size-base review-text review-text-content');
for (let i = 0; i = 10; i++){
    console.log(reviewAll[i].textContent);
    }



kuromoji.builder({ dicPath: dicPath }).build(function (err, tokenizer) {
    // tokenizer is ready
    var path = tokenizer.tokenize("すもももももももものうち");
    console.log(path);
});

// kuromoji.builder({ dicPath: dicPath }).build(function (err, tokenizer) {
//     // tokenizer is ready
//     var path = tokenizer.tokenize(reviewAll);
//     console.log(path);
// });

