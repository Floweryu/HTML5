var enroll = document.getElementById("enroll");     /* 定义一个名为 enroll 的变量 */
//alert(enroll);  /*对变量进行测试*/
enroll.onclick = function(e){   /* e 为事件参数 */
    e.preventDefault();
    enroll.innerHTML = "报名成功";
    enroll.style.background = "#27cb8b";    /*背景色*/
    enroll.style.borderColor = "#27cb8b";   /*边框色*/
}