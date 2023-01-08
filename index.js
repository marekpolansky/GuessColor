let rgbRef = document.querySelector('.rgb');
let btn1Ref = document.getElementById('btn1');
let [rgbnum1,rgbnum2,rgbnum3] = [0,0,0];

wasTheGameWon = false;
easy = false;
hard = false;

function getRandom(){
    rgbnum1 = Math.floor(Math.random() * 256);
    rgbnum2 = Math.floor(Math.random() * 256);
    rgbnum3 = Math.floor(Math.random() * 256);
    rgbRef.innerText = 'rgb(' + rgbnum1 + ', ' + rgbnum2 + ', ' + rgbnum3 + ')';
}
function playEasy(){    
    getRandom();
    let num = Math.floor(Math.random() * 3) + 1;

    document.getElementById('btn1').style.backgroundColor = 'inherit';
    document.getElementById('btn5').style.backgroundColor = 'inherit';

    if (num == 1){
        document.getElementById('btn2').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb();
        document.getElementById('btn4').style.backgroundColor= getRandomRgb();
    }
    else if (num == 2){
        document.getElementById('btn3').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn4').style.backgroundColor= getRandomRgb();
        document.getElementById('btn2').style.backgroundColor= getRandomRgb();
    }
    else if (num == 3){
        document.getElementById('btn4').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb();
        document.getElementById('btn2').style.backgroundColor= getRandomRgb();
    }
}
function playHard(){    
    getRandom();
    let num = Math.floor(Math.random() * 5) + 1;
    console.log(num);
    if (num == 1){
        document.getElementById('btn2').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb();
        document.getElementById('btn4').style.backgroundColor= getRandomRgb();
        document.getElementById('btn1').style.backgroundColor= getRandomRgb();
        document.getElementById('btn5').style.backgroundColor= getRandomRgb();
    }
    else if (num == 2){
        document.getElementById('btn3').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn4').style.backgroundColor= getRandomRgb();
        document.getElementById('btn2').style.backgroundColor= getRandomRgb();
        document.getElementById('btn1').style.backgroundColor= getRandomRgb();
        document.getElementById('btn5').style.backgroundColor= getRandomRgb();
    }
    else if (num == 3){
        document.getElementById('btn4').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb();
        document.getElementById('btn2').style.backgroundColor= getRandomRgb();
        document.getElementById('btn1').style.backgroundColor= getRandomRgb();
        document.getElementById('btn5').style.backgroundColor= getRandomRgb();
    }
    else if (num == 4){
        document.getElementById('btn1').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn3').style.backgroundColor= getRandomRgb();
        document.getElementById('btn2').style.backgroundColor= getRandomRgb();
        document.getElementById('btn5').style.backgroundColor= getRandomRgb();
        document.getElementById('btn4').style.backgroundColor= getRandomRgb();
    }
    else if (num == 5){
        document.getElementById('btn5').style.backgroundColor= "rgb(" + rgbnum1 + ", " + rgbnum2 + ", " + rgbnum3 + ")";
        document.getElementById('btn4').style.backgroundColor= getRandomRgb();
        document.getElementById('btn2').style.backgroundColor= getRandomRgb();
        document.getElementById('btn3').style.backgroundColor= getRandomRgb();
        document.getElementById('btn1').style.backgroundColor= getRandomRgb();
    }
}

function getRandomRgb(){
    return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"; 
}

function init(){
    initializeSelector();
}

function initializeSelector(){
    easyBtn = document.getElementById('easybtn');
    hardBtn = document.getElementById('hardbtn');
    easyBtn.addEventListener('click', ()=>
        {
            playEasy();
            easy = true;
            hard = false;
            document.getElementById('stateString').innerText = '';
            initializeButtons();
        }
    );

    hardBtn.addEventListener('click', ()=>
        {
            playHard();
            hard = true;
            easy = false;
            document.getElementById('stateString').innerText = '';
            initializeButtons();
        }
    );
}

function initializeButtons(){
    if(easy){
        buttonsList = 
        [
            document.getElementById('btn2'), 
            document.getElementById('btn3'), 
            document.getElementById('btn4'), 

        ];
        document.getElementById('btn2').addEventListener('click', ()=>
            {
                if(document.getElementById('btn2').style.backgroundColor == rgbRef.innerText){
                    winningSequence(buttonsList);
                }
                else{
                    document.getElementById('btn2').style.backgroundColor = 'inherit';
                }
            }
        );

        document.getElementById('btn3').addEventListener('click', ()=>
            {
                if(document.getElementById('btn3').style.backgroundColor == rgbRef.innerText){
                    winningSequence(buttonsList);
                }
                else{
                    document.getElementById('btn3').style.backgroundColor = 'inherit';
                }
            }
        );

        document.getElementById('btn4').addEventListener('click', ()=>
            {
                if(document.getElementById('btn4').style.backgroundColor == rgbRef.innerText){
                    winningSequence(buttonsList);
                }
                else{
                    document.getElementById('btn4').style.backgroundColor = 'inherit';
                }
            }
        );
    }
    else if(hard){
        buttonsList = 
        [
            document.getElementById('btn1'), 
            document.getElementById('btn2'), 
            document.getElementById('btn3'), 
            document.getElementById('btn4'), 
            document.getElementById('btn5'), 

        ];
        document.getElementById('btn1').addEventListener('click', ()=>
            {
                if(document.getElementById('btn1').style.backgroundColor == rgbRef.innerText){
                    winningSequence(buttonsList);
                }
                else{
                    document.getElementById('btn1').style.backgroundColor = 'inherit';
                }
            }
        );
        document.getElementById('btn2').addEventListener('click', ()=>
            {
                if(document.getElementById('btn2').style.backgroundColor == rgbRef.innerText){
                    winningSequence(buttonsList);
                }
                else{
                    document.getElementById('btn2').style.backgroundColor = 'inherit';
                }
            }
        );

        document.getElementById('btn3').addEventListener('click', ()=>
            {
                if(document.getElementById('btn3').style.backgroundColor == rgbRef.innerText){
                    winningSequence(buttonsList);
                }
                else{
                    document.getElementById('btn3').style.backgroundColor = 'inherit';
                }
            }
        );

        document.getElementById('btn4').addEventListener('click', ()=>
            {
                if(document.getElementById('btn4').style.backgroundColor == rgbRef.innerText){
                    winningSequence(buttonsList);
                }
                else{
                    document.getElementById('btn4').style.backgroundColor = 'inherit';
                }
            }
        );
        document.getElementById('btn5').addEventListener('click', ()=>
            {
                if(document.getElementById('btn5').style.backgroundColor == rgbRef.innerText){
                    winningSequence(buttonsList);
                }
                else{
                    document.getElementById('btn5').style.backgroundColor = 'inherit';
                }
            }
        );
    }
}

function winningSequence(buttonsList){
    buttonsList.forEach(element => {
        element.style.backgroundColor = rgbRef.innerText;
    });
    wasTheGameWon = true;
    document.getElementById('stateString').style.color = 'green';
    document.getElementById('stateString').innerText = 'CORRECT';
}

init();
