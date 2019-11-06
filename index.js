htmlGener();
let mainInput = document.querySelectorAll('#keyInput');
let divKey = document.getElementsByClassName('key');
mainInput.onkeydown = keyHandler;
mainInput.onkeydown = keyColor;

function htmlGener(){
    let input = document.createElement('input');
    input.id = "keyInput";
    document.body.append(input);

    let divKeyboard = document.createElement('div');
    divKeyboard.className = "keyboard";
    document.body.append(divKeyboard);

    let rowSpan = [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
        ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl']
    ];

    let divRow;
    let divKey;
    let span;
    let rowNum = 5;
    let divKeyNum = [14, 14, 13, 12, 6];

    for(let i = 0; i < rowNum; i++){
        divRow = document.createElement('div');
        divRow.className = "row";
        divKeyboard.appendChild(divRow);
        for(let j = 0; j < divKeyNum[i]; j++){
            divKey = document.createElement('div');
            divKey.className = "key";
            divRow.appendChild(divKey);
            span = document.createElement('span');
            divKey.appendChild(span);
            span.innerHTML = rowSpan[i][j];
        }
    }

    //ПЕРЕДЕЛАТЬ
    divKeyboard.firstElementChild.lastElementChild.className = "key backspace";
    divKeyboard.children[1].firstElementChild.className = 'key tab';
    divKeyboard.children[2].firstElementChild.className = 'key capslock';
    divKeyboard.children[2].lastElementChild.className = 'key enter';
    divKeyboard.children[3].firstElementChild.className = 'key left_shift';
    divKeyboard.children[3].lastElementChild.className = 'key right_shift';
    divKeyboard.children[4].firstElementChild.className = 'key left_ctrl';
    divKeyboard.children[4].lastElementChild.className = 'key right_ctrl';
    divKeyboard.children[4].firstElementChild.nextSibling.className = 'key win';
    divKeyboard.children[4].children[2].className = 'key left_alt';
    divKeyboard.children[4].children[3].className = 'key space';
    divKeyboard.children[4].children[4].className = 'key right_alt';
}

function keyHandler(e){
    divKey.textContent += ` ${e.code}`;
}

function keyColor(divKey){
    divKey.style.background = '#4576b6';
}
