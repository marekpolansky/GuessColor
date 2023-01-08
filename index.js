let rgbRef = document.querySelector('.rgb');
let btn1Ref = document.getElementById('btn1');
let [rgbnum1,rgbnum2,rgbnum3] = [0,0,0];
rgbnum1 = Math.floor(Math.random() * 256);
rgbnum2 = Math.floor(Math.random() * 256);
rgbnum3 = Math.floor(Math.random() * 256);
    
function playEasy(){    
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1){
        document.getElementById('btn2').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb()
        document.getElementById('btn4').style.backgroundColor= getRandomRgb()
    }
    else if (num == 2){
        document.getElementById('btn3').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn4').style.backgroundColor= getRandomRgb()
        document.getElementById('btn2').style.backgroundColor= getRandomRgb()
    }
    else if (num == 3){
        document.getElementById('btn4').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb()
        document.getElementById('btn2').style.backgroundColor= getRandomRgb()
    }
}
function playHard(){    
    let num = Math.floor(Math.random() * 5) + 1;
    if (num == 1){
        document.getElementById('btn2').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb()
        document.getElementById('btn4').style.backgroundColor= getRandomRgb()
        document.getElementById('btn1').style.backgroundColor= getRandomRgb()
        document.getElementById('btn5').style.backgroundColor= getRandomRgb()
    }
    else if (num == 2){
        document.getElementById('btn3').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn4').style.backgroundColor= getRandomRgb()
        document.getElementById('btn2').style.backgroundColor= getRandomRgb()
        document.getElementById('btn1').style.backgroundColor= getRandomRgb()
        document.getElementById('btn5').style.backgroundColor= getRandomRgb()
    }
    else if (num == 3){
        document.getElementById('btn4').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb()
        document.getElementById('btn2').style.backgroundColor= getRandomRgb()
        document.getElementById('btn1').style.backgroundColor= getRandomRgb()
        document.getElementById('btn5').style.backgroundColor= getRandomRgb()
    }
    else if (num == 5){
        document.getElementById('btn1').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb()
        document.getElementById('btn2').style.backgroundColor= getRandomRgb()
        document.getElementById('btn5').style.backgroundColor= getRandomRgb()
        document.getElementById('btn4').style.backgroundColor= getRandomRgb()
    }
    else if (num == 5){
        document.getElementById('btn5').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn4').style.backgroundColor= getRandomRgb()
        document.getElementById('btn2').style.backgroundColor= getRandomRgb()
        document.getElementById('btn3').style.backgroundColor= getRandomRgb()
        document.getElementById('btn1').style.backgroundColor= getRandomRgb()
    }
}
function getRandomRgb(){
    return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"; 
}

rgbRef.innerText = 'RGB(' + rgbnum1 + ',' + rgbnum2 + ',' + rgbnum3 + ')';