// Write code under this line

class StringBuilder {
  constructor(parameter) {
    this._value = parameter;
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder(".");

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
