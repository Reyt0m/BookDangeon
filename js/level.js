
const exp = 5;
const $done = '読み終わった！';
var lv = 1;
var roleExp = 0;
var EXPTABLE = [
    0,
    4,
    10,
    22,
    38,
    58,
    72,
    99
];
var restExp = (EXPTABLE[lv] - roleExp);
var startBar = 100*(EXPTABKLE[lv]-roleExp)/EXPTABLE[lv];
var goalBar = 100*restExp/EXPTABKLE[lv];
var skillbar = document.getElementById('bookLevelBar');

console.log('もらえる経験値：',exp);
console.log('今のレベル：',lv);
console.log('今の経験値の量：',roleExp);
console.log('レベルアップに必要な経験値量：',EXPTABLE[lv]);
console.log('次のレベルアップに必要な経験値量：',EXPTABLE[lv+1]);
console.log('次に必要な経験値量：',restExp);
console.log('＿＿＿＿＿＿＿＿＿＿＿');


document.getElementsByTagName('button')[0].addEventListener("click", () => {
    if(document.getElementsByTagName('button')[0].textContent === $done ){
        window.alert('経験値獲得！');
        roleExp = roleExp + exp;
        if(roleExp => EXPTABLE[lv]){
            lv = lv + 1;
            restExp = (EXPTABLE[lv] - roleExp);
            window.alert('LevelUP!')
            document.getElementById('your-level').textContent = lv;
            console.log('もらえる経験値：',exp);
            console.log('今のレベル：',lv);
            console.log('今の経験値の量：',roleExp);
            console.log('レベルアップに必要な経験値量：',EXPTABLE[lv]);
            console.log('次に必要な経験値量：',restExp);
            console.log('＿＿＿＿＿＿＿＿＿＿＿');
        } else{
            restExp = (EXPTABLE[lv] - roleExp);
            window.alert('次のレベルアップまで残り',restExp )
            document.getElementById('your-level').textContent = lv;
            console.log('もらえる経験値：',exp);
            console.log('今のレベル：',lv);
            console.log('今の経験値の量：',roleExp);
            console.log('レベルアップに必要な経験値量：',EXPTABLE[lv]);
            console.log('次に必要な経験値量：',restExp);
            console.log('＿＿＿＿＿＿＿＿＿＿＿');
        }
    }
});

jQuery( function($) {
  $('.skillbar').skillBars({
    from: 100*(EXPTABKLE[lv]-roleExp)/EXPTABLE[lv],	// バーの動くスタート位置
    speed: 4000,  // 動くスピード
    interval: 100, // 動き始めるまでの時間
  });
});

bookLevelBar.setAttribute('data-percent', 100*restExp/EXPTABKLE[lv]);
document.getElementById('rest-exp').textContent = restExp;
document.getElementById('your-level').textContent = lv;
// document.getElementById('your-name').textContent = userName;

{/* <div id="bookLevelBar" class="skillbar skillbar-html" data-percent="88"> */}
// <table>
// <tr>
//   <button id="$done">読み終わった！</button>
// </tr>
// <tr>
//   <button id="yet">まだ！</button>
// </tr>
// </table>
// <div>
// <span id="your-name">あなた</span>
// <span>のレベルは</span>
// <span id="your-level">1</span>
// <span>です</span>
// </div>
// <!-- <script src="./js/popup.js"></script> -->
// <script src="./js/popup.js"></script>
// </body>
// </html>
// 初期レベルは１にする。
// ボタンを押すと、経験値が入る。

// $("#done").on("click", () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, 
//         function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, {
//         let level('level'+1)
//         alert("exp 獲得")
//       });
//     });
//   });

// // Playerインスタンスのexpが上記表示を越えたらレベルアップとします。
// function checkLvUp(){
//     var currentLv = this.lv;
//     var currentExp = this.exp;
//     var nextLvExp = 
//     if( EXPTABLE[currentLv - 1] !== undefined ){
//     var nextLvExp = EXPTABLE[currentLv - 1];
//         console.log(EXPTABLE.length, nextLvExp)
//         if( currentExp >= nextLvExp ){
//             //レベルアップ処理
//             this.lvup();
//             this.checkLvUp();
//         }
//     }
// },
// function LvUp(){
//     this.lv += 1;
//     var msg = "LVUP! LV:"+this.lv+" ";
//     console.log(msg);
//     MSGLABEL.text = msg;
// },