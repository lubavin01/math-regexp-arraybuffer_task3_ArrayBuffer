function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  load() {
    this.buffer = getBuffer();
  }

  toString() {
    const view = new Uint16Array(this.buffer);
    let result = '';

    for (let i = 0; i < view.length; i += 1) {
      result += String.fromCharCode((view[i]));
    }

    return result;
  }
}
