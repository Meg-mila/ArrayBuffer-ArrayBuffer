export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  constructor(buffer) {
  }
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const buffer16View = new Uint16Array(this.buffer);
    let result = '';
    for (let i = 0; i < buffer16View.length; i += 1) {
      result += String.fromCharCode(buffer16View[i]);
    }
    return result;
  }
}
