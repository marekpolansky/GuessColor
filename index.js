let rgbRef = document.querySelector('.rgb');
let btn1Ref = document.getElementById('btn1');
let [rgbnum1,rgbnum2,rgbnum3] = [0,0,0];
let num;
rgbnum1 = Math.floor(Math.random() * 155) + 1;
rgbnum2 = Math.floor(Math.random() * 155) + 1;
rgbnum3 = Math.floor(Math.random() * 155) + 1;
num = Math.floor(Math.random() * 3) + 1;
if (num == 1){
    document.getElementById('btn1').style.backgroundColor= "#"+(rgbnum1).toString(16)+(rgbnum2).toString(16)+(rgbnum3).toString(16);
    document.getElementById('btn2').style.backgroundColor= "#"+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16);
    document.getElementById('btn3').style.backgroundColor= "#"+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16);
}
else if (num == 2){
    document.getElementById('btn2').style.backgroundColor= "#"+(rgbnum1).toString(16)+(rgbnum2).toString(16)+(rgbnum3).toString(16);
    document.getElementById('btn1').style.backgroundColor= "#"+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16);
    document.getElementById('btn3').style.backgroundColor= "#"+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16);
}
else if (num == 3){
    document.getElementById('btn3').style.backgroundColor= "#"+(rgbnum1).toString(16)+(rgbnum2).toString(16)+(rgbnum3).toString(16);
    document.getElementById('btn1').style.backgroundColor= "#"+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16);
    document.getElementById('btn2').style.backgroundColor= "#"+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16)+(Math.floor(Math.random() * 155) + 1).toString(16);
}

rgbRef.innerText = 'RGB(' + rgbnum1 + ',' + rgbnum2 + ',' + rgbnum3 + ')';