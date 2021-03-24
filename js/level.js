
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

document.getElementsByTagName('button')[0].addEventListener("click", () => {
    if(document.getElementsByTagName('button')[0].textContent === $done ){
        window.alert('経験値獲得！');
        roleExp = roleExp + exp;
        if(roleExp => EXPTABLE[lv]){
            lv = lv + 1;
            restExp = (EXPTABLE[lv] - roleExp);
            window.alert('LevelUP!')
            document.getElementById('your-level').textContent = lv;
        } else{
        }
    }
});
document.getElementById('rest-exp').textContent = restExp;
document.getElementById('your-level').textContent = lv;

// // デバッグ用
// console.log('もらえる経験値：',exp);
// console.log('今のレベル：',lv);
// console.log('今の経験値の量：',roleExp);
// console.log('レベルアップに必要な経験値量：',EXPTABLE[lv]);
// console.log('次に必要な経験値量：',restExp);
// console.log('＿＿＿＿＿＿＿＿＿＿＿');