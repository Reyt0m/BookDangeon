let element = document.createElement("button"); // <button></button> ができる
element.innerHTML = "<del>Push Me</del>"; // <button><del>Push Me!</del></button> ができる

let element = document.createElement("table"); // <button></button> ができる
element.innerHTML = "<tr>この本のレベルは</tr>";
element.innerHTML = "<tr>'roleLevel'です</tr>";
let target = document.querySelector("#acrCustomerReviewText"); // 追加したい要素を見つけてくる
target.appendChild(element); // 追加する

var hardLevel = document.getElementById('productTitle');
hardLevel.insertAdjacentHTML('afterend','<div>AfterEnd</div>');

let clone = document.getElementById("productTitle").cloneNode(true);
clone.textContent = "この本のレベルは";
clone.innerHTML = "<tr>'roleLevel'です</tr>";
document.querySelector("#productTitle").appendChild(clone);

var c = document.getElementById("productTitle").cloneNode(true);
var clone = c.cloneNode(true);


//　d{3]ページ 抜き出し
var info = document.getElementsByClassName('a-section a-spacing-none a-text-center rpi-attribute-value');
console.log(info[0].textContent)
var bookPage = info[0].textContent.indexOf('ページ');
console.log(bookPage);
var pageNum = info[0].textContent.slice(0, bookPage);
console.log(pageNum);

//　ISBN取得
var info = document.getElementsByClassName('a-section a-spacing-none a-text-center rpi-attribute-value');
console.log(info[info.length - 1].textContent);
var ISBN = info[info.length - 1].textContent.replace('-', '');
console.log(ISBN);

  var xhr = new XMLHttpRequest();
xhr.responseType  = "document";

xhr.onload = function(e){
  var dom = e.target.responseXML;
  var blogs = dom.querySelectorAll('.infbox .dotted .ml10 .mt05 .pt05 ul li');
  for (var i = 0; i < blogs.length; i++) {
    var title = blogs[i].innerText;
    var url = blogs[i].getAttribute('href');
    $('#blog').append(`<p><a href="${url}" target="_blank">${title}</a></p>`);
  }
};

xhr.open("get", "https://www.kinokuniya.co.jp/f/dsg-01-");
xhr.send();

// // 寸法抜き出し
// var info = document.getElementsByClassName('a-section a-spacing-none a-text-center rpi-attribute-value');
// console.log(info[4].textContent)
// var bookPage = info[4].textContent.indexOf('cm');
// console.log(bookPage);
// var pageSize = info[4].textContent.slice(0, bookPage);
// var pazeSize = pageSize.trim();
// console.log(pageSize);

// // タイトル取得
// var title = document.getElementsByTagName('title');
// console.log(title[0].textContent)
// var titleTrue = title[0].textContent.indexOf('|');
// var titleCut = title[0].textContent.slice(0, titleTrue);
// console.log(titleCut);


