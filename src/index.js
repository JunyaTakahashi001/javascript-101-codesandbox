// 変数宣言
// 旧[ver]は上書き＆再宣言が可能ー＞使用しない

// [let]は上書き可能、再宣言不可
let val2 = "let変数";
console.log(val2);
val2 = "let再宣言";
console.log(val2);

// [const]上書き＆再宣言不可
const val3 = "const変数";
console.log(val3);

// [const]オブジェクトの場合、内部の値(プロパティ)は変更可能
const val4 = {
  name: "test",
  age: 30
};
val4.name = "test2";
// 新規プロパティ追加
val4.address = "Tokyo";
console.log(val4);

// [const]配列の場合、内部の値(プロパティ)は変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
// 配列要素追加
val5.push("monkey");
console.log(val5);

// テンプレート文字列
const name = "test";
const age = 30;
const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

// 関数
const func1 = function (str) {
  return str;
};
console.log(func1("従来の関数です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("アロー関数です"));
/** 注意点
 * 引数の「()」は省略できる
 * returnと{}は省略できる
 */
