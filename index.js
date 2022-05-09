const keyName = {
    firstKey:{
        Backquote: '`',
        Number1: '1',
        Number2: '2',
        Number3: '3',
        Number4: '4',
        Number5: '5',
        Number6: '6',
        Number7: '7',
        Number8: '8',
        Number9: '9',
        Number0: '0',
        Minus: '-',
        Equal: '=',
        Backspace: 'backspace',
        Tab: 'tab',
        KeyQ: 'q',
        KeyW: 'w',
        KeyE: 'e',
        KeyR: 'r',
        KeyT: 't',
        KeyY: 'y',
        KeyU: 'u',
        KeyI: 'i',
        KeyO: 'o',
        KeyP: 'p',
        BracketLeft: '[',
        BracketRight: ']',
        BackSlash: '\\',
        Delete: 'del',
        CapsLock: 'capslock',
        KeyA: 'a',
        KeyS: 's',
        KeyD: 'd',
        KeyF: 'f',
        KeyG: 'g',
        KeyH: 'h',
        KeyJ: 'j',
        KeyK: 'k',
        KeyL: 'l',
        Semicolon: ';',
        Quote: "'",
        Enter: 'enter',
        ShiftLeft: 'shift',
        KeyZ: 'z',
        KeyX: 'x',
        KeyC: 'c',
        KeyV: 'v',
        KeyB: 'b',
        KeyN: 'n',
        KeyM: 'm',
        Comma: ',',
        Period: '.',
        Slash: '/',
        ArrowUp: '🠕',
        ShiftRight: 'shift ',
        ControlLeft: 'ctrl',
        WinLeft: 'win',
        AltLeft: 'alt',
        Space: 'space',
        AltRight: 'alt',
        ControlRight: 'ctrl',
        ArrowLeft: '🠔',
        ArrowDown: '🠗',
        ArrowRight: '🠖',
    }
};

class Keyboard {
  constructor(color='grey'){
    this.color = color;
    this.wrapper;
    this.content;
    this.textarea;
    this.keyboard;
    this.keys;
    this.key;
    this.transfer;
    this.span;
    this.enter;
  }

creatWrapper(){
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    document.body.append(this.wrapper);
    this.content = document.createElement('div');
    this.content.classList.add('content');
    this.wrapper.append(this.content);
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('text-area');
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard', 'keyboard-contetn');
    this.content.append(this.textarea, this.keyboard);
    this.keys = document.createElement('div');
    this.keys.classList.add('keyboard-keys');
    this.keyboard.append(this.creatKey(keyName.firstKey));
}

creatKey(obj){
    for(let [key, value] of Object.entries(obj)){
        this.key = document.createElement('button');
        this.key.classList.add('keyboard-key');
        this.key.setAttribute('data-key', `${key}`);
        this.key.setAttribute('data-value', `${value}`);
        this.span = document.createElement('span');
        this.span.setAttribute('data-value', `${value}`);
        this.span.classList.add('keyboard-span');
        this.key.append(this.span);
        this.keys.append(this.key)
        if (value === 'del' || value === 'enter') {
            this.span.textContent = value.toUpperCase();
          } else if(value === 'tab'||value === 'capslock'||value === 'shift'||value === 'alt'||value === 'ctrl'||value === 'win'||value === 'enter'||key === 'ShiftRight' || value === 'backspace'){
            this.span.textContent =
              value.slice(0, 1).toUpperCase() + value.slice(1);
          } else {
            this.span.textContent = value.toLowerCase();
          }
        // if (value === 'tab'||value === 'capslock'||value === 'shift'||value === 'alt'||value === 'ctrl'||value === 'win'||value === 'enter'||value === 'del'||value === 'backspace'||key === 'ShiftRight'){
        //     this.key.style.background = (this.color)
        // }

    }
    return this.keys
}


}

let a = new Keyboard('rgb(201 54 54)');
 a.creatWrapper()


const button = document.querySelectorAll('.keyboard-key');
const textarea = document.querySelector('.text-area');
const span = document.querySelectorAll(".keyboard-span");
const buttonValue = document.getElementsByClassName('keyboard-key');




function showValue(event){
    textarea.value += event.currentTarget.dataset.value;
  
}
button.forEach((el) => el.addEventListener('click', showValue));

function buttonSpace(){
    if(this.dataset.value != "space"){
        return this.dataset.value
      } else {
        return this.dataset.value = " "
      }
}

button.forEach((el) => el.addEventListener('mouseover', buttonSpace));

function buttonTab(){
    if(this.dataset.value != "tab"){
        return this.dataset.value
      } else {
          return this.dataset.value = "  "
      }
}
button.forEach((el) => el.addEventListener('mouseover', buttonTab));

function buttonBackspace(){
    if(this.dataset.value != "backspace"){
        return this.dataset.value
      } else {
         this.dataset.value = ""
      }
}

button.forEach((el) => el.addEventListener('mouseover', buttonBackspace));

function buttonBackspaceDel(){
    if(this.dataset.key != "Backspace"){
        return this.dataset.value
      } else {
        let a = textarea.value.toString()
        return textarea.value = a.slice(0, -1);

}
}

button.forEach((el) => el.addEventListener('click', buttonBackspaceDel)); 

// function buttonCaps(){
//     if(this.dataset.key != "CapsLock"){
//         return this.dataset.value
//       } else {
//         console.log(button.dataset.value)
//       }
//       }


// button.forEach((el) => el.addEventListener('click', buttonCaps));

function buttonCapsDel(){
    if(this.dataset.value != "capslock"){
        return this.dataset.value
      } else {
        this.dataset.value = ""
      }
}
button.forEach((el) => el.addEventListener('mouseover', buttonCapsDel));

function buttonCtrl(){
    if(this.dataset.value != "ctrl"){
        return this.dataset.value
      } else {
        this.dataset.value = ""
      }
}
button.forEach((el) => el.addEventListener('mouseover', buttonCtrl));

function buttonAlt(){
    if(this.dataset.value != "alt"){
        return this.dataset.value
      } else {
        this.dataset.value = ""
      }
}
button.forEach((el) => el.addEventListener('mouseover', buttonAlt));

function buttonShiftLeft(){
    if(this.dataset.key != "ShiftLeft"){
        return this.dataset.value
      } else {
        this.dataset.value = ""
      }
}
button.forEach((el) => el.addEventListener('mouseover', buttonShiftLeft));

function buttonShiftRight(){
    if(this.dataset.key != "ShiftRight"){
        return this.dataset.value
      } else {
        this.dataset.value = ""
      }
}
button.forEach((el) => el.addEventListener('mouseover', buttonShiftRight));

function buttonWin(){
    if(this.dataset.value != "win"){
        return this.dataset.value
      } else {
        this.dataset.value = ""
      }
}
button.forEach((el) => el.addEventListener('mouseover', buttonWin));

function buttoEnter(){
    if(this.dataset.key != "Enter"){
        return this.dataset.value 
      } else { 
          textarea.value += '\r\n'

      }
}

button.forEach((el) => el.addEventListener('click', buttoEnter))

function buttonEnterDel(){
    if(this.dataset.value != "enter"){
        return this.dataset.value 
      } else { 
        this.dataset.value = ""
      }
}

button.forEach((el) => el.addEventListener('mouseover', buttonEnterDel))

function buttonDel(){
  if(this.dataset.value != "del"){
      return this.dataset.value 
    } else { 
      this.dataset.value = ""
    }
}

button.forEach((el) => el.addEventListener('mouseover', buttonDel))


// function animationDown() {
//   this.style.borderRadius = '20px';
//   this.style.backgroundColor = 'rgb(181, 69, 69)';
// };

// button.forEach((el) => el.addEventListener('mousedown', animationDown))

// function animationUp() {
//   this.style.borderRadius = '0px';
//   this.style.backgroundColor = 'darkgrey';
// };

// button.forEach((el) => el.addEventListener('mouseup', animationUp))

function animationDown() {
  if(this.dataset.key != "Enter" && this.dataset.key != "Backspace" && this.dataset.key != "Delete" && this.dataset.key != "ShiftRight"
  && this.dataset.key != "Tab" && this.dataset.key != "CapsLock" && this.dataset.key != "ShiftLeft" && this.dataset.key != "ControlLeft"
  && this.dataset.key != "WinLeft" && this.dataset.key != "AltLeft" && this.dataset.key != "Space" && this.dataset.key != "AltRight" && this.dataset.key != "ControlRight"){
  this.style.borderRadius = '30px';
  this.style.backgroundColor = 'rgb(181, 69, 69)';
  } else {
    this.style.borderRadius = '30px';
    this.style.backgroundColor = 'darkgrey';
  }
};

button.forEach((el) => el.addEventListener('mousedown', animationDown))

function animationUp() {
  if(this.dataset.key != "Enter" && this.dataset.key != "Backspace" && this.dataset.key != "Delete" && this.dataset.key != "ShiftRight"
  && this.dataset.key != "Tab" && this.dataset.key != "CapsLock" && this.dataset.key != "ShiftLeft" && this.dataset.key != "ControlLeft"
  && this.dataset.key != "WinLeft" && this.dataset.key != "AltLeft" && this.dataset.key != "Space" && this.dataset.key != "AltRight" && this.dataset.key != "ControlRight"){
    this.style.borderRadius = '0px';
    this.style.backgroundColor = 'darkgrey'
    } else {
      this.style.borderRadius = '0px';
      this.style.backgroundColor = 'rgb(181, 69, 69)';
    }
};

button.forEach((el) => el.addEventListener('mouseup', animationUp))

// || this.dataset.key != "Backspace" || this.dataset.key != "Delete" || this.dataset.key != "ShiftRight"