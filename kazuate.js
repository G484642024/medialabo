// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let seikai = 0;

  // ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu;

  let yoso1 = document.querySelector('input[name="kaitou"]');
  let yoso = Number(yoso1.value);

  let r = document.querySelector('span#answer');
  r.textContent = yoso;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

  if (kaisu > 4 || seikai >= 1) {

    let r = document.querySelector('p#result');
    r.textContent ='答えは'+kotae+'でした.すでにゲームは終わっています'

  } else {

    kaisu = kaisu + 1;

  if (yoso === kotae) {

    let r = document.querySelector('p#result');
    r.textContent ='正解です.おめでとう!'
    seikai = seikai + 1;

  } else if (yoso > kotae) {

    let r = document.querySelector('p#result');
    r.textContent ='まちがい.答えはもっと小さいですよ';

  } else {

    let r = document.querySelector('p#result');
    r.textContent ='まちがい.答えはもっと大きいですよ';

  }

  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}

let b = document.querySelector('button#answer');
b.addEventListener('click',hantei);