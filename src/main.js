let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我叫小郑
* 接下来我要演示一下我的前端功底
* 首先我要准备一个div
*/
#yinyang{
  width:200px;
  height:200px;
  border:1px solid red;
}
/* 接下来我要把 div 变成一个八卦图
 * 注意看好了
 * 首先把 div 变成一个圆
 */
#yinyang{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/* 八卦是阴阳形成
 * 一黑一白
 */
#yinyang{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%); 
}
/* 然后给它加上两个神秘的小球 */
#yinyang::before{
  width:100px;
  height:100px;
  background:#fff;
  border:35px solid #000;
}
#yinyang::after{
  width:100px;
  height:100px;
  background:#000;
  border:35px solid #fff;
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      // 如果是回车就直接用<br>代替
      string2 += "<br>";
    } else if (string[n] === " ") {
      // 如果是空格就直接用&nbsp;代替
      string2 += "&nbsp;";
    } else {
      // 如果不是回车就照搬string
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      // 如果是n不是最后一个就继续
      n += 1;
      step();
    }
  }, 50);
};

step();
