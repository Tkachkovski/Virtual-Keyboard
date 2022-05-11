let capslock = false;

function switchCapsLock(){
  capslock = !capslock;
}

function getDelClick(){
  return function(){
    textarea.value = ""
  }
}

function getEnterClick(){
  return function(){
    textarea.value += '\r\n'
  }
} 

function getBackspaceClick(){
  return function(){
    let valueToString = textarea.value.toString()
    textarea.value = valueToString.slice(0, -1);
  }
}

function getDefaultKeyClick (value){
  return function(){
    textarea.value += capslock ? value.toUpperCase() : value.toLowerCase();
  }
}

const keysConfig = [
  {key: 'Backquote' , label: '`' , value: '`', handler: getDefaultKeyClick('`')},
  {key: 'Number1' , label: '1' , value: '1', handler: getDefaultKeyClick('1')},
  {key: 'Number2' , label: '2' , value: '2', handler: getDefaultKeyClick('2')},
  {key: 'Number3' , label: '3' , value: '3', handler: getDefaultKeyClick('3')},
  {key: 'Number4' , label: '4' , value: '4', handler: getDefaultKeyClick('4')},
  {key: 'Number5' , label: '5' , value: '5', handler: getDefaultKeyClick('5')},
  {key: 'Number6' , label: '6' , value: '6', handler: getDefaultKeyClick('6')},
  {key: 'Number7' , label: '7' , value: '7', handler: getDefaultKeyClick('7')},
  {key: 'Number8' , label: '8' , value: '8', handler: getDefaultKeyClick('8')},
  {key: 'Number9' , label: '9' , value: '9', handler: getDefaultKeyClick('9')},
  {key: 'Number0' , label: '0' , value: '0', handler: getDefaultKeyClick('0')},
  {key: 'Minus' , label: '-' , value: '-', handler: getDefaultKeyClick('-')},
  {key: 'Equal' , label: '=' , value: '=', handler: getDefaultKeyClick('=')},
  {key: 'Backspace' , label: 'Backspace' , value: '', handler: getBackspaceClick(), isRedBut: true},
  {key: 'Tab' , label: 'Tab' , value: '  ', handler: getDefaultKeyClick('  '), isRedBut: true},
  {key: 'KeyQ' , label: 'q' , value: 'q', handler: getDefaultKeyClick('q')},
  {key: 'KeyW' , label: 'w' , value: 'w', handler: getDefaultKeyClick('w')},
  {key: 'KeyE' , label: 'e' , value: 'e', handler: getDefaultKeyClick('e')},
  {key: 'KeyR' , label: 'r' , value: 'r', handler: getDefaultKeyClick('r')},
  {key: 'KeyT' , label: 't' , value: 't', handler: getDefaultKeyClick('t')},
  {key: 'KeyY' , label: 'y' , value: 'y', handler: getDefaultKeyClick('y')},
  {key: 'KeyU' , label: 'u' , value: 'u', handler: getDefaultKeyClick('u')},
  {key: 'KeyI' , label: 'i' , value: 'i', handler: getDefaultKeyClick('i')},
  {key: 'KeyO' , label: 'o' , value: 'o', handler: getDefaultKeyClick('o')},
  {key: 'KeyP' , label: 'p' , value: 'p', handler: getDefaultKeyClick('p')},
  {key: 'BracketLeft' , label: '[' , value: '[', handler: getDefaultKeyClick('[')},
  {key: 'BracketRight' , label: ']' , value: ']', handler: getDefaultKeyClick(']')},
  {key: 'BackSlash' , label: '\\' , value: '\\', handler: getDefaultKeyClick('\\')},
  {key: 'Delete' , label: 'Del' , value: '', handler: getDelClick(), isRedBut: true },
  {key: 'CapsLock' , label: 'Caps' , value: '', handler: CapsLockHandler, isRedBut: true, },
  {key: 'KeyA' , label: 'a' , value: 'a', handler: getDefaultKeyClick('a')},
  {key: 'KeyS' , label: 's' , value: 's', handler: getDefaultKeyClick('s')},
  {key: 'KeyD' , label: 'd' , value: 'd', handler: getDefaultKeyClick('d')},
  {key: 'KeyF' , label: 'f' , value: 'f', handler: getDefaultKeyClick('f')},
  {key: 'KeyG' , label: 'g' , value: 'g', handler: getDefaultKeyClick('g')},
  {key: 'KeyH' , label: 'h' , value: 'h', handler: getDefaultKeyClick('h')},
  {key: 'KeyJ' , label: 'j' , value: 'j', handler: getDefaultKeyClick('j')},
  {key: 'KeyK' , label: 'k' , value: 'k', handler: getDefaultKeyClick('k')},
  {key: 'KeyL' , label: 'l' , value: 'l', handler: getDefaultKeyClick('l')},
  {key: 'Semicolon' , label: ';' , value: ';', handler: getDefaultKeyClick(';')},
  {key: 'Quote' , label: "'" , value: "'", handler: getDefaultKeyClick("'")},
  {key: 'Enter' , label: 'Enter' , value: '', handler: getEnterClick(), isRedBut: true},
  {key: 'ShiftLeft' , label: 'Shift' , value: '', handler: getDefaultKeyClick(''), isRedBut: true},
  {key: 'KeyZ' , label: 'z' , value: 'z', handler: getDefaultKeyClick('z')},
  {key: 'KeyX' , label: 'x' , value: 'x', handler: getDefaultKeyClick('x')},
  {key: 'KeyC' , label: 'c' , value: 'c', handler: getDefaultKeyClick('c')},
  {key: 'KeyV' , label: 'v' , value: 'v', handler: getDefaultKeyClick('v')},
  {key: 'KeyB' , label: 'b' , value: 'b', handler: getDefaultKeyClick('b')},
  {key: 'KeyN' , label: 'n' , value: 'n', handler: getDefaultKeyClick('n')},
  {key: 'KeyM' , label: 'm' , value: 'm', handler: getDefaultKeyClick('m')},
  {key: 'Comma' , label: ',' , value: ',', handler: getDefaultKeyClick(',')},
  {key: 'Period' , label: '.' , value: '.', handler: getDefaultKeyClick('.')},
  {key: 'Slash' , label: '/' , value: '/', handler: getDefaultKeyClick('/')},
  {key: 'ArrowUp' , label: '🠕' , value: '🠕', handler: getDefaultKeyClick('🠕')},
  {key: 'ShiftRight' , label: 'Shift' , value: '', handler: getDefaultKeyClick(''), isRedBut: true},
  {key: 'ControlLeft' , label: 'Ctrl' , value: '', handler: getDefaultKeyClick(''), isRedBut: true},
  {key: 'WinLeft' , label: 'Win' , value: '', handler: getDefaultKeyClick(''), isRedBut: true},
  {key: 'AltLeft' , label: 'Alt' , value: '', handler: getDefaultKeyClick(''), isRedBut: true},
  {key: 'Space' , label: 'Space' , value: ' ', handler: getDefaultKeyClick(' '), isRedBut: true},
  {key: 'AltRight' , label: 'Alt' , value: '', handler: getDefaultKeyClick(''), isRedBut: true},
  {key: 'ControlRight' , label: 'Ctrl' , value: '', handler: getDefaultKeyClick(''), isRedBut: true},
  {key: 'ArrowLeft' , label: '🠔' , value: '🠔', handler: getDefaultKeyClick('🠔')},
  {key: 'ArrowDown' , label: '🠗' , value: '🠗', handler: getDefaultKeyClick('🠗')},
  {key: 'ArrowRight' , label: '🠖' , value: '🠖', handler: getDefaultKeyClick('🠖')},
]

class Keyboard {
  constructor(color='grey'){
    this.color = color;
    this.wrapper;
    this.content;
    this.textarea;
    this.keyboard;
    this.keys;
    this.key;
    this.span;
    this.enter;
  }

creatWrapper(){
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    document.body.prepend(this.wrapper);
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
    this.creatKey();
}

creatKey(){
  keysConfig.forEach((el) =>  {
      const {value, key, label, handler} = el;
      this.key = document.createElement('button');
      this.key.classList.add('keyboard-key');
      this.key.setAttribute('data-key', `${key}`);
      this.key.setAttribute('data-value', `${value}`);
      this.span = document.createElement('span');
      this.span.setAttribute('data-value', `${value}`);
      this.span.classList.add('keyboard-span');
      this.span.setAttribute('id', key);
      this.key.append(this.span);
      this.keys.append(this.key)
      this.span.textContent = label;
      this.key.addEventListener('click', handler);
  })
  this.keyboard.append(this.keys)
}

updateKeyboard(){
  keysConfig.forEach((el) =>{
    const spanObject = document.getElementById(el.key);
    if (el.isRedBut){
      return
    }
    if (capslock !== false){
      spanObject.textContent = el.label.toUpperCase()
    } else{
      spanObject.textContent = el.label.toLowerCase()
    }
  })
}

}

let a = new Keyboard('rgb(201 54 54)');
 a.creatWrapper()
 switchCapsLock()

function CapsLockHandler(){
  switchCapsLock();
  a.updateKeyboard();
}

const button = document.querySelectorAll('.keyboard-key');
const textarea = document.querySelector('.text-area');

function shiftClickDown(){
  if(this.dataset.key != "ShiftLeft" && this.dataset.key != "ShiftRight"){
    this.dataset.value
  } else {
    CapsLockHandler()
  }
}

button.forEach((el) => el.addEventListener('mousedown', shiftClickDown));

function shiftClickUp(){
  if(this.dataset.key != "ShiftLeft" && this.dataset.key != "ShiftRight"){
    this.dataset.value
  } else {
    CapsLockHandler()
  }
}

button.forEach((el) => el.addEventListener('mouseup', shiftClickUp));

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
}

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
}

button.forEach((el) => el.addEventListener('mouseup', animationUp))
