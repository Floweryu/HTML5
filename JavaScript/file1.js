var i = 5;
console.log(i);

var apple = "a kind of fruit!!";
console.log(apple);

var broken = true;
console.log(broken);

var time = 10;
time = " as d d asdas a ad ";
console.log(time);

var arr = new Array();  // 建立一个空白的数组
arr = ['a', 'b', 'c'];
console.log(arr);
arr.push("d");
console.log(arr);
arr.unshift("p");
console.log(arr);
arr.splice(1, 1);       //从第一个元素之后开始删除一个元素
console.log(arr);
arr.splice(1, 0, "m");  //在第一个元素后面添加一个元素，设置第二个参数为0
console.log(arr);

var now = new Date();
console.log(now);
console.log(now.toDateString());
console.log(now.getHours());
console.log(now.getUTCHours());

function myfunction(){
    console.log("this is a function!");
}
myfunction();

var testID = function(id) {     //匿名函数，定义一个变量名来表示函数
    console.log("my log is " + id);
}
testID(123);



