'use strict';

var droidImg = document.getElementById('img-of-droid');
var form = document.getElementById('main-form');
var radioListener = form.querySelector('.radio');
var radio = radioListener.querySelectorAll('input');
var select = document.getElementById('main-select');
var droidNameField = document.getElementById('droidname');
var submitBtn = document.getElementById('submit-btn');
var orangeRadio = document.getElementById('orange');
var redRadio = document.getElementById('red');
var greenRadio = document.getElementById('green');
var pirpleRadio = document.getElementById('pirple');
var blueRadio = document.getElementById('blue');
var greyRadio = document.getElementById('grey');

var validateForm = function () {
    submitBtn.disabled = droidNameField.value && (select.value != 'None') ? false : 'disabled';
    if (select.value === 'None') {
        select.style = 'border: 1px solid red';
        orangeRadio.disabled = true;
        redRadio.disabled = true;
        greenRadio.disabled = true;
        pirpleRadio.disabled = true;
        blueRadio.disabled = true;
        greyRadio.disabled = true;
    } else {
        select.style = 'border: 1px solid grey';
        orangeRadio.disabled = false;
        redRadio.disabled = false;
        greenRadio.disabled = false;
        pirpleRadio.disabled = false;
        blueRadio.disabled = false;
        greyRadio.disabled = false;
    }
};

validateForm();

var checkedRadio = function () {
    var value;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            value = radio[i].value;
            break;
        };
    };
    return value;
};

var changeDroid = function () {
    if (select.value === 'None') {
        return;
    }
    droidImg.innerHTML = '';
    var color = checkedRadio();
    var type = select.options[select.selectedIndex].value;
    switch (type) {
        case 'Рексотрон':
            var toppx = 50;
            break;
        case 'Робокот':
            var toppx = 360;
            break;
        case 'Автоклав':
            var toppx = 690;
            break;
        case 'Терработ':
            var toppx = 980;
            break;
        case 'Гуманоид':
            var toppx = 1290;
            break;
        case 'Гусар':
            var toppx = 1610;
            break;
        default:
            var toppx = 50;
    }
    switch (color) {
        case 'orange':
            var leftpx = 0;
            break;
        case 'red':
            var leftpx = 250;
            break;
        case 'green':
            var leftpx = 500;
            break;
        case 'pirple':
            var leftpx = 750;
            break;
        case 'blue':
            var leftpx = 1000;
            break;
        case 'grey':
            var leftpx = 1250;
            break;
        default:
            var leftpx = 0;
    }

    droidImg.innerHTML = "<div style='width: 250px; min-height: 300px; background: url(img/robots_sprite.png) no-repeat; background-position: -" + leftpx + "px -" + toppx + "px;'></div>";
    
    validateForm();
};

select.addEventListener('change', changeDroid);
radioListener.addEventListener('change', changeDroid);
droidNameField.addEventListener('change', validateForm);
