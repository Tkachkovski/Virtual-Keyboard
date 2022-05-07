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
        CapsLock: 'caps lock',
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
        ArrowUp: 'arrowup',
        ShiftRight: 'shift ',
        ControlLeft: 'ctrl',
        WinLeft: 'win',
        AltLeft: 'alt',
        Space: 'space',
        AltRight: 'alt',
        ControlRight: 'ctrl',
        ArrowLeft: 'arrowleft',
        ArrowDown: 'arrowdown',
        ArrowRight: 'arrowright',
    }
};

class Keyboard {
  constructor(color='blue'){
    this.color = color;
    this.wrapper;
    this.content;
    this.textarea;
    this.keyboard;
    this.keys;
    this.key;
    this.transfer;
    this.span;
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
        this.span = document.createElement('span');
        this.span.classList.add('keyboard-span');
        this.key.append(this.span);
        this.keys.append(this.key)
        if (value === 'del' || value === 'enter') {
            this.span.textContent = value.toUpperCase();
          } else {
            this.span.textContent =
              value.slice(0, 1).toUpperCase() + value.slice(1);
          } 

    }
    return this.keys
}

}
 let a = new Keyboard('blue');
 a.creatWrapper()

