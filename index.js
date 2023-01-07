let rgbRef = document.querySelector('.rgb');
let [rgbnum1,rgbnum2,rgbnum3] = [0,0,0];
rgbnum1 = Math.floor(Math.random() * 150) + 1;
rgbnum2 = Math.floor(Math.random() * 150) + 1;
rgbnum3 = Math.floor(Math.random() * 150) + 1;
document.getElementById('.btn1').bgcolor= "#000000";
rgbRef.innerText = 'RGB(' + rgbnum1 + ',' + rgbnum2 + ',' + rgbnum3 + ')';