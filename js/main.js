console.log('test');

var txtInput = document.getElementById('ib-input');//Блок в который вводят текст
var outputBlock = document.getElementById('output-block');

txtInput.addEventListener('input', output);

function output(){
    outputBlock.innerHTML = txtInput.value;
}
// Изменить Font Family в виводе
var fontFam = document.getElementById('font-family');
fontFam.addEventListener('change', changeFontFam);

function changeFontFam(){
    var selectState = fontFam.value;
    outputBlock.style.fontFamily = `'` + selectState + `'`;
}
//Изменить Font стиль в виводе
var fontStyle = document.getElementById('font-style');
fontStyle.addEventListener('change', changeFontStyle);

function changeFontStyle(){
    var selectState = fontStyle.value;
    outputBlock.style.fontStyle = selectState;
}
//Изменить цвет шрифта в виводе
var fontColor = document.getElementById('fontColor');
fontColor.addEventListener('change', changeFontColor);

function changeFontColor(){
    var selectState = fontColor.value;
    outputBlock.style.color = selectState;
}

//
var fontSize = document.getElementById('fontSize');
fontSize.addEventListener('change', changeFontSize);
fontSize.addEventListener('mousemove', changeFontSize);

function changeFontSize(){
    var selectState = fontSize.value;
    outputBlock.style.fontSize = selectState + 'px';
}
// 
var fontWeight = document.getElementById('fontWeight');
fontWeight.addEventListener('change', changeFontWeight);
fontWeight.addEventListener('mousemove', changeFontWeight);

function changeFontWeight(){
    var selectState = fontWeight.value;
    outputBlock.style.fontWeight= selectState *100;
}
