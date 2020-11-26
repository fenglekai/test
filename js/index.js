//第一个盒子
var reddiv = document.getElementById("redbox");
var text = "this is a test";
document.write(text);
// console.log(reddiv);
// var reddivstyle = document.getElementById("redbox").style.width;
// console.log(reddivstyle);
// document.write(reddivstyle);
//获取css元素
var redstyle = document.defaultView.getComputedStyle(reddiv,null);



// console.log(redstyle.backgroundColor);
// console.log(redstyle.color);
// console.log(redstyle.width);
document.write( "<br>" + redstyle.color);
//第一个DOM事件
//document.getElementById("Img").src="img2.jpg";
var changep = document.getElementById('p');
changep.innerHTML="改变了文本内容";
changep.style.color="yellow";
//第一个button
function checkbutton(){
    var bgcolor = document.getElementById('redbox').style.backgroundColor;
    if(bgcolor != "green"){
        document.getElementById('redbox').style.backgroundColor='green';
        console.log(bgcolor);
    }else{
        document.getElementById('redbox').style.backgroundColor='blue';
        console.log(bgcolor);
    }
}
//P标签点击事件
function checkp(id){
    id.innerHTML='p 标签的点击事件 封装'
}

//鼠标悬浮事件
function mOver(obj){
    obj.innerHTML="I'm here!"
}
function mOut(obj){
    obj.innerHTML="I'm go out~"
}

//鼠标按下弹起事件
function mDown(obj){
    obj.innerHTML="I see you"
    obj.style.backgroundColor="orange"
}
function mUp(obj){
    obj.innerHTML="Check this"
    obj.style.backgroundColor="blue"
}

//监听button改变div中css属性事件
var greenbox = document.getElementById('box3');
document.getElementById('button2').addEventListener("click", checkbutton2);
greenbox.addEventListener("mouseover", mOver3);
greenbox.addEventListener("mouseout", mOut3);
//第二个button点击事件
function checkbutton2(){
    var bgcolor = document.getElementById('box3').style.backgroundColor;
    if(bgcolor != "greenyellow"){
        document.getElementById('box3').style.backgroundColor='greenyellow';
        console.log(bgcolor);
    }else{
        document.getElementById('box3').style.backgroundColor='blue';
        console.log(bgcolor);
    }
}
//box3的鼠标悬浮离开
function mOver3(){
    document.getElementById("box3").style.backgroundColor="orange";
}
function mOut3(){
    document.getElementById("box3").style.backgroundColor="red";
}

//监听事件计算乘法
document.getElementById("commit").addEventListener("click", function() {
     var a = document.getElementById("inputa").value;
     var b = document.getElementById("inputb").value;
     mathfunction(a, b);
});
function mathfunction(a,b) {
    if (isNaN(a)||isNaN(b)) {
        alert('请输入数字');
    } else {
        var result = a * b;
        document.getElementById("result").value = result;
    }
}

//利用DOM创建结点
var para = document.createElement('p');
var node = document.createTextNode('这是一个用DOM创建新的段落。');
para.appendChild(node);

var elebox4 = document.getElementById('box4');
elebox4.appendChild(para);
//创建结点并放在指定元素前
var elep1 = document.getElementById('p1');
elebox4.insertBefore(para ,elep1);
//移除元素结点
var elep2 = document.getElementById('p2');
//elebox4.removeChild(elep2);
//替换元素结点
elebox4.replaceChild(para, elep2);

//获取元素对象
var allp = document.getElementsByTagName('p');
//所有数据
console.log(allp);
//第二条数据
console.log(allp[1]);
//数据的个数
console.log(allp.length);
//bt改变元素对象css属性
document.getElementById('button3').addEventListener('click', function(){
    btchange();
})
function btchange() {
    var i;
    for (i = 0; i < allp.length;i++) {
        allp[i].style.color='red';
    }
}

document.getElementById('button4').addEventListener('click', function(){
    btchange2();
})
function btchange2() {
    var i;
    for (i = 0; i < allp.length;i++) {
        allp[i].style.color='black';
    }
}

var iNodeList = document.querySelectorAll('p');
console.log(iNodeList);