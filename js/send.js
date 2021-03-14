//変数sendをメッセージで送る
chrome.runtime.sendMessage(send, function(response) {
    console.log(response);//メッセージの受け手がレスを返したときキャッチできる
 });