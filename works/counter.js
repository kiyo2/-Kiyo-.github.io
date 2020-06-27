let count = 0 //クリックした回数を保存する変数を定義
const countUp=() => { //htmlでつくった関数の性質を書いていく
  count++
  const countElement = document.querySelector('#count')//counter.htmlのidを使用する
  countElement.innerText = '回数' + count //表示内容の変更
}