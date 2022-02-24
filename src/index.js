const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
      let array = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    let unit = expr.substring(i, i + 10);
    if (unit.includes('*')) {
      array.push(' ');
      continue;
    }
    unit = unit.replace(/11/g, '-');
    unit = unit.replace(/10/g, '.');
    unit = unit.replace(/00/g, '');
    array.push(MORSE_TABLE[unit]);

  }
  return array.join('');

}

module.exports = {
    decode
}
