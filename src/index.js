// 変数宣言
// 旧[ver]は上書き＆再宣言が可能ー＞使用しない

// [let]は上書き可能、再宣言不可
// let val2 = "let変数";
// console.log(val2);
// val2 = "let再宣言";
// console.log(val2);

// [const]上書き＆再宣言不可
// const val3 = "const変数";
// console.log(val3);

// [const]オブジェクトの場合、内部の値(プロパティ)は変更可能
// const val4 = {
//   name: "test",
//   age: 30
// };
// val4.name = "test2";
// 新規プロパティ追加
// val4.address = "Tokyo";
// console.log(val4);

// [const]配列の場合、内部の値(プロパティ)は変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// 配列要素追加
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "test";
// const age = 30;
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// 関数
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("従来の関数です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("アロー関数です"));
/** 注意点
 * 引数の「()」は省略できる
 * returnと{}は省略できる
 */

/**
 * 分割代入object
 */
// const myProfile = {
//   name1: "Taka",
//   age1: 30
// };

// const { name1, age1 } = myProfile;
// const message1 = `名前は${name1}です。年齢は${age1}歳です。`;
// console.log(message1);

/**
 * 分割代入配列
 */
// const myProfile = ["Taka", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// 配列の場合配列順で受け取り
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * default値、引数
 * (変数 = 初期値)
 */
// const sayHello = (name = "gest") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド公文[...配列]
 * 配列を展開し順番に処理する
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// 配列をまとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

/**
 * 配列のコピー、結合
 *  */
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// コピー
// const arr6 = arr4;の場合、参照先を渡すだけなので、arr6を変更するとarr4も変更される
// const arr6 = [...arr4];
// console.log(arr6);

// 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map,filterを使った配列の処理
 */
// 従来のroop処理
const nameArr = ["田中", "山田", "高橋"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// map(配列を単純にループする方法　※第二引数でindex番号が受け取れる)
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// map（リターンされた値に基づいて新しい配列を生成する）
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// filter（return文に一致するものだけ取り出して配列に格納する）
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// sampleコード
// const newNameArr = nameArr.map((name) => {
//   if (name === "高橋") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 * ある条件　？　条件がtrueの時 : 'falseです';
 */
// sample1
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// sample2
//[typeof]変数の型を返す
// [toLocaleString]数値を3桁区切りで[,]をつける
// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい";
// console.log(formattedNum);

// sample3　returnで三項演算子を使用する
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲です";
};
console.log(checkSum(50, 40));
